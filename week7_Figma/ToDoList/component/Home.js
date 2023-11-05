import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable } from 'react-native';
import { TextInput } from 'react-native';
import { StyleSheet, Text, View, Image } from 'react-native';


export default function Home({ navigation }) {
    const [name, setName] = useState('');
    return (
        <View style={styles.container}>
            <View style={{
                flex: 1,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '200px'
            }}>
                <Text style={{
                    color: '#8353E2',
                    fontSize: '24px',
                    fontWeight: '700px',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>MANAGER YOUR</Text>
                <Text style={{
                    color: '#8353E2',
                    fontSize: '24px',
                    fontWeight: '700px',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>TASK</Text>
                <StatusBar style="auto" />
            </View>

            <View style={{
                width: '334px',
                height: '43px',
                border: '1px solid #9095A0',
                flexDirection: 'row',
                borderRadius: '20px',
                gap: '25px',
                marginTop: '-50px'
            }} >
                <Image style={{
                    height: '20px',
                    width: '20px',
                    marginTop: '15px',
                    marginLeft: '10px'

                }} source={require('../assets/mail.png')} />

                <TextInput style={{
                    width: '334px',
                    height: '43px',
                }} placeholder='Enter your name' onChangeText={(newValue) => {
                    console.log(newValue);
                    setName(newValue);
                }}
                    defaultValue={name}
                />
            </View>

            <View style={styles.container}>
                <Pressable style={{
                    backgroundColor: '#00BDD6',
                    height: '44px',
                    width: '190px',
                    marginTop: '100px',
                    borderRadius: '20px'
                }} onPress={() => {
                    navigation.navigate('List', { name: name })

                }}>
                    <Text style={{
                        color: 'white',
                        fontSize: '16px',
                        fontWeight: '700px',
                        justifyContent: 'center',
                        textAlign: 'center',
                        marginTop: '10px'
                    }}>GET STARTED</Text>
                </Pressable>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
});