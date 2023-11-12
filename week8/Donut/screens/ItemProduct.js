import React from "react"
import { Image, View, Text, Pressable } from "react-native"
import { useNavigation } from "@react-navigation/native"
const ItemProduct = (props) => {
    const { id, name, description, price, img } = props
    const navigation = useNavigation()
    return (
        <View style={
            {
                height: '115px',
                width: '100%',
                backgroundColor: '#F4DDDD'
            }
        }>
            <Pressable onPress={() => {
                navigation.navigate('DetailProduct', { productId: id })
            }}>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row'
                }}>
                    <Image style={{
                        width: '101px',
                        height: '101px'
                    }} source={img} />
                    <View style={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <Text style={{
                            fontSize: '20px',
                            fontWeight: '700'
                        }}>{name}</Text>
                        <Text style={{
                            fontSize: '20px',
                            fontWeight: '700'
                        }}>{price}</Text>
                        <Text>{description}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}
export default ItemProduct;