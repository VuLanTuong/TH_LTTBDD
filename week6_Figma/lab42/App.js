import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  ScrollView,
  Pressable,
} from 'react-native';
import { Image } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const DATA = [
  {
    id: '1',
    title: 'Cap sac chuyen tu cong USB sang PS2',
    price: '69.900',
    image: require('./assets/p1.png')

  },
  {
    id: '2',
    title: 'Cap sac chuyen tu cong USB sang PS2',
    price: '69.900',
    image: require('./assets/p2.png')

  },
  {
    id: '3',
    title: 'Cap sac chuyen tu cong USB sang PS2',
    price: '69.900',
    image: require('./assets/p3.png')

  },
  {
    id: '4',
    title: 'Cap sac chuyen tu cong USB sang PS2',
    price: '69.900',
    image: require('./assets/p4.png')

  },
  {
    id: '5',
    title: 'Cap sac chuyen tu cong USB sang PS2',
    price: '69.900',
    image: require('./assets/p5.png')

  },
  {
    id: '6',
    title: 'Cap sac chuyen tu cong USB sang PS2',
    price: '69.900',
    image: require('./assets/p6.png')

  }
]

function Item({ title, image, price, onPress }) {
  return (
    <View style={{
      display: 'flex',
      gap: '5px',
      width: '46%',
      marginTop: '20px'
    }}>
      <Pressable onPress={onPress}>
        <Image style={{
          width: '155px',
          height: '90px'
        }} source={image} />
        <Text>{title}</Text>
        <View style={{
          display: 'flex',
          flexDirection: 'row',
          width: '103px'
        }}>
          <Image style={{
            height: '10px',
            width: '10px'
          }} source={require('./assets/Star.png')} />
          <Image style={{
            height: '10px',
            width: '10px'
          }} source={require('./assets/Star.png')} />
          <Image style={{
            height: '10px',
            width: '10px'
          }} source={require('./assets/Star.png')} />
          <Image style={{
            height: '10px',
            width: '10px'
          }} source={require('./assets/Star.png')} />
          <Image style={{
            height: '10px',
            width: '10px'
          }} source={require('./assets/star_gray.png')} />
          <Text>(15)</Text>
        </View>
        <View style={{
          flexDirection: 'row',
          gap: '5px'
        }}>
          <Text>{price + 'vnd'} </Text>
          <Text style={{
            color: '#969DAA'
          }}>-39%</Text>
        </View>
      </Pressable>
    </View>


  )
}
function DetailProduct({ navigation, route }) {
  const { item } = route.params;
  const [quantity, setQuantity] = useState(1);
  const handleThem = () => {
    setQuantity(quantity + 1);
  }
  const handleXoa = () => {
    setQuantity(quantity - 1);
  }
  return (
    <View style={{
      flex: '1'
    }}>
      <View style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20px',
        flexDirection: 'column',
        gap: '25px'
      }}>
        <Image style={{
          height: '225px',
          width: '355px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }} source={item.image} />

        <Text>{item.title}</Text>
        <Text>{item.price + ' vnd'}</Text>
        <Pressable onPress={handleThem} style={{
          border: '2px solid red'
        }}>
          <Text>
            Them
          </Text>
        </Pressable>

        <Pressable onPress={handleXoa} style={{
          border: '2px solid red'
        }}>
          <Text>
            Xoa
          </Text>
        </Pressable>
        <Text>{quantity}</Text>
        <Pressable onPress={() => {
          navigation.navigate('Payment',
            {
              item: item,
              quantity: quantity
            })
        }}>
          <Text style={{
            padding: '10px',
            border: '2px solid red'
          }}>
            Mua ngay
          </Text>
        </Pressable>
      </View>
    </View>
  )
}
function Payment({ navigation, route }) {
  // if (!route.params || !route.params.item || !route.params.quantity) {
  //   return <Text>Error: Invalid parameters</Text>;
  // }

  const { item, quantity } = route.params;
  let final = (item.price) * quantity;
  return (
    <View>
      <Text>{quantity}</Text>
      <Text>{final.toFixed(3) + ' vnd'}</Text>
    </View>
  )
}


const Tab = createBottomTabNavigator();
// function CustomFooter() {
//   return (
//     <Tab.Navigator
//       tabBarStyle={{
//         backgroundColor: '#1BA9FF'
//       }}

//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconSource;
//           if (route.name === 'list') {
//             iconSource = focused
//               ? require('./assets/list.png')
//               : require('./assets/list.png');
//           }
//           if (route.name === 'home') {
//             iconSource = focused
//               ? require('./assets/home2.png')
//               : require('./assets/home2.png');
//           }

//           if (route.name === 'back') {
//             iconSource = focused
//               ? require('./assets/back.png')
//               : require('./assets/back.png');
//           }


//           return <Image source={iconSource} style={{ width: '24px', height: '24px' }} />;
//         },

//       })}
//     >
//       <Tab.Screen name='list' component={ListProduct} options={
//         styles.header
//       } />
//       <Tab.Screen name='home' component={Home} options={
//         styles.header

//       } />
//       <Tab.Screen name='back' component={Back} options={
//         styles.header

//       } />
//     </Tab.Navigator>



//   )

// }
function ListProduct({ navigation }) {
  return (
    <View style={{
      display: 'flex'

    }}>
      <FlatList data={DATA}
        numColumns={2}
        renderItem={({ item }) =>
          <Item title={item.title}
            image={item.image}
            price={item.price}

            // chuyen item tu list => detail
            onPress={() => {
              navigation.navigate('DetailProduct', {
                item: item
              })
            }}
          />}
        keyExtractor={item => item.id}

        style={{
          display: 'flex',
          flexDirection: 'row',
          flex: '1',
          padding: '25'
        }} />
    </View>
  )

}

const Stack = createNativeStackNavigator();



function FooterMenu() {
  // neu no khong la compnent thi phai khai bao navigation
  const navigation = useNavigation();
  return (
    <View style={styles.footer}>
      <Pressable onPress={() => {
        navigation.navigate('ListProduct')
      }}>
        <Image style={{
          height: '23px',
          width: '18px'
        }} source={require('./assets/list.png')} />
      </Pressable>
      <Pressable onPress={() => {
        navigation.navigate('ListProduct')
      }}>
        <Image style={{
          height: '24px',
          width: '24px'
        }} source={require('./assets/Vector.png')} />

      </Pressable>
      <Pressable onPress={() => {
        navigation.navigate('ListProduct')
      }}>
        <Image style={{
          height: '24px',
          width: '24px'
        }} source={require('./assets/back.png')} />
      </Pressable>

    </View>
  );
};

function Header() {
  return (
    <View style={{
      display: 'flex',
      flexDirection: 'row',
      gap: '35px'
    }}>
      <Image style={styles.icon} source={require('./assets/arrow-left.png')} />
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        width: '192px',
        height: '30px',
        backgroundColor: 'white',
        gap: '20px'
      }}>
        <Image style={{
          height: '24px',
          width: '24px',
          marginLeft: '5px',
          marginTop: '2px'
        }} source={require('./assets/find.png')} />
        <Text style={{
          color: '#7D5B5B',
          marginTop: '2px'
        }}>Day cap usb</Text>
      </View>
      <Image options={{}} style={styles.icon} source={require('./assets/cart.png')} />
      <Image style={{
        height: '4px',
        width: '18px',
        marginTop: '10px'
      }} source={require('./assets/group.png')} />
    </View>

  )
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#1BA9FF',
          display: 'flex',
          flexDirection: 'row',
        },
        // set header
        headerTitle: () => (
          <Header />
        )
      }}>
        <Stack.Screen name="ListProduct"
          component={ListProduct}
          options={{ title: 'List Product' }} />
        {/* hide back button */}
        <Stack.Screen name="DetailProduct"
          component={DetailProduct}
          options={{
            title: 'DetailProduct',
            headerLeft: () => null
          }} />

        <Stack.Screen name="Payment"
          component={Payment}
          options={{
            title: 'Payment',
            headerLeft: () => null
          }} />
      </Stack.Navigator>

      {/* set footer menu */}
      <FooterMenu />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    maxHeight: '600px'
  },
  icon: {
    height: '24px',
    width: '24px'
  },
  footer: {
    backgroundColor: '#1BA9FF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    position: 'absolute',
    bottom: '0',
    width: '100%',
  },
});
