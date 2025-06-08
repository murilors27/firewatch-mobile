// src/components/CardOcorrencia.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../styles/colors';

interface CardOcorrenciaProps {
  cidade: string;
  tipoSensor: string;
  tipoOcorrencia: string;
  data: string;
}

export default function CardOcorrencia({ cidade, tipoSensor, tipoOcorrencia, data }: CardOcorrenciaProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>📍 {cidade}</Text>
      <Text style={styles.subtitle}>• Sensor: {tipoSensor}</Text>
      <Text style={styles.subtitle}>• Ocorrência: {tipoOcorrencia}</Text>
      <Text style={styles.date}>• Data: {data}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f9f9f9',
    padding: 14,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
  },
  subtitle: {
    fontSize: 16,
    marginTop: 4,
    color: '#444',
  },
  date: {
    fontSize: 14,
    marginTop: 6,
    color: '#777',
  },
});
