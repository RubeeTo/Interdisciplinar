import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ContactUs = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
        <Image source={require('../images/voltar.png')} style={styles.backIcon} />
      </TouchableOpacity>
      <Text style={styles.title}>FALE CONOSCO</Text>
      <Image source={require('../images/AtleticaImg.png')} style={styles.logo} />

      <View style={styles.introContainer}>
        <TextInput
          style={styles.introTextInput}
          placeholder="Olá somos a atlética Jundiaí, ...."
          placeholderTextColor="#F8E40B"
          multiline
        />
      </View>

      <Text style={styles.infoText}>Para mais informações fale conosco por:</Text>

      <View style={styles.contactOptions}>
        <TouchableOpacity style={styles.contactButton}>
          <View style={styles.iconContainer}>
            <Image source={require('../images/instagram.png')} style={styles.icon} />
          </View>
          <Text style={styles.contactText}>INSTAGRAM</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactButton}>
          <View style={styles.iconContainer}>
            <Image source={require('../images/email.png')} style={styles.icon} />
          </View>
          <Text style={styles.contactText}>EMAIL</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactButton}>
          <View style={styles.iconContainer}>
            <Image source={require('../images/whatsapp.png')} style={styles.icon} />
          </View>
          <Text style={styles.contactText}>GRUPO NO WHATSAPP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    padding: 10,
  },
  backIcon: {
    width: 30,
    height: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
  },
  logo: {
    width: 40,
    height: 40,
    position: 'absolute',
    top: 10,
    right: 10,
  },
  introContainer: {
    height:200,
    backgroundColor: '#D52527',
    borderRadius: 10,
    padding: 15,
    marginTop: 30,
    width: '100%',
    alignItems: 'center',
  },
  introTextInput: {
    color: '#F8E40B',
    fontSize: 14,
    textAlign: 'center',
    width: '100%',
  },
  infoText: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
  contactOptions: {
    marginTop: 20,
    width: '100%',
  },
  contactButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
  },
  iconContainer: {
    backgroundColor: '#D52527',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: '#F8E40B',
  },
  contactText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default ContactUs;
