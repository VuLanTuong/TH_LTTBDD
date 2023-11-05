import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './component/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShopNearMe from './component/ShopNearMe';
import Drink from './component/Drink';
import Cart from './component/Cart';
import { Provider } from 'react-redux';
import store from './component/Store';

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='home' screenOptions={{
          headerShown: false,

        }}>
          <Stack.Screen name='drink' component={Drink} />
          <Stack.Screen name='home' component={Home} />
          <Stack.Screen name='shop' component={ShopNearMe} />
          <Stack.Screen name='cart' component={Cart} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
