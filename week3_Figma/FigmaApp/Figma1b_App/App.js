import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';
import { SafeAreaView } from 'react-native';
import { TextInput } from 'react-native';
// import { Text, View, Image, TextInput, SafeAreaView } from 'react-native';
// import React, { useState } from 'react';
export default function App() {
  // const [text, onChangeText] = useState('Email');
  return (
    <View style={styles.container}>
      <View>
        <Image style={{
          height: '100px',
          width: '110px',
          marginTop: '70px'
        }}
          source={require('./assets/lock.svg')} />
      </View>
      <View style={styles.text}>
        <Text style={{
          textAlign: 'center', fontSize: '30px',
          fontWeight: 'bold'
        }}>FORGET</Text>
        <Text style={{
          textAlign: 'center', fontSize: '30px',
          fontWeight: 'bold'
        }}>PASSWORD</Text>
        <Text style={{
          textAlign: 'center',
          fontSize: '16px',
          fontWeight: 'bold',
          marginTop: '30px'
        }} >
          Provide your account'email for which you
          want to reset your password
        </Text>
      </View>
      {/* <View style={styles.btn}>
        <Pressable style={{
          fontSize: '20px',
          borderRadius: '7px',
          background: '#E3C000',
          fontWeight: 'bold',
          border: '15px solid #E3C000',
        }}>
          <Text style={{ fontSize: '20px', fontWeight: 'bold' }}>LOG IN</Text>
        </Pressable>
        <Pressable style={{
          fontSize: '20px',
          borderRadius: '7px',
          background: '#E3C000',

          border: '15px solid #E3C000',
        }}>
          <Text style={{ fontSize: '18px', fontWeight: 'bold' }} >SIGN UP</Text>
        </Pressable>

      </View>
       <Text style={{
        marginTop: '25px',
        fontSize: '20px',
        fontWeight: 'bold',
        textAlign: 'center'

      }}>HOW WE WORK?</Text> */}

      <SafeAreaView style={{ flex: 1 }}>
        <View>
          <View style={styles.sectionStyle}>
            <Image
              source={require('./assets/mail.png')}
              style={styles.imageStyle}
            />
            <TextInput
              style={{ flex: 1 }}
              placeholder="Email"
              underlineColorAndroid="transparent"
            />
          </View>
          {/* <View style={styles.sectionStyle}>
            <Image
              source={{
                uri:
                  'https://raw.githubusercontent.com/AboutReact/sampleresource/master/input_phone.png',
              }}
              style={styles.imageStyle}
            />
            <TextInput
              style={{ flex: 1 }}
              placeholder="Enter Your Mobile No Here"
              underlineColorAndroid="transparent"
            />
          </View> */}
        </View>
      </SafeAreaView>

      <View style={{
        marginTop: '-90px',
        borderRadius: '0%'
      }}>
        <Pressable style={{
          fontSize: '20px',
          borderRadius: '7px',
          background: '#E3C000',
          fontWeight: 'bold',
          border: '15px solid #E3C000',
          width: '300px',
          height: '45px',
          marginTop: '-140px',
          borderRadius: '0%'

        }}>
          <Text style={{
            fontSize: '18px', fontWeight: 'bold', textAlign: 'center',

          }}>NEXT</Text>
        </Pressable>


      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    backgroundImage: 'linear-gradient(180deg, #C7F4F7 0.03%, #D1F4F6 30.21%, #E5F4F5 85.42%, #00CCF9 100%)'


  },

  dot: {
    height: 140,
    width: 140,
    border: '12px solid black',
    borderRadius: '50%',
    marginTop: '-35px'
  },

  btn: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '80%',
    marginTop: '50px'

  },

  text: {
    marginTop: '80px'
  },
  mail: {
    height: '32px',
    width: '32px',
    marginTop: '8px',
    marginLeft: '20px'
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '300px',
    height: '40px',
    backgroundColor: '#C4C4C4',
    fontSize: '15px',
    border: '0px',
    marginTop: '50px'
  },
  imageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
});
