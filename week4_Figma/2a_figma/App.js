import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Image } from 'react-native';
import { SafeAreaView } from 'react-native';
import { TextInput } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isShowPassword, setIsShowPassword] = useState(true)

  const handleNameChange = (text) => {
    setName(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleLoginPress = () => {
    // Logic for handling login
    console.log('Name:', name);
    console.log('Password:', password);
  };

  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <View style={styles.container}>
      <Text style={{
        textAlign: 'left', fontSize: '25px',
        marginTop: '70px',
        fontWeight: 'bold'
      }}>LOGIN</Text>

      <SafeAreaView style={{ flex: 1 }}>
        <View>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '15px',
            border: '0px',
            marginTop: '100px',
            width: '330px',
            height: '48px',
            border: '1px solid white'
          }}>
            <Image source={require("./assets/avatar.png")} style={styles.imageStyle} />
            <TextInput
              style={{
                flex: 1,
                fontSize: '18px'
              }}
              placeholder=" Name"
              value={name}
              onChangeText={handleNameChange}
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.sectionStyle}>
            <Image source={require("./assets/lock.svg")} style={styles.imageStyle} />
            <TextInput
              style={{
                flex: 1,
                fontSize: '18px'
              }}
              placeholder="Password"
              value={password}
              onChangeText={handlePasswordChange}
              secureTextEntry={isShowPassword}
              underlineColorAndroid="transparent"
            />


            <Pressable
              onPress={handleShowPassword}
            >
              <Image
                source={require('./assets/eye 1.png')}
                style={styles.imageStyle}
              />

            </Pressable>



          </View>
        </View>
      </SafeAreaView>
      <View style={{
      }}>
        <Pressable style={{
          fontSize: '20px',
          borderRadius: '7px',
          background: 'black',
          fontWeight: 'bold',
          border: '15px solid black',
          width: '330px',
          height: '45px',
          borderRadius: '0%',
          marginTop: '-150px',
        }}
          onPress={handleLoginPress}
        >
          <Text style={{
            fontSize: '18px',
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#fff'

          }}>LOG IN</Text>
        </Pressable>
        <Text style={{
          fontSize: '18px',
          fontWeight: 'bold',
          textAlign: 'center',
          color: 'black',
          marginTop: '30px'
        }} > CREATE ACCOUNT
        </Text>
      </View>


    </View >


  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffcf10',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '330px',
    height: '48px',
    fontSize: '15px',
    border: '0px',
    marginTop: '20px',
    border: '1px solid white'

  },
  imageStyle: {
    margin: 5,
    height: 25,
    width: 25,
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },

  content: {
    marginTop: '-250px',
    textAlign: 'center',
    fontSize: '15px'
  },
  fill: {
    display: 'flex',
    flexDirection: 'row',

  },
  rectangle: {
    border: ' 1px solid black',
    width: '110px',
    height: '45px',
    marginTop: '-120px',
    border: '1px solid rgb(34, 181, 255)'
  },
  main: {
    marginTop: '50px'
  }
});
