import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';
import { TextInput } from 'react-native';
import React, { useState } from 'react';
export default function App() {

  const [text, setText] = useState('');

  const handleChangeText = (value) => {
    setText(value);
  };

  return (
    <View style={styles.container}>

      <View style={{
        display: 'flex',
        flexDirection: 'row'
      }} >
        <Image
          source={require('./assets/usb2.png')}
          style={{
            width: '54.5px',
            height: '49px',
            marginTop: '32px',
            marginLeft: '11px'
          }}


        />
        <Text style={{
          marginLeft: '16px',
          marginTop: '19px',
          fontWeight: '700',
          fontSize: '16px'

        }}>USB Bluetooth Music
          Receiver {"\n"} HJX-001- Biến loa thường thành loa {"\n"}bluetooth</Text>
      </View>

      <View style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        <Text style={{
          marginLeft: '26px',
          marginTop: '51px',
          fontWeight: '700',
          fontSize: '18px',
          textAlign: 'center'

        }}>
          Cực kì hài lòng
        </Text>

        <View style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '15px'

        }}>
          <View>
            <Image source={require('./assets/star.png')}
              style={{
                width: '39px',
                height: '39px'
              }}
            />
          </View>
          <View>
            <Image source={require('./assets/star.png')}
              style={{
                width: '39px',
                height: '39px'
              }}
            />
          </View>
          <View>
            <Image source={require('./assets/star.png')}
              style={{
                width: '39px',
                height: '39px'
              }}
            />
          </View>
          <View>
            <Image source={require('./assets/star.png')}
              style={{
                width: '39px',
                height: '39px'
              }}
            />
          </View>
          <View>
            <Image source={require('./assets/star.png')}
              style={{
                width: '39px',
                height: '39px'
              }}
            />
          </View>
        </View>
      </View>
      <View style={{
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Pressable style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '75px',
          gap: '15px',
          padding: '15px',
          paddingLeft: '40px',
          paddingRight: '40px',
          border: '2px solid black',
          borderRadius: '5px'
        }}
        >
          <Image source={require("./assets/camera.png")} style={{
            width: '39px', height: '32px'
          }} />
          <Text
            style={{
              fontSize: '21px',
              fontWeight: '700',

            }}
          >
            Thêm hình ảnh
          </Text>
        </Pressable>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '25px',
            gap: '15px',
            // padding: '50px',
            // paddingLeft: '50px',
            // paddingRight: '50px',
            border: '2px solid black',
            borderRadius: '5px',
            width: '295.3px',
            minHeight: '200px',

          }}>

          <TextInput
            style={{
              flex: '1',
              width: '295.3px',
              minHeight: '200px',
              fontSize: '18px',




            }}
            multiline={true}
            row={6}
            placeholder='Hãy chi sẻ những điều 
            mà bạn thích về sản phẩm'
            value={text}
            onChangeText={handleChangeText}


          />

        </View>
      </View>
      <View style={{
        marginTop: '25px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'


      }}>
        <Pressable style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '295.3px',
          height: '40px',
          border: '2px solid #1511EB',
          backgroundColor: '#0D5DB6'

        }}>
          <Text style={{
            fontSize: '20px',
            fontWeight: '700',
            color: 'white'
          }}>Gửi</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    display: 'flex',
    flex: '1'


  },
  textArea: {


  }
});
