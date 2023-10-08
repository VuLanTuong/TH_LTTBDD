import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Image } from 'react-native';
import { SafeAreaView } from 'react-native';
import { TextInput } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [result, setResult] = useState('141.800' + ' đ');
  const [quantity, setQuantity] = useState(1)


  const handleAddBtn = () => {
    setQuantity(quantity + 1)
    let temp = quantity + 1
    setResult((141.800 * temp).toFixed(3) + ' đ')

  }

  const handleMinusBtn = () => {
    setQuantity(quantity - 1)
    let temp = quantity - 1
    setResult((141.800 * temp).toFixed(3) + ' đ')

  }

  const handleResult = () => {
    setResult((141.800 * quantity).toFixed(3) + ' đ')
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '15px'
        }}>
        <Image source={require('./assets/book.png')}
          style={{
            display: 'flex',
            height: '107px',
            width: '104px',
            marginTop: '14px',
            marginLeft: '13px'
          }} />
        <View>
          <Text style={{
            marginTop: '14px',
            fontSize: '12px',
            fontWeight: '700',
          }}>Nguyên hàm tích phân và ứng dụng</Text>

          <Text style={{
            marginTop: '5px',
            fontSize: '12px',
            fontWeight: '700',
          }}>Cung cấp bởi Tiki Trading</Text>

          <Text style={{
            marginTop: '5px',
            fontSize: '18px',
            fontWeight: '700',
            color: 'red'
          }}>141.800 đ</Text>

          <Text style={{
            marginTop: '5px',
            fontSize: '12px',
            fontWeight: '700',
            color: '#808080',
            textDecorationLine: 'line-through'
          }}>141.800 đ</Text>

          <View style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '10px'
          }}>
            <Pressable onPress={handleMinusBtn}>
              <Image source={require('./assets/btnminus.png')} style={{
                marginTop: '5px',
                height: '15px',
                width: '15px'

              }} />
            </Pressable>
            <TextInput style={{
              width: '10px'
            }} value={quantity}></TextInput>
            <Pressable onPress={handleAddBtn} >
              <Image source={require('./assets/btnadd.png')} style={{
                marginTop: '5px',
                height: '15px',
                width: '15px'

              }}
              />
            </Pressable>
            <Pressable onPress={handleAddBtn}
              style={{
                marginTop: '5px',
                marginLeft: '100px',
                fontSize: '12px',
                color: '#134FEC',
                fontWeight: '700'
              }}>Mua sau</Pressable>
          </View>

        </View>



      </View>
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        marginTop: '15px',
        marginLeft: '13px',
        gap: '10px'
      }}>
        <Pressable style={{
          fontSize: '12px',
          fontWeight: '700'
        }}>Mã giảm giá đã lưu</Pressable>
        <Pressable style={{
          fontSize: '12px',
          fontWeight: '700',
          color: '#134FEC'
        }}>Xem tại đây</Pressable>


      </View>
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        marginTop: '25px',
        marginLeft: '13px'
      }}>
        <View>
          <Pressable style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '15px',
            border: '2px solid black',
            width: '220px',
            height: '45px',
            border: '1px solid #808080'
          }}>
            <TextInput style={{
              width: '32px',
              height: '16px',
              backgroundColor: 'yellow',
              marginTop: '15px',
              marginLeft: '15px',
              display: 'flex',
              alignItems: 'center',

            }}></TextInput>
            <Text style={{
              fontSize: '18px',
              fontWeight: '700',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center'
            }}>Mã giảm giá</Text>
          </Pressable>

        </View>

        <View>
          <Pressable style={{
            display: 'flex',
            flexDirection: 'row',
            border: '2px solid black',
            width: '99px',
            height: '45px',
            marginLeft: '25px',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0A5EB7',
            border: '1px solid #808080'
          }}>
            <Text style={{
              fontSize: '18px',
              fontWeight: '700',
              textAlign: 'center',
              display: 'flex',
              color: 'white'

            }}>Áp dụng</Text>
          </Pressable>


        </View>





      </View>
      <View style={{
        marginTop: '25px',
        height: '15px',
        backgroundColor: '#C4C4C4'

      }}>
      </View>
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '5px',
        marginTop: '15px',
        marginLeft: '13px'
      }}>
        <Text style={{
          fontSize: '12px',
          fontWeight: '700'
        }}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
        <Pressable>
          <Text style={{
            fontSize: '12px',
            fontWeight: '700',
            color: '#134FEC'
          }}>Nhập tại đây?</Text>
        </Pressable>
      </View>
      <View style={{
        marginTop: '20px',
        height: '15px',
        backgroundColor: '#C4C4C4'

      }}>
      </View>
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        marginTop: '15px',
        marginLeft: '13px',
        justifyContent: 'space-between'
      }}>
        <Text style={{
          fontSize: '18px',
          fontWeight: '700',
          color: 'black'
        }}> Tạm tính</Text>

        <Text style={{
          fontSize: '18px',
          fontWeight: '700',
          color: 'red',
          marginRight: '30px',


        }}

        > {result}</Text>

      </View>
      <View style={{
        marginTop: '20px',
        height: '120px',
        backgroundColor: '#C4C4C4'

      }}>
      </View>

      <View style={{
        display: 'flex',
        flexDirection: 'row',
        marginTop: '15px',
        marginLeft: '13px',
        justifyContent: 'space-between'
      }}>
        <Text style={{
          fontSize: '18px',
          fontWeight: '700',
          color: '#808080'
        }}>Thành tiền</Text>

        <Text style={{
          fontSize: '18px',
          fontWeight: '700',
          color: 'red',
          marginRight: '30px'

        }}

        > {result}</Text>

      </View>
      <View style={{
        marginTop: '30px',

        width: '331px',
        height: '45px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '30px'
      }}>
        <Pressable style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '331px',
          height: '45px',
          backgroundColor: 'red'
        }}>
          <Text style={{
            color: 'white',
            fontSize: '20px',
            fontWeight: '700',
            display: 'flex',
            alignItems: 'center'
          }}>TIẾN HÀNH ĐẶT HÀNG</Text>
        </Pressable>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },


});
