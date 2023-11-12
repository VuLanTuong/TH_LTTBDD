import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, StyleSheet, FlatList, Text, Image } from 'react-native';
import Ant from "react-native-vector-icons/AntDesign"
import AntDesign from "react-native-vector-icons/AntDesign"
import Feather from "react-native-vector-icons/Feather"
import { addToCart, decrementQuantity, incrementQuantity, removeFromCart } from "./CartReducer";
import { TouchableOpacity } from 'react-native';
import Toast from 'react-native-toast-message';
const Cart = ({ navigation }) => {
    const cart = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();
    let total = calcAmount(cart)
    const Item = ({ item }) => {
        const addItemToCart = (item) => {
            dispatch(addToCart(item));
        };
        const removeItemFromCart = (item) => {
            dispatch(removeFromCart(item));
        };
        const increaseQuantity = (item) => {
            dispatch(incrementQuantity(item));
        }
        const decreaseQuantity = (item) => {
            if (item.quantity == 1) {
                dispatch(removeFromCart(item));
            } else {
                dispatch(decrementQuantity(item));
            }
        }
        console.log(item.quantity);
        return <View style={{ flexDirection: 'row', width: '100%', justifyContent: "space-between" }}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '20px' }}>
                <View>
                    <Image style={{ width: 60, height: 60, resizeMode: 'contain' }} source={{ uri: item.image }} />
                </View>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={{ fontSize: 16 }}>{item.name}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Feather name="play" style={{ fontSize: 20 }} />
                        <Text>$ {item.price}</Text>
                    </View>
                </View>

            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>


                <TouchableOpacity
                    onPress={() => decreaseQuantity(item)}
                >
                    <Image source={require('../assets/move.png')}
                        style={{ fontSize: 24, padding: 10, borderRadius: 50, backgroundColor: '#D0D4CA' }} />
                </TouchableOpacity>
                <Text style={{ textAlign: 'center', width: 40, fontSize: 16 }}>{item.quantity}</Text>
                <TouchableOpacity
                    onPress={() => increaseQuantity(item)}
                >
                    <Image source={require('../assets/add.png')}
                        style={{ fontSize: 24, padding: 10, borderRadius: 50, backgroundColor: '#D0D4CA' }} />
                </TouchableOpacity>
            </View>
        </View >
    }
    function calcAmount(item) {
        let amount = 0
        cart.forEach(item => {
            amount += parseInt(item.price) * item.quantity
        })
        return amount
    }
    console.log(calcAmount(cart));
    return (
        <View style={{
            justifyContent: 'space-between',
            flexDirection: 'column',
            flex: 1
        }}>
            <View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 10,
                        marginHorizontal: 20,
                        width: '100%'
                    }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{ backgroundColor: '#D2E3C8', marginLeft: 15 }}>
                        <Ant name="left" style={{ fontSize: 30, padding: 5 }} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 30 }}>Drinks</Text>
                    <Ant name="search1" style={{ fontSize: 30, marginRight: 15 }} />
                </View>
                {
                    cart.length == 0 ? <Text style={{ fontSize: 24 }}>Nothing in your cart</Text> :
                        <FlatList data={cart} renderItem={({ item }) => <Item item={item} />} />
                }
            </View>
            <View style={{
                flexDirection: 'column',
                height: 100,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{ flex: 40, textAlign: 'center', fontSize: 20 }}>Amount :${total}</Text>
                <TouchableOpacity
                    style={{
                        backgroundColor: '#EFB034',
                        flex: 60,
                        height: '44px',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 10,
                        width: '90%'

                    }}
                >
                    <Text style={{ fontSize: 20, textTransform: 'uppercase', color: 'white' }}>Pay now</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Cart;
