import { useEffect, useState } from "react";
import { View, TouchableOpacity, Text, FlatList, Image } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import Ant from "react-native-vector-icons/AntDesign"
import AntDesign from "react-native-vector-icons/AntDesign"
import Feather from "react-native-vector-icons/Feather"
import { addToCart, decrementQuantity, incrementQuantity, removeFromCart } from "./CartReducer";
import Toast from 'react-native-toast-message';
const Drink = ({ navigation }) => {
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cart);
    useEffect(() => {
        fetch("https://65476166902874dff3ac3936.mockapi.io/drink")
            .then(response => response.json())
            .then(responseData => {
                setData(responseData);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [])
    const Item = ({ item }) => {

        const addItemToCart = (item) => {
            Toast.show({
                type: 'success',
                text1: 'Thêm thành công',
                text2: `${item.name}`
            });
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
        return <View style={{
            flexDirection: 'row',
            width: '95%',
            justifyContent:
                "space-between",
            margin: '10px',
            border: '1px solid grey',
            alignItems: 'center',
            height: '64px',
            borderRadius: '10px',
            padding: '10px'
        }}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                    <Image style={{
                        width: '60px',
                        height: '60px',
                        resizeMode: 'contain',
                        padding: '10px'
                    }}
                        source={{ uri: item.image }} />
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
                <Text style={{ textAlign: 'center', width: 40, fontSize: 16 }}>1</Text>
                <TouchableOpacity onPress={() => addItemToCart(item)}>
                    <Image source={require('../assets/add.png')}
                        style={{
                            fontSize: 24,
                            padding: 10,
                            borderRadius: 50,
                            backgroundColor: '#D0D4CA',
                            margin: '5px'
                        }} />
                </TouchableOpacity>



            </View>
        </View>
    }
    return (
        <View style={{ alignItems: 'center', flex: 1 }} >
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
            <FlatList
                style={{ width: '100%' }}
                data={data}
                renderItem={({ item }) => <Item item={item} />} />
            <TouchableOpacity onPress={() => navigation.navigate('cart')} style={{
                width: '347px', justifyContent: 'center',
                backgroundColor: '#EFB034', height: 50,
                borderRadius: '10px',
                height: '44px'
            }}>
                <Text style={{ textTransform: 'uppercase', textAlign: 'center', color: 'white' }}>go to cart</Text>
            </TouchableOpacity>
            <Toast />
        </View>
    )
}
export default Drink