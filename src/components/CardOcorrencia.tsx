// src/components/CardOcorrencia.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../styles/colors';

interface CardOcorrenciaProps {
  cidade: string;
  tipoSensor: string;
  data: string;
}

export default function CardOcorrencia({ cidade, tipoSensor, data }: CardOcorrenciaProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>📍 {cidade}</Text>
      <Text style={styles.subtitle}>🔥 Tipo de ocorrência: {tipoSensor}</Text>
      <Text style={styles.date}>📅 {data}</Text>
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
