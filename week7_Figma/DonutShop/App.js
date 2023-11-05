import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Pressable } from 'react-native';
import { FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';

const DATA = [
  {
    id: 1,
    name: 'Tasty donut',
    decription: 'Spicy tasty donut family',
    price: '10.00',
    image: require('./assets/1.png')
  },
  {
    id: 2,
    name: 'Pink Donut',
    decription: 'Spicy tasty donut family',
    price: '20.00',
    image: require('./assets/2.png')
  }
  ,
  {
    id: 3,
    name: 'Floating Donut',
    decription: 'Spicy tasty donut family',
    price: '30.00',
    image: require('./assets/3.png')
  }
  ,
  {
    id: 4,
    name: 'Tasty donut',
    decription: 'Spicy tasty donut family',
    price: '40.00',
    image: require('./assets/4.png')
  }
]

function Item({ name, price, image, decription, onPress }) {
  return (
    <View style={
      {
        height: '115px',
        width: '100%',
        backgroundColor: '#F4DDDD'
      }
    }>
      <Pressable onPress={onPress}>
        <View style={{
          display: 'flex',
          flexDirection: 'row'
        }}>
          <Image style={styles.icon} source={image} />
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
            <Text>{decription}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  )
}

function ListProduct({ navigation }) {
  const [value, setValue] = useState();
  const [product, setProduct] = useState(DATA);

  const filteredProduct = value
    ? product.filter((i) =>
      i.name.toLowerCase().includes(value.toLowerCase())
    )
    : product;


  return (
    <View>
      <View>
        <TextInput style={{
          height: '46px',
          width: '226px',
          marginLeft: '25px',
          backgroundColor: '#C4C4C4'
        }} placeholder='Search Food' onChangeText={(value) => { setValue(value) }}></TextInput>
      </View>
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Pressable style={styles.btn}>
          <Text>Donut</Text>
        </Pressable>
        <Pressable style={styles.btn}>
          <Text>Pink Donut</Text>
        </Pressable>
        <Pressable style={styles.btn}>
          <Text>Floating</Text>
        </Pressable>
      </View>
      <FlatList
        data={filteredProduct}
        // data={DATA}
        renderItem={({ item }) => {
          return (
            <View style={{
              margin: '5px',
              borderRadius: '15px'
            }} >
              <Item name={item.name} price={item.price}
                image={item.image} onPress={() => {
                  navigation.navigate('DetailProduct', { id: item.id })
                }}
                decription={item.decription} />

            </View>

          )
        }}
        keyExtractor={item => item.id} />
    </View>
  )
}

function DetailProduct({ navigation, route }) {
  const pId = route.params.id;
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProduct()
  }, []);
  function getProduct() {
    for (let i = 0; i < DATA.length; i++) {
      if (DATA[i].id === pId) {
        setProduct(DATA[i]);
        return
      }
    }
  }
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
      <Image style={styles.banner} source={product.image} />
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
            }} source={require('./assets/tru.png')} />

          </Pressable>

          <Text>{quantity}</Text>
          <Pressable onPress={handleAdd}>
            <Image style={{
              height: '21px',
              width: '21px'
            }} source={require('./assets/cong.png')} />


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
          fontSize: '25px',
          fontWeight: '700',
          color: 'white',
          textAlign: 'center'

        }}>Add to cart</Text>
      </Pressable>


    </View>
  )

}

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Product' component={ListProduct} options={{
          title: 'Welcome, Jala! \n Choice you Best food '
        }} />

        <Stack.Screen name='DetailProduct' component={DetailProduct}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btn: {
    padding: '20px'
  },
  icon: {
    width: '101px',
    height: '101px'
  },
  banner: {

    height: '270px',
    width: '270px',
    margin: 'auto'
  }
});
