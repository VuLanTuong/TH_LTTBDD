import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Image } from 'react-native';
import { SafeAreaView } from 'react-native';
import { TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{
        textAlign: 'center', fontSize: '25px',
        marginTop: '70px',
        fontWeight: 'bold'
      }}>LOGIN</Text>

      <SafeAreaView style={{ flex: 1 }}>
        <View>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#C4C4C4',
            fontSize: '15px',
            border: '0px',
            marginTop: '100px',
            width: '330px',
            height: '48px',
          }}>
            {/* <Image
              source={require('./assets/mail.png')}
              style={styles.imageStyle}
            /> */}
            <TextInput
              style={{ flex: 1 }}
              placeholder=" Email"
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.sectionStyle}>

            <TextInput
              style={{ flex: 1 }}
              placeholder=" Password"
              underlineColorAndroid="transparent"
            />
            <Image
              source={require('./assets/eye 1.png')}
              style={styles.imageStyle}
            />
          </View>
        </View>
      </SafeAreaView>
      <View style={{
      }}>
        <Pressable style={{
          fontSize: '20px',
          borderRadius: '7px',
          background: 'red',
          fontWeight: 'bold',
          border: '15px solid red',
          width: '330px',
          height: '45px',
          borderRadius: '0%',
          marginTop: '-250px',


        }}>
          <Text style={{
            fontSize: '18px',
            fontWeight: 'bold', textAlign: 'center',
            color: '#fff'

          }}>LOG IN</Text>
        </Pressable>
      </View>
      <View style={styles.main}>
        <Text style={styles.content}>When you agree to terms and conditions</Text>
        <Text style={{
          marginTop: '15px',
          textAlign: 'center',
          fontSize: '15px',
          color:
            '#5D25FA'
        }}>Forgot your password?</Text>
        <Text style={{
          marginTop: '15px',
          textAlign: 'center',
          fontSize: '15px'
        }}>Or login with</Text>
      </View>

      <View style={{
        display: 'flex',
        flexDirection: 'row',

      }}>
        <View style={
          {
            border: ' 1px solid black',
            width: '110px',
            height: '45px',
            marginTop: '-120px',
            border: '1px solid rgb(34, 181, 255)',
            background: 'rgb(2, 2, 190)'

          }
        }>
          <Image source={require('./assets/facebook.png')} style={{
            background: 'rgb(2, 2, 190)',
            width: "40px",
            height: "40px",
            marginLeft: '25px'
          }} />
        </View>
        <View style={{
          border: ' 1px solid black',
          width: '110px',
          height: '45px',
          marginTop: '-120px',
          border: '1px solid rgb(34, 181, 255)',
          background: 'rgb(34, 181, 255)'
        }}>
          <Image source={require('./assets/icozalo.png')} style={{
            background: 'rgb(34, 181, 255)',
            width: "27px",
            height: "27px",
            marginLeft: '40px',
            marginTop: '10px'
          }} />
        </View>
        <View style={styles.rectangle}>
          <Image source={require('./assets/gg.png')} style={{
            width: "30px",
            height: "30px",
            marginLeft: '40px',
            marginTop: '5px'
          }} />
        </View>
      </View>

    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dffff8',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '330px',
    height: '48px',
    backgroundColor: '#C4C4C4',
    fontSize: '15px',
    border: '0px',
    marginTop: '20px',

  },
  imageStyle: {
    margin: 5,
    height: 25,
    width: 25,
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },

  content: {
    marginTop: '-250px',
    textAlign: 'center',
    fontSize: '15px'
  },
  fill: {
    display: 'flex',
    flexDirection: 'row',

  },
  rectangle: {
    border: ' 1px solid black',
    width: '110px',
    height: '45px',
    marginTop: '-120px',
    border: '1px solid rgb(34, 181, 255)'
  },
  main: {
    marginTop: '50px'
  }
});
