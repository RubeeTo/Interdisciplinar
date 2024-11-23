import React, { useState } from "react";
import { FundoBG, InputLogin, ContainerComponentes, ContainerTopo, TitleGrande } from '../styles/styled.js';
import { ThemeProvider, Button } from '@rneui/themed';
import { View, Image, ScrollView, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { addUser } from '../components/SignUpConfig.js';

// Define a tipagem para as rotas da navegação
type RootStackParamList = {
    ContaCriada: undefined;
    SignUp: undefined;
    // Outras rotas, caso necessário...
};

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [course, setCourse] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [feedback, setFeedback] = useState('');

    // Tipagem para a navegação
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const clearFields = () => {
        setUsername('');
        setCourse('');
        setPassword('');
        setConfirmPassword('');
        setEmail('');
    };

    const handleAddUser = async () => {
        if (username && course && email && password) {
            try {
                await addUser(email, username, course, password);
                setFeedback(`Usuário ${username} adicionado com sucesso!`);
                clearFields();
                navigation.navigate('ContaCriada'); // Navegação para a rota "ContaCriada"
            } catch (error) {
                setFeedback(`Erro ao adicionar o usuário: ${(error as Error).message}`);
            }
        } else {
            Alert.alert('Preencha todos os campos.');
        }
    };

    return (
        <FundoBG>
            <ContainerTopo>
                <Image source={require('../images/iconLoginTopo.png')} style={{ marginTop: 40, bottom: 5 }} />
            </ContainerTopo>
            <ContainerComponentes>
                <ThemeProvider theme={{}}>
                    <ScrollView style={{ marginTop: 20 }}>
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
                        <View style={{ height: '20%', padding: 20 }}>
                            <Button
                                title='CRIAR CONTA'
                                titleStyle={{ fontSize: 18 }}
                                onPress={handleAddUser}
                            />
                            <View style={{ zIndex: 1, right: -10, top: -50 }}>
                                <Image source={require('../images/nuvem.png')} />
                            </View>
                        </View>
                    </ScrollView>
                </ThemeProvider>
            </ContainerComponentes>
        </FundoBG>
    );
};

export default SignUp;
