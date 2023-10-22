import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { FlatList, Pressable, StyleSheet, Text, View, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
const DATA = [
  {
    id: 1,
    name: 'Pinarelo',
    price: 1800,
    description: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
    image: require('./assets/1.png')

  },
  {
    id: 2,
    name: 'Pina Mountain',
    price: 1700,
    description: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
    image: require('./assets/2.png')

  },
  {
    id: 3,
    name: 'Pina Bike',
    price: 1500,
    description: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
    image: require('./assets/3.png')

  },
  {
    id: 4,
    name: 'Pinarelo',
    price: 1900,
    description: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
    image: require('./assets/4.png')

  },
  {
    id: 5,
    name: 'Pinarelo',
    price: 2700,
    description: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
    image: require('./assets/5.png')

  },
  {
    id: 6,
    name: 'Pinarelo',
    price: 1350,
    description: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
    image: require('./assets/6.png')

  },
]

function Header() {
  return (
    <View style={{
      width: '100%'
    }}>
      <Text style={{
        fontSize: '25px',
        color: '#E94141',
        fontWeight: '700',
        marginTop: '47px'
      }}>The world’s Best Bike</Text>
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '40px',
        marginTop: '50px',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Pressable style={styles.btn}>
          <Text style={styles.textBtn}>All</Text>
        </Pressable>
        <Pressable style={styles.btn}>
          <Text style={styles.textBtn}>Road bike</Text>
        </Pressable>
        <Pressable style={styles.btn}>
          <Text style={styles.textBtn}>Mountain</Text>
        </Pressable>
      </View>
    </View>
  )
}
function Item({ name, price, image, onPress }) {
  return (
    <View style={{
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#F7BA8326',
      borderRadius: '15px',
      height: '200px',
      width: '160px',
      padding: '20px'

    }}>
      <Pressable onPress={onPress}>
        <Image style={styles.imageProduct} source={image} />
        <Text>{name}</Text>
        <Text>{' $ ' + price}</Text>
      </Pressable>

    </View>
  )
}

function ListProduct({ navigation }) {
  return (
    <View style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

    }}>
      {/* <Text style={{
          fontSize: '25px',
          color: '#E94141',
          fontWeight: '700',
        }}>The world’s Best Bike</Text> */}
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '40px',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Pressable style={styles.btn}>
          <Text style={styles.textBtn}>All</Text>
        </Pressable>
        <Pressable style={styles.btn}>
          <Text style={styles.textBtn}>Road bike</Text>
        </Pressable>
        <Pressable style={styles.btn}>
          <Text style={styles.textBtn}>Mountain</Text>
        </Pressable>
      </View>
      <FlatList style={{
        marginTop: '20px'
      }} data={DATA}
        numColumns={2}
        renderItem={({ item }) => {
          // tach view ra thanh nhieu phan
          return (
            <View style={{ margin: '5px' }}>
              <Item name={item.name} price={item.price} image={item
                .image} onPress={() => {
                  navigation.navigate('DetailProduct', { id: item.id })
                }} />
            </View>
          )
        }
        }
        keyExtractor={item => item.id}>
      </FlatList>
    </View>
  )

}

//luu y quan trong
function DetailProduct({ navigation, route }) {
  const pId = route.params.id;
  const [product, setProduct] = useState({});
  const [heart, setHeart] = useState(require('./assets/heart.png'))
  const [count, setCount] = useState(0)
  useEffect(() => {
    getProduct()
  }, []);

  function getProduct() {
    for (let i = 0; i < DATA.length; i++) {
      if (DATA[i].id === pId) {
        setProduct(DATA[i])
        return
      }
    }
  }
  const counHeart = () => {
    setCount(count + 1)
  }
  const handleHeart = () => {
    if (count % 2 === 0) {
      setHeart(require('./assets/heart2.png'))
    }

    if (count % 2 != 0) {
      setHeart(require('./assets/heart.png'))
    }
  }
  const handleAll = () => {
    counHeart();
    handleHeart();
  }
  return (
    <View style={{
      display: "flex",
      flexDirection: 'column',
      gap: '5px'

    }}>
      <View style={{
        backgroundColor: 'pink'
      }}>
        <Image source={product.image} style={{
          height: '388px',
          width: '359px',
          padding: '20px',
          justifyContent: 'center',
          alignItems: 'center'
        }} />

      </View>
      <Text>{product.name}</Text>
      <Text>{product.price}</Text>
      <Text>{product.description}</Text>
      <View style={{
        marginTop: '40px',
        display: 'flex',
        flexDirection: 'row'
      }}>
        <Pressable onPress={
          handleAll
          // handleHeart
        }>
          <Image style={styles.heart} source={heart} />
        </Pressable>


        <Pressable style={{
          padding: '20px',
          border: '1px solid red',
          width: '269px',
          height: '54px',
          backgroundColor: 'red',
          borderRadius: '20px',
          marginLeft: '60px'
        }}>

          <Text style={{
            color: 'white',
            textAlign: 'center'
          }}>Add to cart</Text>
        </Pressable>


      </View>

    </View>
  )
}
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        // headerTitle: () => {
        //   return (
        //     <View style={{
        //       width: '100%',
        //       height: '150px'
        //     }}>
        //       <Text style={{
        //         fontSize: '25px',
        //         color: '#E94141',
        //         fontWeight: '700',
        //         marginTop: '47px'
        //       }}>The world’s Best Bike</Text>
        //       <View style={{
        //         display: 'flex',
        //         flexDirection: 'row',
        //         gap: '40px',
        //         marginTop: '50px',
        //         justifyContent: 'center',
        //         alignItems: 'center'
        //       }}>
        //         <Pressable style={styles.btn}>
        //           <Text style={styles.textBtn}>All</Text>
        //         </Pressable>
        //         <Pressable style={styles.btn}>
        //           <Text style={styles.textBtn}>Road bike</Text>
        //         </Pressable>
        //         <Pressable style={styles.btn}>
        //           <Text style={styles.textBtn}>Mountain</Text>
        //         </Pressable>
        //       </View>
        //     </View>
        // )
        // <Header />
      }
      }>
        <Stack.Screen name='Product' options={{
          title: 'The world’s Best Bike',
          headerTitleStyle: {
            color: 'red',
            fontSize: '25px',
            fontWeight: '700'

          }


        }} component={ListProduct}></Stack.Screen>
        <Stack.Screen name='DetailProduct' component={DetailProduct}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer >

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  btn: {
    width: '93px',
    height: '32px',
    border: '1px solid red'
  },
  textBtn: {
    textAlign: 'center',
    margin: 'auto'
  },
  imageProduct: {
    width: '135px',
    height: '127px',
    justifyContent: 'center',
    alignItems: 'center'
  },
  heart: {
    width: '35px',
    height: '35px',
    marginLeft: '20px'
  }

});
