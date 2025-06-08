import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import { colors } from '../styles/colors';

export default function DicasScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>🛟 Dicas de Segurança</Text>

      <View style={styles.card}>
        <Text style={styles.heading}>🔥 Em caso de incêndio:</Text>
        <Text style={styles.text}>• Mantenha a calma e evacue imediatamente pela rota mais segura.</Text>
        <Text style={styles.text}>• Cubra nariz e boca com pano úmido.</Text>
        <Text style={styles.text}>• Nunca use elevadores — prefira escadas.</Text>
        <Text style={styles.text}>• Ligue para os bombeiros: 193.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.heading}>🌡 Durante uma onda de calor:</Text>
        <Text style={styles.text}>• Beba bastante água, mesmo sem sede.</Text>
        <Text style={styles.text}>• Evite exposição ao sol entre 10h e 16h.</Text>
        <Text style={styles.text}>• Use roupas leves e de cores claras.</Text>
        <Text style={styles.text}>• Mantenha ambientes ventilados.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.heading}>🎒 Itens para evacuação:</Text>
        <Text style={styles.text}>• Documentos pessoais e remédios.</Text>
        <Text style={styles.text}>• Água potável e alimentos não perecíveis.</Text>
        <Text style={styles.text}>• Lanterna, rádio e pilhas extras.</Text>
        <Text style={styles.text}>• Máscaras, álcool em gel e roupas extras.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.heading}>👶 Cuidados com vulneráveis:</Text>
        <Text style={styles.text}>• Crianças, idosos e pets exigem atenção extra.</Text>
        <Text style={styles.text}>• Mantenha todos identificados e próximos a você.</Text>
        <Text style={styles.text}>• Leve objetos de conforto e medicações específicas.</Text>
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
    backgroundColor: colors.card, padding: 12, borderRadius: 10,
    marginBottom: 16, shadowColor: '#000', shadowOpacity: 0.1, shadowOffset: { width: 0, height: 2 }, elevation: 2,
  },
  heading: {
    fontSize: 18, fontWeight: 'bold', marginBottom: 8, color: colors.textDark,
  },
  text: {
    fontSize: 14, color: colors.text, marginBottom: 4,
  },
});