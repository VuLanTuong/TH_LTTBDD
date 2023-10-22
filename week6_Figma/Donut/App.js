import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const DATA = [
  {
    id: 1,
    name: 'Pinarelo',
    price: 1800,
    description: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
    image: require('./assets/1.png')

  },
  {
    id: 2,
    name: 'Pina Mountain',
    price: 1700,
    description: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
    image: require('./assets/2.png')

  },
  {
    id: 3,
    name: 'Pina Bike',
    price: 1500,
    description: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
    image: require('./assets/3.png')

  },
  {
    id: 4,
    name: 'Pinarelo',
    price: 1900,
    description: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
    image: require('./assets/4.png')

  },
  {
    id: 5,
    name: 'Pinarelo',
    price: 2700,
    description: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
    image: require('./assets/5.png')

  },
  {
    id: 6,
    name: 'Pinarelo',
    price: 1350,
    description: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
    image: require('./assets/6.png')

  },
]

function Header() {
  return (
    <View style={{
      width: '100%'
    }}>
      <Text style={{
        fontSize: '25px',
        color: '#E94141',
        fontWeight: '700',
        marginTop: '47px'
      }}>The world’s Best Bike</Text>
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '40px',
        marginTop: '50px',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Pressable style={styles.btn}>
          <Text style={styles.textBtn}>All</Text>
        </Pressable>
        <Pressable style={styles.btn}>
          <Text style={styles.textBtn}>Road bike</Text>
        </Pressable>
        <Pressable style={styles.btn}>
          <Text style={styles.textBtn}>Mountain</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default function App() {
  return (

    <Header />

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  btn: {
    width: '93px',
    height: '32px',
    border: '1px solid red'
  },
  textBtn: {
    textAlign: 'center',
    margin: 'auto'
  }
});
