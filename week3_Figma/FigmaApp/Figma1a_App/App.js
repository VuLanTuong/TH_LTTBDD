import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.dot}>
      </View>
      <View style={styles.text}>
        <Text style={{
          textAlign: 'center', fontSize: '30px',
          fontWeight: 'bold'
        }}>GROW</Text>
        <Text style={{
          textAlign: 'center', fontSize: '30px',
          fontWeight: 'bold'
        }}>YOUR BUSINESS</Text>
        <Text style={{
          textAlign: 'center',
          fontSize: '16px',
          fontWeight: 'bold',
          marginTop: '30px'
        }} >
          We will help you to grow your business using
          online server
        </Text>
      </View>
      <View style={styles.btn}>
        <Pressable style={{
          fontSize: '20px',
          borderRadius: '7px',
          background: '#E3C000',
          fontWeight: 'bold',
          border: '15px solid #E3C000',
        }}>
          <Text style={{ fontSize: '20px', fontWeight: 'bold' }}>LOG IN</Text>
        </Pressable>
        <Pressable style={{
          fontSize: '20px',
          borderRadius: '7px',
          background: '#E3C000',

          border: '15px solid #E3C000',
        }}>
          <Text style={{ fontSize: '18px', fontWeight: 'bold' }} >SIGN UP</Text>
        </Pressable>

      </View>
      <Text style={{
        marginTop: '25px',
        fontSize: '20px',
        fontWeight: 'bold',
        textAlign: 'center'

      }}>HOW WE WORK?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    backgroundImage: 'linear-gradient(180deg, #C7F4F7 0.03%, #D1F4F6 30.21%, #E5F4F5 85.42%, #00CCF9 100%)'


  },

  dot: {
    height: 140,
    width: 140,
    border: '12px solid black',
    borderRadius: '50%',
    marginTop: '-35px'
  },

  btn: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '80%',
    marginTop: '50px'

  },

  text: {
    marginTop: '80px'
  }
});
