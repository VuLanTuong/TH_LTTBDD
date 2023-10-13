import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { SafeAreaView } from 'react-native';
import { TextInput } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function handleColor({ color }) {
  console.log(color)
}
function DetailProduct({ navigation, image }) {
  return (
    <View style={styles.container}>
      <View style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}>
        <Image source={require('./assets/vs_blue.png')} style={{
          width: '301px',
          height: '361px',
        }} />
      </View>

      <Text style={{
        fontSize: '15px',
        fontWeight: '400',
        marginLeft: '22px'

      }}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>


      <View style={{
        display: 'flex',
        flexDirection: 'row',
        marginLeft: '22px',
        gap: '5px',
        marginTop: '5px'
      }}>
        <Image source={require('./assets/star.png')}
          style={{
            width: '23px',
            height: '25px'
          }} />
        <Image source={require('./assets/star.png')}
          style={{
            width: '23px',
            height: '25px'
          }} />
        <Image source={require('./assets/star.png')}
          style={{
            width: '23px',
            height: '25px'
          }} />
        <Image source={require('./assets/star.png')}
          style={{
            width: '23px',
            height: '25px'
          }} />
        <Image source={require('./assets/star.png')}
          style={{
            width: '23px',
            height: '25px'
          }} />

        <Text style={{
          marginTop: '5px'

        }}>(Xem 828 đánh giá)</Text>
      </View>
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        marginLeft: '22px',
        marginTop: '10px'
      }}>
        <Text style={{
          fontWeight: '700',
          fontSize: '18px'

        }}>1.790.000 đ</Text>
        <Text style={{
          textDecorationLine: 'line-through',
          fontWeight: '400',
          fontSize: '15px',
          marginLeft: '20px',

        }}>1.790.000 đ</Text>
      </View>
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '10px'
      }}>
        <Text style={{
          marginLeft: '22px',
          marginTop: '5px',
          fontWeight: '700',
          fontSize: '12px',
          color: 'red'

        }}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
        <Image source={require('./assets/chamhoi.png')} style={{
          height: '20px', width: '20px'
        }} />
      </View>
      <View style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10px',
        height: '34px',
        width: '332px',
      }}>
        <Pressable style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '34px',
          width: '332px',
          border: '2px solid black',
          borderRadius: '10px',
          flexDirection: 'row',
          flex: '1',
          marginLeft: '50px'

        }}
          onPress={() => {
            navigation.navigate('Details')
            console.log(image)
          }
          }>

          <Text>4 MÀU-CHỌN MÀU</Text>
          <Image source={require('./assets/Vector.png')}
            style={{
              height: '11.5px',
              width: '14px',
            }} />
        </Pressable>


      </View>
      <View style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '30px',
        height: '40px',
        width: '332px',

        border: '0px'
      }}>
        <Pressable style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '40px',
          width: '332px',
          borderRadius: '10px',
          flexDirection: 'row',
          flex: '1',
          marginLeft: '50px',
          backgroundColor: 'red'

        }} >
          <Text style={{
            color: 'white',
            fontSize: '20px',
            fontWeight: '700'
          }}>CHỌN MUA</Text>

        </Pressable>
      </View>


    </View>
  );
}


function DetailsColor() {
  var [image, setImage] = React.useState(require('./assets/vs_blue.png'))

  return (
    <View style={{ flex: 1, }}>
      <View style={{
        display: 'flex',
        flexDirection: 'row'
      }}>
        <Image source={image}
          style={{
            height: '132px',
            width: '112px'
          }} />
        <Text style={{
          fontSize: '15px',
          fontWeight: '400'
        }}>Điện Thoại Vsmart Joy 3 {'\n'}
          Hàng chính hãng</Text>

      </View>
      <View style={{
        marginTop: '10px',
        border: '1px solid black',
        width: '370px',
        height: '450px',
        display: 'flex',
        marginLeft: '10px',
        backgroundColor: '#C4C4C4'
      }}>
        <Text style={{
          fontSize: '18px',
          fontWeight: '700',
          marginLeft: '17px'
        }}>Chọn một màu bên dưới:</Text>
        <View style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
          marginTop: '10px'
        }}>
          <Pressable style={{
            backgroundColor: '#C5F1FB',
            width: '85px',
            height: '80px'

          }} onPress={() => {
            setImage(require('./assets/vs_silver.png'))
          }}>
          </Pressable>
          <Pressable style={{
            backgroundColor: '#F30D0D',
            width: '85px',
            height: '80px'

          }} onPress={() => {
            setImage(require('./assets/vs_red.png'))
          }}>
          </Pressable>
          <Pressable style={{
            backgroundColor: '#000000',
            width: '85px',
            height: '80px'

          }} onPress={() => {
            setImage(require('./assets/vs_black.png'))
          }}>
          </Pressable>
          <Pressable style={{
            backgroundColor: '#234896',
            width: '85px',
            height: '80px'

          }} onPress={() => {
            setImage(require('./assets/vs_blue.png'))
          }}>
          </Pressable>
        </View>
        <View style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '40px',
          width: '332px',
          marginTop: '10px',
          border: '0px'
        }}>
          <TouchableOpacity style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '40px',
            width: '332px',
            borderRadius: '10px',
            flexDirection: 'row',
            flex: '1',
            marginLeft: '50px',
            backgroundColor: '#234896'

          }}
            onPress={() => {
              <handleColor color={image} />
              navigation.navigate('Product')
              handleColor()
            }

            }
          >
            {/* <section>
              <DetailProduct image={image} />
            </section> */}
            <Text style={{
              color: 'white',
              fontSize: '20px',
              fontWeight: '700'
            }}>XONG</Text>

          </TouchableOpacity>
        </View>
      </View>



    </View>
  );
}


const Stack = createNativeStackNavigator();
// const [image, setImage] = React.useState(require('./assets/vs_blue.png'))

function App() {
  // const [selectedImage, setSelectedImage] = React.useState(require('./assets/vs_blue.png'));
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Product" component={DetailProduct} />
        <Stack.Screen name="Details" component={DetailsColor} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
