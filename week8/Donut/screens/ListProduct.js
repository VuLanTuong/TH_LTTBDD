import React, { useState, useEffect } from "react";
import { Image, TextInput, TouchableOpacity, View, Text, Pressable } from "react-native";
import ItemProduct from "./ItemProduct";
const ListProduct = () => {
    const [type, setType] = useState('');
    const [input, setInput] = useState('');
    console.log(input);
    var [dt, setDT] = useState([])
    var data = [];
    useEffect(() => {
        fetch('https://65476166902874dff3ac3936.mockapi.io/Donut')
            .then(response => response.json())
            .then(json => {
                if (!type) {
                    setDT(json);
                    return;
                }
                const filteredJson = json.filter(item => item.type === type)
                setDT(filteredJson)
            });
    }, [type]);

    const choose = (item) => {
        dt.map((item) => {
            return (
                <ItemProduct
                    id={item.id}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    img={item.img}
                />
            )
        })
    }


    return (
        <View style={{ flex: 1 }}>
            <Text>Welcome, Jala!</Text>
            <Text>Choice you Best food</Text>
            <View style={{ flexDirection: 'row' }}>
                <TextInput
                    onChangeText={(value) => { setInput(value) }}
                    style={{
                        borderWidth: 1,
                        height: 55,
                        width: '85%'
                    }} />
                <TouchableOpacity >
                    <Image source={require('../assets/img/ser.png')} style={{ width: 50, height: 50 }} />
                </TouchableOpacity>
            </View>
            <View style={{
                marginTop: '15px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Pressable onPress={() => { setType('donut') }} style={{
                    padding: '10px',
                    border: '1px solid black'
                }}>
                    <Text>Donut</Text>
                </Pressable>
                <Pressable onPress={() => { setType('pink') }} style={{
                    padding: '10px',
                    border: '1px solid black'
                }}>
                    <Text>Pink Donut</Text>
                </Pressable>
                <Pressable onPress={() => { setType('floating') }} style={{
                    padding: '10px',
                    border: '1px solid black'
                }}>
                    <Text>Floating</Text>
                </Pressable>
            </View>
            <View>
                {dt.map((item) => {
                    return (
                        <ItemProduct
                            id={item.id}
                            name={item.name}
                            description={item.description}
                            price={item.price}
                            img={item.img}
                        />
                    )
                })}
            </View>
        </View>
    )
}
export default ListProduct;