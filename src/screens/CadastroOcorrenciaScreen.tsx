import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView, ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import api from '../services/api';
import { colors } from '../styles/colors';

const tipoParaSensorId: { [key: string]: number } = {
  'Fumaça densa na mata': 1,
  'Temperatura acima do normal': 2,
  'Movimento suspeito no local': 3,
  'Queda de pressão atmosférica': 4,
  'Vazamento de gás detectado': 5,
};

export default function CadastroOcorrenciaScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [tipoOcorrencia, setTipoOcorrencia] = useState('Fumaça densa na mata');
  const [cidadeSelecionada, setCidadeSelecionada] = useState('');
  const [comentario, setComentario] = useState('');
  const [cidades, setCidades] = useState<{ id: number; nome: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCidades() {
      try {
        const response = await api.get('/cidades');
        setCidades(response.data);
        if (response.data.length > 0) {
          setCidadeSelecionada(response.data[0].id.toString());
        }
      } catch (error) {
        Alert.alert('Erro', 'Não foi possível carregar as cidades.');
      } finally {
        setLoading(false);
      }
    }

    fetchCidades();
  }, []);

  function gerarValorAleatorio(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  async function handleCadastro() {
    if (!cidadeSelecionada || !tipoOcorrencia) {
      Alert.alert('Erro', 'Preencha todos os campos obrigatórios.');
      return;
    }

    const novaOcorrencia = {
      latitude: -23.55 + Math.random() * 0.05,
      longitude: -46.63 + Math.random() * 0.05,
      dataOcorrencia: new Date().toISOString().split('T')[0],
      idCidade: parseInt(cidadeSelecionada),
      idFuncionario: gerarValorAleatorio(1, 5),
      idSensor: tipoParaSensorId[tipoOcorrencia],
      idEquipamento: gerarValorAleatorio(1, 5),
    };

    try {
      await api.post('/localizacoes', novaOcorrencia);
      Alert.alert('Sucesso', 'Ocorrência registrada com sucesso!');
      navigation.navigate('Home');
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Não foi possível registrar a ocorrência.');
    }
  }

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🚨 Relatar Ocorrência</Text>

      <Text style={styles.label}>Tipo de Ocorrência:</Text>
      <Picker
        selectedValue={tipoOcorrencia}
        onValueChange={(itemValue) => setTipoOcorrencia(itemValue)}
        style={styles.picker}
      >
        {Object.keys(tipoParaSensorId).map((tipo) => (
          <Picker.Item key={tipo} label={tipo} value={tipo} />
        ))}
      </Picker>

      <Text style={styles.label}>Cidade:</Text>
      <Picker
        selectedValue={cidadeSelecionada}
        onValueChange={(itemValue) => setCidadeSelecionada(itemValue)}
        style={styles.picker}
      >
        {cidades.map((cidade) => (
          <Picker.Item key={cidade.id} label={cidade.nome} value={cidade.id.toString()} />
        ))}
      </Picker>

      <Text style={styles.label}>Comentário (opcional):</Text>
      <TextInput
        placeholder="Ex: Fumaça visível perto do parque..."
        value={comentario}
        onChangeText={setComentario}
        multiline
        numberOfLines={4}
        style={styles.textArea}
      />

      <TouchableOpacity style={styles.button} onPress={handleCadastro}>
        <Text style={styles.buttonText}>Registrar Ocorrência</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
    color: colors.text,
  },
  picker: {
    backgroundColor: '#fff',
    marginBottom: 16,
  },
  textArea: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    height: 100,
    textAlignVertical: 'top',
    marginBottom: 20,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
});
