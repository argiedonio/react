import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const ConfirmPasswordScreen   = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [buttonColor, setButtonColor] = useState('green');
  
    const navigation = useNavigation();
      
    const toDashboard = () => {
      if (password !== confirmPassword) {
          
        alert("Passwords don't match. Please check your password.");
        return; 
  
        setButtonColor('black');
        setTimeout(() => {
          setButtonColor('gray');
          navigation.navigate('Login');
        }, 10);
  
      }else{
        navigation.navigate ('Dashboard');
      }
  
    };

  return (
    <View style={styles.appContainer}>
      <StatusBar style="auto" />
      <View style={styles.inputContainer}>
        <Text style={[styles.title, styles.heading]}>Update Information</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Username"
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="New Password"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Confirm New Password"
          secureTextEntry={true}
          onChangeText={(text) => setConfirmPassword(text)}
        />
        <TouchableOpacity onPress={toDashboard}>
          <View style={[styles.button, { backgroundColor: buttonColor }]}>
            <Text style={styles.buttonText}>RESET PASSWORD</Text>

          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
  },
 
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: 'green',
    width: '80%',
    marginBottom: 10,
    padding: 8,
  },
  heading: {
    marginBottom: 8,
    fontSize: 25,
  },
  text: {
    marginBottom: 30,
    color: '#4c504c7d',
  },
  smallText: {
    fontSize: 12,
  },
  linkGreen: {
    color: 'green',
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 25,
    marginTop: 20,
    width: 250,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default ConfirmPasswordScreen;
