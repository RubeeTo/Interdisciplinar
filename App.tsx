import './src/configuration/firebaseConfig';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/views/Login';
import SignUp from './src/views/SignUp';
import RedefinePassword from './src/views/RedefinePassword';
import Home from './src/views/Home';
import Notifications from './src/views/Notifications';
import TabBar from './src/views/TabBar';
import Athletic from './src/views/Athletic';
import DA from './src/views/DA';
import Team from './src/views/Team';
import Sports from './src/views/Sports';
import ContactUs from './src/views/ContactUs';
import Details from './src/views/Details';
import Gallery from './src/views/Gallery';
import Eventos from './src/views/Eventos';
import DetalhesEventos from './src/views/DetalhesEventos';
import FormEvento from './src/views/FormEvento';
import { ContaCriada } from './src/views/SignUp';
import { SenhaAlterada } from './src/views/RedefinePassword';
import { MudarSenha } from './src/views/RedefinePassword';
import { Documents } from './src/views/Informations';
import ContactUsDA from './src/views/ContactUsDA';
import { RootStackParamList } from './src/rotas/types'; 

const Stack = createStackNavigator<RootStackParamList>();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="SignUp" 
          component={SignUp} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="RedefinePassword" 
          component={RedefinePassword} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Notifications" 
          component={Notifications} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="TabBar" 
          component={TabBar} 
          options={{ headerShown: false }} 
        />
         <Stack.Screen 
          name="Athletic" 
          component={Athletic} 
          options={{ headerShown: false }} 
        />
         <Stack.Screen 
          name="DA" 
          component={DA} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Team" 
          component={Team} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Sports" 
          component={Sports} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="ContactUs" 
          component={ContactUs} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Details" 
          component={Details} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Gallery" 
          component={Gallery} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Eventos" 
          component={Eventos} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="DetalhesEventos" 
          component={DetalhesEventos} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="FormEvento" 
          component={FormEvento} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="ContaCriada" 
          component={ContaCriada} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="SenhaAlterada" 
          component={SenhaAlterada} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="MudarSenha" 
          component={MudarSenha} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Documents" 
          component={Documents} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="ContactUsDA" 
          component={ContactUsDA} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;