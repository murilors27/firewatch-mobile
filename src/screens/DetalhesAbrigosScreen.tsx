import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';
import { colors } from '../styles/colors';

const abrigosMock: { [cidade: string]: string[] } = {
    'São Paulo': [
      'Escola Municipal Dom Pedro II - R. das Flores, 123',
      'Centro Comunitário São José - Av. Central, 456',
      'Ginásio Poliesportivo da Vila Mariana - R. Augusta, 789',
      'Paróquia Santo Expedito - Av. Paulista, 321',
    ],
    'Rio de Janeiro': [
      'Ginásio Municipal Maracanãzinho - R. Exemplo, 321',
      'Igreja São Sebastião - Av. Atlântica, 987',
      'Colégio Estadual Rio Claro - R. das Palmeiras, 222',
      'Centro Esportivo de Copacabana - Av. Copacabana, 888',
    ],
    'Belo Horizonte': [
      'Colégio Estadual Tiradentes - R. Minas, 654',
      'Associação de Moradores BH - Av. Brasil, 111',
      'Centro Comunitário Pampulha - R. Lagoa, 456',
      'Igreja Santa Luzia - R. da Luz, 909',
    ],
    'Curitiba': [
      'Ginásio do Bairro Novo - R. das Araucárias, 301',
      'Igreja São Vicente - Av. Paraná, 777',
      'Centro Municipal de Apoio - R. das Laranjeiras, 158',
      'Colégio Estadual Curitiba Norte - Av. Brasil, 630',
    ],
    'Salvador': [
      'Escola Municipal da Liberdade - R. João de Deus, 410',
      'Centro de Apoio São Cristóvão - Av. Oceânica, 222',
      'Igreja de São Lázaro - R. do Sol, 131',
      'Ginásio Poliesportivo Pituba - Av. ACM, 710',
    ],
  };

export default function DetalhesAbrigosScreen() {
  const route = useRoute<RouteProp<RootStackParamList, 'DetalhesAbrigos'>>();
  const { nomeCidade } = route.params;

  const abrigos = abrigosMock[nomeCidade] || ['Nenhum abrigo cadastrado para esta cidade.'];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Abrigos em {nomeCidade}</Text>
      {abrigos.map((abrigo, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.text}>{abrigo}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    color: colors.primary,
  },
  card: {
    backgroundColor: colors.card,
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  text: {
    fontSize: 15,
    color: colors.text,
  },
});