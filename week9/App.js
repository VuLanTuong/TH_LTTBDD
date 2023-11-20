import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import store from './redux/Store'
import increment from './redux/Action'
import { Provider, useDispatch, useSelector } from 'react-redux';

const AppContent = () => {
    const dispatch = useDispatch();
    const { number1, number2, result } = useSelector(state => state);

    return (
        <View>
            <View >
                <TextInput
                    placeholder='number 1'
                    inputMode='numeric'
                    value={number1}
                    onChangeText={value => dispatch({
                        type: 'ONE',
                        payload: value
                    })}
                />
                <TextInput
                    placeholder='number 2'
                    inputMode='numeric'
                    value={number2}
                    onChangeText={value => dispatch({
                        type: 'TWO',
                        payload: value
                    })}
                />
                <Text>result {result}</Text>
            </View>
            <View style={{
                display: 'flex',
                flexDirection: 'row', gap: 20
            }}>
                <Pressable onPress={() => {
                    dispatch({ type: 'CONG' });
                }}>
                    <Text>+</Text>
                </Pressable>
                <Pressable onPress={() => {
                    dispatch({ type: 'TRU' });
                }}>
                    <Text>-</Text>
                </Pressable>
                <Pressable onPress={() => {
                    dispatch({ type: 'NHAN' });
                }}>
                    <Text>*</Text>
                </Pressable>
                <Pressable onPress={() => {
                    dispatch({ type: 'CHIA' });
                }}>
                    <Text>/</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default function App() {
    return (
        <Provider store={store}>
            <AppContent />
        </Provider>
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