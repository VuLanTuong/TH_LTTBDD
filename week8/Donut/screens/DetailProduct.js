import { Image, View, Text, Pressable } from "react-native";
import React, { useState, useEffect } from "react";

const DetailProduct = ({ route, navigation }) => {
    const pId = route.params.productId
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch('https://65476166902874dff3ac3936.mockapi.io/Donut')
            .then(response => response.json())
            .then(json => {
                console.log(json);
                const foundProduct = json.find(item => {
                    console.log(item);
                    return item.id === pId;
                });

                setProduct(foundProduct);
            });
    }, []);
    const [quantity, setQuantity] = useState(1)

    const handleAdd = () => {
        setQuantity(quantity + 1)

    }
    const handleMove = () => {
        setQuantity(quantity - 1)
    };

    return (
        <View style={{
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <Image style={{
                height: '270px',
                width: '270px',
                margin: 'auto'
            }} source={product.img} />
            <Text style={{
                fontSize: '20px',
                fontWeight: '700'
            }}>{product.name}</Text>
            <View style={{
                display: 'flex',
                flexDirection: 'row'
            }}>
                <Text>{product.decription}</Text>
                <Text style={{
                    fontSize: '20px',
                    fontWeight: '700',
                    marginLeft: '100px',
                }}>{product.price * quantity + '.00'}</Text>

            </View>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
            }}>
                <View style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <Text>Delivery in</Text>
                    <Text style={{
                        fontSize: '20px',
                        fontWeight: '700'
                    }} >30 min</Text>

                </View>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginLeft: '200px',
                    marginTop: '20px',
                    gap: '15px'
                }}>
                    <Pressable onPress={handleMove}>
                        <Image style={{
                            height: '21px',
                            width: '21px'
                        }} source={require('../assets/tru.png')} />

                    </Pressable>

                    <Text>{quantity}</Text>
                    <Pressable onPress={handleAdd}>
                        <Image style={{
                            height: '21px',
                            width: '21px'
                        }} source={require('../assets/cong.png')} />


                    </Pressable>

                </View>

            </View>
            <View style={{
                marginTop: '50px'
            }}>
                <Text style={{
                    fontSize: '20px',
                    fontWeight: '700'
                }}>Restaurants info</Text>
                <Text>
                    Order a Large Pizza but the size is the equivalent {"\n"}
                    of a medium/small from other places at the  {"\n"} same price range
                </Text>
            </View>
            <Pressable style={{
                width: '316px',
                height: '58px',
                backgroundColor: '#F1B000',
                margin: 'auto',
                marginTop: '10px',
                borderRadius: '15px'

            }}>
                <Text style={{
                    marginTop: '15px',
                    fontSize: '25px',
                    fontWeight: '700',
                    color: 'white',
                    textAlign: 'center'

                }}>Add to cart</Text>
            </Pressable>


        </View>
    )

}
export default DetailProduct;