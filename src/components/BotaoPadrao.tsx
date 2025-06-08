import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';
import { colors } from '../styles/colors';

interface BotaoPadraoProps extends TouchableOpacityProps {
  titulo: string;
}

export default function BotaoPadrao({ titulo, ...rest }: BotaoPadraoProps) {
  return (
    <TouchableOpacity style={styles.botao} {...rest}>
      <Text style={styles.texto}>{titulo}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 12,
  },
  texto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});