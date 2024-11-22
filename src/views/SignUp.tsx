import React from "react";
import { useState } from 'react';
import { FundoBG, InputLogin, ContainerComponentes, ContainerTopo, TitleGrande} from '../styles/styled';
import { ThemeProvider, Button} from '@rneui/themed';
import theme from '../styles/theme';
import { View, Image, ScrollView, Alert} from "react-native";
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../rotas/types'; 
import { addUser } from '../components/SignUpConfig.js';

const SignUp = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [course, setCourse] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignUp = () => {
        if (password !== confirmPassword) {
            Alert.alert("Erro", "As senhas não coincidem.");
            return;
        }

        // Chama a função de lógica para salvar no Firebase
        addUser(email, username, course, password);
    };
   
return(
    <FundoBG>
        <ContainerTopo>
        <Image source={require('../images/iconLoginTopo.png')} style={{marginTop: 40, bottom: 5 }}/>
        </ContainerTopo>
        <ContainerComponentes>
            
        <ThemeProvider theme={theme}>
            <ScrollView style={{marginTop: 20}}>
            <View style={{
    height: 450, alignItems: 'center', justifyContent: 'space-evenly',
    marginTop: 30, width: 350, paddingHorizontal: 2
}}>
    <InputLogin 
        placeholder='Email Estudantil / RA:' 
        placeholderTextColor={'#999393'} 
        value={email} 
        onChangeText={setEmail} 
    />
    <InputLogin 
        placeholder='Nome de usuário:' 
        placeholderTextColor={'#999393'} 
        value={username} 
        onChangeText={setUsername} 
    />
    <InputLogin 
        placeholder='Qual seu curso:' 
        placeholderTextColor={'#999393'} 
        value={course} 
        onChangeText={setCourse} 
    />
    <InputLogin 
        placeholder='Crie uma senha:' 
        placeholderTextColor={'#999393'} 
        secureTextEntry 
        value={password} 
        onChangeText={setPassword} 
    />
    <InputLogin 
        placeholder='Confirme a senha:' 
        placeholderTextColor={'#999393'} 
        secureTextEntry 
        value={confirmPassword} 
        onChangeText={setConfirmPassword} 
    />
</View>
        <View style={{height: '20%', padding: 20}}>
        <Button title='CRIAR CONTA' titleStyle={{fontSize: 18}} onPress={() => navigation.navigate('ContaCriada')}/>
        <View style={{zIndex: 1, right: -10, top: -50}}> 
            <Image source={require('../images/nuvem.png')}/> 
        </View>
        </View>
        </ScrollView>
        </ThemeProvider>
    </ContainerComponentes>
        
    </FundoBG>
)
}
export const ContaCriada = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
   
    return(
            <FundoBG>
               <ContainerTopo>
               <Image source={require('../images/iconLoginTopo.png')} style={{marginTop: 40, bottom: 5 }}/>
               </ContainerTopo>
               <ContainerComponentes>
                   <View style={{width: '80%', height: '90%', justifyContent: 'center', alignItems: 'center'}}>
                   <View style={{justifyContent: 'center', alignItems: 'center'}}>
               <Image source={require('../images/fundoCirculo.png')} style={{position: 'absolute'}}/>
                   <Image source={require('../images/circuloVerificado.png')} style={{position: 'absolute'}}/>
                   </View>
                   <TitleGrande style={{color: '#5D17EB', textAlign: 'center', marginTop: 150}}>Conta criada com sucesso!!!</TitleGrande>
                   <ThemeProvider theme={theme}>
                       <Button title={'OK'} buttonStyle={{height: 38, borderRadius: 20, width: 200, marginTop: 50, padding: 3}} titleStyle={{fontSize: 25}} 
                       onPress={() => navigation.navigate('TabBar')}/>
                   </ThemeProvider>
                   </View>
               </ContainerComponentes>
            </FundoBG>
        
    )
}
export default SignUp;