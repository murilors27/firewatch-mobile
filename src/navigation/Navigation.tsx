import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from './types';

import HomeScreen from '../screens/HomeScreen';
import CadastroOcorrenciaScreen from '../screens/CadastroOcorrenciaScreen';
import ListaOcorrenciasScreen from '../screens/ListaOcorrenciasScreen';
import AbrigosScreen from '../screens/AbrigosScreen';
import DicasScreen from '../screens/DicasScreen';
import DetalhesAbrigosScreen from '../screens/DetalhesAbrigosScreen';
import SobreNosScreen from '../screens/SobreNosScreen';




const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cadastro" component={CadastroOcorrenciaScreen} />
        <Stack.Screen name="Ocorrencias" component={ListaOcorrenciasScreen} />
        <Stack.Screen name="Abrigos" component={AbrigosScreen} />
        <Stack.Screen name="DetalhesAbrigos" component={DetalhesAbrigosScreen} />
        <Stack.Screen name="Dicas" component={DicasScreen} />
        <Stack.Screen name="Sobre" component={SobreNosScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
