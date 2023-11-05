import { useState } from "react";
import { StyleSheet, View, Text, Image, TextInput, Pressable } from "react-native";
import { DATA } from "./data";


export default function Detail({ route, navigation }) {
    const avt = route.params.name;
    const [name, setTask] = useState('');

    function insertJob() {
        DATA.push({ name })
        navigation.navigate('List', { name: avt })
    }


    return (
        <View>
            <View style={{
                alignItems: 'flex-start',
                flexDirection: 'column',
                marginLeft: '30px'
            }}>
                <View style={{
                    flexDirection: 'row',
                    marginRight: '70px'
                }}>
                    <Image style={{
                        height: '50px',
                        width: '50px',
                    }} source={require('../assets/avt.png')} />
                    <Text style={{
                        fontSize: '20px',
                        fontWeight: '700px',
                    }}>Hi {avt}</Text>
                </View>
                <Text>Have agrate day a head</Text>
            </View>

            <Text style={{
                display: 'flex',
                fontSize: '32px',
                fontWeight: '700px',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '50px'
            }}>ADD YOUR JOB</Text>

            <View style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '50px'
            }}>
                <TextInput style={{
                    height: '34px',
                    width: '334px',
                    border: '1px solid black',
                }} placeholder="    input your job" onChangeText={(newValue) => {
                    console.log(newValue);
                    setTask(newValue);
                }}></TextInput>

            </View>


            <View style={styles.container}>
                <Pressable style={{
                    backgroundColor: '#00BDD6',
                    height: '44px',
                    width: '190px',
                    marginTop: '100px',
                    borderRadius: '20px'
                }} onPress={insertJob}>
                    <Text style={{
                        color: 'white',
                        fontSize: '16px',
                        fontWeight: '700px',
                        justifyContent: 'center',
                        textAlign: 'center',
                        marginTop: '10px'
                    }}>FINISH </Text>
                </Pressable>
            </View>
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
});