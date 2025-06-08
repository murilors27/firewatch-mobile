import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, Alert } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import api from '../services/api';
import { colors } from '../styles/colors';
import CardOcorrencia from '../components/CardOcorrencia';

interface Ocorrencia {
  id: number;
  dataOcorrencia: string;
  cidade: { nome: string };
  sensor: { tipo: string };
}

export default function ListaOcorrenciasScreen() {
  const [ocorrencias, setOcorrencias] = useState<Ocorrencia[]>([]);
  const [loading, setLoading] = useState(true);
  const isFocused = useIsFocused();

  const gerarTipoOcorrencia = (tipoSensor: string): string => {
    if (tipoSensor.includes('Fumaça')) return 'Possível foco de incêndio';
    if (tipoSensor.includes('Temperatura')) return 'Risco de superaquecimento';
    if (tipoSensor.includes('Movimento')) return 'Movimento não autorizado';
    if (tipoSensor.includes('Pressão')) return 'Queda de pressão atmosférica';
    if (tipoSensor.includes('Gás')) return 'Vazamento de gás perigoso';
    return 'Ocorrência em análise';
  };

  useEffect(() => {
    async function fetchOcorrencias() {
      try {
        setLoading(true);
        const response = await api.get('/localizacoes');
        const ordenadas = response.data.sort((a: Ocorrencia, b: Ocorrencia) =>
          new Date(b.dataOcorrencia).getTime() - new Date(a.dataOcorrencia).getTime()
        );
        setOcorrencias(ordenadas);
      } catch (error) {
        console.error('Erro ao buscar ocorrências:', error);
        Alert.alert('Erro', 'Não foi possível carregar as ocorrências.');
      } finally {
        setLoading(false);
      }
    }

    if (isFocused) {
      fetchOcorrencias();
    }
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚠️ Ocorrências Ativas</Text>
      <Text style={styles.alert}>Acompanhe em tempo real os riscos reportados na sua região.</Text>

      {loading ? (
        <ActivityIndicator size="large" color={colors.primary} />
      ) : (
        <FlatList
          data={ocorrencias}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <CardOcorrencia
              cidade={item.cidade.nome}
              tipoSensor={item.sensor.tipo}
              tipoOcorrencia={gerarTipoOcorrencia(item.sensor.tipo)}
              data={new Date(item.dataOcorrencia + 'T03:00:00Z').toLocaleDateString()}
            />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
    color: colors.primary,
  },
  alert: {
    fontSize: 15,
    marginBottom: 12,
    color: '#444',
  },
});
