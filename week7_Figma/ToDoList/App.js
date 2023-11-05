import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, Pressable } from 'react-native';
import { TextInput } from 'react-native';
import { StyleSheet, Text, View, Image } from 'react-native';
import Home from './component/home';
import Edit from './component/Detail';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DATA } from './component/data'
import Detail from './component/Detail';

function Item({ name }) {

  const navigation = useNavigation();
  function handlePress() {

    navigation.navigate('Detail', { edited: 1, name: name });
  }

  return (
    <View style={{
      flexDirection: 'row',
      height: '48px',
      width: '335px',
      borderRadius: '24px',
      gap: '50px',
      marginTop: '20px',
      backgroundColor: '#ccccca',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%'
    }}>
      <Image style={{
        height: '24px',
        width: '24px'
      }} source={require('./assets/check.png')} />

      <Text>{name}</Text>
      <Pressable onPress={handlePress}>
        <Image style={{
          height: '24px',
          width: '24px'
        }} source={require('./assets/add.png')} />
      </Pressable>

    </View>
  )
}
function List({ navigation, route }) {
  const name = route.params.name;
  const [search, setSearch] = useState('')
  function hanldePressed() {
    navigation.navigate('Detail', { name: name })


  }

  console.log(name)
  return (
    <View>
      <View style={{
        alignItems: 'flex-end',
        flexDirection: 'column',
        marginRight: '30px'
      }}>
        <View style={{
          flexDirection: 'row',
          marginRight: '70px'
        }}>
          <Image style={{
            height: '50px',
            width: '50px',
          }} source={require('./assets/avt.png')} />
          <Text style={{
            fontSize: '20px',
            fontWeight: '700px',
          }}>Hi {name}</Text>
        </View>
        <Text>Have agrate day a head</Text>
      </View>
      <TextInput style={{
        width: '334px',
        height: '43px',
        border: '1px solid #9095A0',
        marginTop: '15px',
        marginLeft: '30px'

      }} placeholder='Search' onChangeText={(newValue) => {
        console.log(newValue);
        setSearch(newValue);
      }}
        defaultValue={search}
      />
      <FlatList style={{
        marginTop: '20px'
      }} data={DATA}
        renderItem={({ item }) => {
          // tach view ra thanh nhieu phan
          return (
            <View style={{ margin: '5px' }}>
              <Item name={item.name} />
            </View>
          )
        }}
      >
      </FlatList>
      <View style={{
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Pressable onPress={hanldePressed}>
          <Image style={{
            height: '60px',
            width: '60px',
            alignItems: 'center',
            justifyContent: 'center'
          }} source={require('./assets/insert.png')} />
        </Pressable>

      </View>


    </View>
  )
}


const Stack = createNativeStackNavigator();
export default function App({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{
          title: ''
        }} name='Home' component={Home} />
        <Stack.Screen options={{
          title: ''
        }} name='List' component={List} />

        <Stack.Screen options={{
          title: ''
        }} name='Detail' component={Detail
        } />
      </Stack.Navigator>
    </NavigationContainer>

  )


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
});