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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const DATA = [
  {
    id: '1',
    title: 'Cap sac chuyen tu cong USB sang PS2',
    price: '69.900 vnd',
    image: require('./assets/p1.png')

  },
  {
    id: '2',
    title: 'Cap sac chuyen tu cong USB sang PS2',
    price: '69.900 vnd',
    image: require('./assets/p2.png')

  },
  {
    id: '3',
    title: 'Cap sac chuyen tu cong USB sang PS2',
    price: '69.900 vnd',
    image: require('./assets/p3.png')

  },
  {
    id: '4',
    title: 'Cap sac chuyen tu cong USB sang PS2',
    price: '69.900 vnd',
    image: require('./assets/p4.png')

  },
  {
    id: '5',
    title: 'Cap sac chuyen tu cong USB sang PS2',
    price: '69.900 vnd',
    image: require('./assets/p5.png')

  },
  {
    id: '6',
    title: 'Cap sac chuyen tu cong USB sang PS2',
    price: '69.900 vnd',
    image: require('./assets/p6.png')

  }

]

const Item = ({ title, image, price }) => (
  <View style={{
    display: 'flex',
    gap: '5px',
    width: '46%',
    marginTop: '20px'
  }}>
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
      <Text>{price}</Text>
      <Text style={{
        color: '#969DAA'
      }}>-39%</Text>
    </View>

  </View>


);

function List() {
  return (
    <View>
      <Image style={{
        height: '23px',
        width: '13px'
      }} source={require('./assets/list.png')} />
    </View>
  )
}
function Home() {
  return (
    <View>
      <Image style={{
        height: '24px',
        width: '24px'
      }} source={require('./assets/home.png')} />
    </View>
  )
}

function Back() {
  return (
    <View>
      <Image style={{
        height: '24px',
        width: '24px'
      }} source={require('./assets/back.png')} />
    </View>
  )
}

const Tab = createBottomTabNavigator();
function CustomFooter() {
  return (
    <Tab.Navigator
      tabBarStyle={{
        backgroundColor: '#1BA9FF'
      }}

      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconSource;
          if (route.name === 'list') {
            iconSource = focused
              ? require('./assets/list.png')
              : require('./assets/list.png');
          }
          if (route.name === 'home') {
            iconSource = focused
              ? require('./assets/home2.png')
              : require('./assets/home2.png');
          }

          if (route.name === 'back') {
            iconSource = focused
              ? require('./assets/back.png')
              : require('./assets/back.png');
          }


          return <Image source={iconSource} style={{ width: '24px', height: '24px' }} />;
        },

      })}
    >
      <Tab.Screen name='list' component={ListProduct} options={
        styles.header
      } />
      <Tab.Screen name='home' component={Home} options={
        styles.header

      } />
      <Tab.Screen name='back' component={Back} options={
        styles.header

      } />
    </Tab.Navigator>


  )

}
function ListProduct({ navigation }) {
  return (
    <View style={{
      display: 'flex',
      // flexDirection: 'row',
      // flex: '1',
      // flexWrap: 'wrap',

    }}>
      <FlatList data={DATA}
        numColumns={2}
        renderItem={({ item }) =>
          <Item title={item.title}
            image={item.image}
            price={item.price} />}
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
function CustomHeader() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1BA9FF',
          display: 'flex',
          flexDirection: 'row',
        },
        headerTitle: () => (
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
            <Image style={styles.icon} source={require('./assets/cart.png')} />
            <Image style={{
              height: '4px',
              width: '18px',
              marginTop: '10px'
            }} source={require('./assets/group.png')} />
          </View>
        )
      }}>

      <Stack.Screen name="ListProduct"
        component={ListProduct}
        options={{ title: 'List Product' }} />
    </Stack.Navigator>
  )

}


export default function App() {
  return (
    <NavigationContainer>
      <CustomFooter />

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
  header: {
    headerStyle: {
      backgroundColor: '#1BA9FF',
      display: 'flex',
      flexDirection: 'row',
    }


    ,
    tabBarItemStyle: {
      backgroundColor: '#1BA9FF',
    },
    headerTitle: () => (
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
        <Image style={styles.icon} source={require('./assets/cart.png')} />
        <Image style={{
          height: '4px',
          width: '18px',
          marginTop: '10px'
        }} source={require('./assets/group.png')} />
      </View>
    )
  }
});
