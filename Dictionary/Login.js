import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from './redux/UserSlide';


export default function Login({ navigation }) {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const dispatch = useDispatch();

    async function handleLogin() {
        const response = await fetch('https://654ceeaf77200d6ba859b8a6.mockapi.io/User');
        const users = await response.json();

        console.log(users)

        const foundUser = users.find(
            (User) => User.username === username
                && User.password === password
        )

        if (foundUser) {
            dispatch(login(foundUser))
            navigation.navigate("Main")
        }
    }
    return (
        <View style={styles.container}>
            <View>
                <TextInput value={username} onChangeText={value => {
                    setUsername(value)
                }} placeholder='username'></TextInput>
                <TextInput value={password} onChangeText={value => {
                    setPassword(value)
                }} placeholder='password' secureTextEntry></TextInput>

                <Pressable onPress={() => {
                    handleLogin()
                }}>
                    <Text>Login</Text>
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
