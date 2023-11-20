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
            <View style={
                {
                    display: 'flex',
                    gap: 5
                }
            }>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 5
                }}>
                    <Text>Number 1:</Text>
                    <TextInput
                        style={{
                            border: '1px solid black'
                        }}
                        placeholder='number 1'
                        inputMode='numeric'
                        value={number1}
                        onChangeText={value => dispatch({
                            type: 'ONE',
                            payload: value
                        })}
                    />
                </View>

                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 5
                }}>
                    <Text>Number 2:</Text>
                    <TextInput
                        style={{
                            border: '1px solid black'
                        }}
                        placeholder='number 2'
                        inputMode='numeric'
                        value={number1}
                        onChangeText={value => dispatch({
                            type: 'TWO',
                            payload: value
                        })}
                    />
                </View>
                <Text>result {result}</Text>
            </View>
            <View style={{
                display: 'flex',
                flexDirection: 'row', gap: 20,
                marginTop: 5
            }}>
                <Pressable style={
                    styles.cacl
                } onPress={() => {
                    dispatch({ type: 'CONG' });
                }}>
                    <Text>+</Text>
                </Pressable>
                <Pressable style={
                    styles.cacl
                } onPress={() => {
                    dispatch({ type: 'TRU' });
                }}>
                    <Text>-</Text>
                </Pressable>
                <Pressable style={
                    styles.cacl
                } onPress={() => {
                    dispatch({ type: 'NHAN' });
                }}>
                    <Text>*</Text>
                </Pressable>
                <Pressable style={
                    styles.cacl
                } onPress={() => {
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
    cacl: {
        border: '1px solid black', padding: 10
    }
});