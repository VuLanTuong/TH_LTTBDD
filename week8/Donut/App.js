import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListProduct from './screens/ListProduct'
import DetailProduct from './screens/DetailProduct';
const Stack = createNativeStackNavigator()
export default function App() {
  console.log(Stack);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name='ListProduct' component={ListProduct} />
        <Stack.Screen name='DetailProduct' component={DetailProduct} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
