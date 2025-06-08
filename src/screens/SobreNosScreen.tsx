import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import { colors } from '../styles/colors';

export default function SobreNosScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>📱 Sobre o FireWatch</Text>

      <View style={styles.card}>
        <Text style={styles.heading}>🔍 O que é o FireWatch?</Text>
        <Text style={styles.text}>
          O FireWatch é um aplicativo de monitoramento comunitário desenvolvido com o objetivo de auxiliar moradores a detectarem riscos ambientais em tempo real, como focos de incêndio, vazamentos de gás e movimentos suspeitos.
        </Text>
        <Text style={styles.text}>
          Ele conecta a comunidade, promovendo segurança e resposta rápida através do registro colaborativo de ocorrências.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.heading}>📌 Como utilizar o app</Text>
        <Text style={styles.text}>• Acesse "Cadastrar Ocorrência" para relatar riscos identificados.</Text>
        <Text style={styles.text}>• Consulte "Ocorrências" para acompanhar alertas próximos à sua região.</Text>
        <Text style={styles.text}>• Confira "Abrigos" seguros disponíveis na sua cidade.</Text>
        <Text style={styles.text}>• Veja "Dicas de Segurança" com orientações para agir em emergências.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.heading}>👨‍💻 Desenvolvimento</Text>
        <Text style={styles.text}>
          Murilo Ribeiro | Thiago Garcia | Ian Madeira
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, padding: 16, backgroundColor: colors.background,
  },
  title: {
    fontSize: 22, fontWeight: 'bold', marginBottom: 16, color: colors.primary,
  },
  card: {
    backgroundColor: colors.card,
    padding: 12,
    borderRadius: 10,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: colors.textDark,
  },
  text: {
    fontSize: 14,
    color: colors.text,
    marginBottom: 4,
  },
});
