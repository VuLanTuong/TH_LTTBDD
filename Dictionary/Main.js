import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { newWord } from './redux/UserSlide';


export default function Main() {
    const [english, setEnglish] = useState();
    const [vietnamese, setVietnamese] = useState();
    const dispatch = useDispatch();

    const snapshot = useSelector(state => state.user);

    console.log(snapshot);




    async function addDirectory(word) {
        // const response = await fetch('https://654ceeaf77200d6ba859b8a6.mockapi.io/User');
        // const users = await response.json();

        // console.log(users)

        // const foundUser = users.find(
        //     (User) => User.username === username
        //         && User.password === password
        // )

        // if (foundUser) {
        //     dispatch(login(foundUser))
        //     navigation.navigate("Main")
        // }

        const updatedEnglish = [...snapshot.profile.english, english];
        const updatedVietnamese = [...snapshot.profile.vietnamese, vietnamese];

        const response = await fetch(`https://654ceeaf77200d6ba859b8a6.mockapi.io/User/${snapshot.profile.id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },


            body: JSON.stringify(
                {
                    english: updatedEnglish,
                    vietnamese: updatedVietnamese
                }
            )

        });





        dispatch(newWord({
            english: english,
            vietnamese: vietnamese
        }))




    }
    return (
        <View style={styles.container}>
            <View>
                <TextInput value={english} onChangeText={value => {
                    setEnglish(value)
                }} placeholder='english'></TextInput>
                <TextInput value={vietnamese} onChangeText={value => {
                    setVietnamese(value)
                }} placeholder='vietnamese'></TextInput>

                <Pressable onPress={() => {
                    addDirectory()
                }}>
                    <Text>Add</Text>
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
