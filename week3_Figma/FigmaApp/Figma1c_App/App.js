import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{
          textAlign: 'center', fontSize: '60px',
          marginTop: '-150px',
          fontWeight: 'bold'
        }}>CODE</Text>
        <Text style={{
          textAlign: 'center',
          fontSize: '20px',
          fontWeight: 'bold',
          marginTop: '60px'
        }}>VERIFICATION</Text>

        <Text style={{
          textAlign: 'center',
          fontSize: '15px',
          fontWeight: 'bold',
          marginTop: '70px'
        }}>Enter online password sent on {'\n'}
          +849092605789</Text>

      </View>
      <View style={styles.fill}>
        <View style={styles.rectangle}></View>
        <View style={styles.rectangle}></View>
        <View style={styles.rectangle}></View>
        <View style={styles.rectangle}></View>
        <View style={styles.rectangle}></View>
        <View style={styles.rectangle}></View>
      </View>

      <View style={{
        marginTop: '50px'

      }}>
        <Pressable style={{
          fontSize: '20px',
          borderRadius: '7px',
          background: '#E3C000',
          fontWeight: 'bold',
          border: '15px solid #E3C000',
          width: '300px',
          height: '45px',
          borderRadius: '0%'

        }}>
          <Text style={{
            fontSize: '18px', fontWeight: 'bold', textAlign: 'center',

          }}>VERIFY CODE</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: '120vh',
    backgroundColor: 'transparent',
    backgroundImage: 'linear-gradient(220deg, #C7F4F7 0.03%, #D1F4F6 30.21%, #E5F4F5 85.42%, #00CCF9 100%)'

  },

  fill: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '50px'
  },
  rectangle: {
    border: ' 1px solid black',
    width: '50px',
    height: '50px'
  }


});
