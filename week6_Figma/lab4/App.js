import React from 'react';
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
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const DATA = [
  {
    id: '1',
    title: 'Ca nấu lẩu',
    image: require('./assets/1.png'),
    shopName: 'Shop Devang'
  },
  {
    id: '2',
    title: '1kg khô gà bơ tỏi',
    image: require('./assets/2.png'),
    shopName: 'LTD Food'
  },
  {
    id: '3',
    title: 'Xe cần cẩu đa năng',
    image: require('./assets/3.png'),
    shopName: 'Thế giới đồ chơi'
  },
  {
    id: '4',
    title: 'Đồ chơi dạng mô hình',
    image: require('./assets/4.png'),
    shopName: 'Thế giới đồ chơi'
  },
  {
    id: '5',
    title: 'Lãnh đạo giản đơn',
    image: require('./assets/5.png'),
    shopName: 'Minh Long Book'
  },
  {
    id: '6',
    title: 'Hiểu lòng con trẻ',
    image: require('./assets/6.png'),
    shopName: 'Minh Long Book'
  },
  {
    id: '7',
    title: 'Thiên tài lãnh đạo',
    image: require('./assets/7.png'),
    shopName: 'Minh Long Book'
  },
];

const Item = ({ title, image, shopName }) => (
  <View style={styles.item}>
    <Image style={styles.image} source={image} />
    <View style={{
      display: 'flex',
      flexDirection: 'column',
      flex: '1'
    }}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.shopName}>{shopName}</Text>


    </View>
    <View>
      <Pressable style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        padding: '10px',
        marginTop: '20px',
        marginRight: '20px',
        border: '1px solid red',
        backgroundColor: '#F31111'

      }}>
        <Text style={{
          color: 'white'
        }}>Chat</Text>
      </Pressable>
    </View>


  </View>
);


// const Header = () => {
//   <View>
//     <Image style={styles.icon} source={require('./assets/arrow_left.png')} />
//     <Image style={styles.icon} source={require('./assets/cart.png')} />
//     <Image source={require('./assets/1.png')}
//       style={{
//         width: '23px',
//         height: '25px'
//       }} />
//   </View>
// }

// Custom header component with image icon
function CustomHeader() {
  return (
    <View style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      flex: '1'

    }}>
      <Image style={styles.icon} source={require('./assets/arrow-left.png')} />
      <Image style={styles.icon} source={require('./assets/cart.png')} />
    </View>

  );
}

function ListProduct({ navigation }) {
  return (
    <View>
      <View style={{}}>
        {/* <Image style={styles.icon} source={require('./assets/arrow_left.png')} />
        <Image style={styles.icon} source={require('./assets/cart.png')} /> */}
      </View>
      <View style={styles.container}>

        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} shopName={item
            .shopName} image={item.image} />}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  )
}
const FooterMenu = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.menuText}>Menu Item 1</Text>
      <Text style={styles.menuText}>Menu Item 2</Text>
      <Text style={styles.menuText}>Menu Item 3</Text>
    </View>
  );
};
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1BA9FF',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitle: 'Chat',
          headerTitleAlign: 'center',

          // headerBackground: () => (
          //   <Image
          //     style={styles.icon}
          //     source={require('./assets/arrow-left.png')}
          //   />
          // )
          // headerTitle: () => <CustomHeader />


        }}
      >

        <Stack.Screen
          name="ListProduct"
          component={ListProduct}
          options={{ title: 'List Product' }}
        />
      </Stack.Navigator>
      {/* Render the footer */}
      <FooterMenu />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: 'white',
    display: 'flex',
    marginVertical: 8,
    marginHorizontal: 16,
    width: '360px',
    height: '80px',
    flexDirection: 'row'
  },
  title: {
    fontSize: 16,
  },
  shopName: {
    fontSize: 16,
    color: 'red'
  },
  image: {
    height: '74px',
    width: '74px'
  },
  icon: {
    height: '24px',
    width: '24px',
  },
  footer: {
    backgroundColor: '#1BA9FF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  menuText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default App;