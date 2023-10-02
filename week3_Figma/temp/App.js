import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.dot}>
        <Image source={require('./assets/lock-152879 1.svg')} style={styles.mail} />
      </View>
      <View style={styles.text}>
        <Text style={{
          textAlign: 'center', fontSize: '30px',
          fontWeight: 'bold'
        }}>FORGET</Text>
        <Text style={{
          textAlign: 'center', fontSize: '30px',
          fontWeight: 'bold'
        }}>PASSWORD</Text>
        <Text style={{
          textAlign: 'center',
          fontSize: '16px',
          fontWeight: 'bold',
          marginTop: '30px'
        }} >
          Provide your account'email for which you
          want to reset your password
        </Text>
      </View>
      {/* <View style={styles.btn}>
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

      }}>HOW WE WORK?</Text> */}
      <View style={styles.inputEmail}>
        <Image source={require('./assets/mail.png')} style={styles.mail} />
        <SafeAreaView>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
          />
        </SafeAreaView>
      </View>
      <Pressable style={{
        fontSize: '20px',
        borderRadius: '7px',
        background: '#E3C000',
        fontWeight: 'bold',
        border: '15px solid #E3C000',
      }}>
        <Text>NEXT</Text>
      </Pressable>

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
  },
  inputEmail: {
    flexDirection: 'row',
    alignContent: 'center',
    backgroundColor: '#C4C4C4',
    height: '50px',
    width: '320px',
    marginTop: '40px',
    paddingHorizontal: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderWidth: 0,
    paddingVertical: 0,
    fontWeight: 'bold'
  },
  mail: {
    height: '32px',
    width: '32px',
    marginTop: '8px',
    marginLeft: '20px'
  }
});
