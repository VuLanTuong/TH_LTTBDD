import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
// import { Checkbox, PaperProvider, RadioButton } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from 'react';
import Checkbox from 'expo-checkbox';
export default function App() {
  const [haveLowerChecked, setLowerChecked] = useState(false);
  const [haveUpperChecked, setUpperChecked] = useState(false);
  const [haveNumberChecked, setNumberChecked] = useState(false);
  const [haveSymbolChecked, setSymbolChecked] = useState(false);
  const [passwordLength, setPasswordLength] = useState('');
  const [passwordGenerate, setPasswordGenerate] = useState('');
  const handlePasswordLength = (passwordLength) => {
    if (passwordLength >= 4)
      setPasswordLength(passwordLength);
    else {
      alert("Length >= 4")
    }
  };
  const handlePassword = () => {
    let passwordGenerate = "";
    let indexPass = passwordLength - passwordGenerate.length;
    if (haveLowerChecked)
      passwordGenerate += "a"
    if (haveUpperChecked)
      passwordGenerate += "A"
    if (haveNumberChecked)
      passwordGenerate += "3"
    if (haveSymbolChecked)
      passwordGenerate += "*"

    if (passwordGenerate.length < passwordLength) {

      for (let i = 0; i < indexPass; i++) {
        passwordGenerate += i
      }

    }
    console.log(passwordGenerate)
    setPasswordGenerate(passwordGenerate);
  };



  return (
    <View style={styles.container}>
      <View style={{
        backgroundColor: '#23235B',
        flex: '1',
        borderRadius: '15px'
      }}>
        <View>
          <Text style={{
            textAlign: 'center',
            fontSize: '25px',
            fontWeight: '700',
            color: 'white',
            marginTop: '25px'
          }}>PASSWORD {'\n'} GENERATOR</Text>
        </View>

        <View style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <TextInput
            style={{
              marginTop: '25px',
              // border: '2px solid white',
              height: '55px',
              width: '297px',
              backgroundColor: '#151537',
              color: 'white',
              fontSize: '18px'
            }}
            value={passwordGenerate}
            editable={false}

          />
        </View>
        <View>
          <View style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '15px',
            marginTop: '30px',
            marginLeft: '10px'

          }}>
            <Text style={{
              marginLeft: '10px',
              fontSize: '18px',
              fontWeight: '700',
              color: 'white',
              justifyContent: 'flex-start'


            }}>
              Password length
            </Text>
            <TextInput style={{
              border: '2px solid white',
              backgroundColor: 'white',
              width: '118px',
              height: '33px',
              fontSize: '18px'
            }}
              value={passwordLength}
              onChangeText={handlePasswordLength}
              onChange={''}
            />
          </View>
          <View style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '15px',
            marginTop: '45px',
            marginLeft: '10px'

          }}>

            <Text style={{
              marginLeft: '10px',
              fontSize: '18px',
              fontWeight: '700',
              color: 'white',
              justifyContent: 'flex-start'

            }}>
              Include lower case letters
            </Text>
            <Checkbox

              style={styles.checkbox}
              value={haveLowerChecked}
              onValueChange={setLowerChecked}
              color={haveLowerChecked ? '#4630EB' : undefined}
            />

          </View>
          <View style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '15px',
            marginTop: '45px',
            marginLeft: '10px'

          }}>

            <Text style={{
              marginLeft: '10px',
              fontSize: '18px',
              fontWeight: '700',
              color: 'white',
              justifyContent: 'flex-start'

            }}>
              Include upcase letters
            </Text>
            <Checkbox

              style={{
                padding: '12px',
                marginLeft: '28px'
              }}
              value={haveUpperChecked}
              onValueChange={setUpperChecked}
              color={haveUpperChecked ? '#4630EB' : undefined}
            />

          </View>
          <View style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '15px',
            marginTop: '45px',
            marginLeft: '10px'

          }}>

            <Text style={{
              marginLeft: '10px',
              fontSize: '18px',
              fontWeight: '700',
              color: 'white',
              justifyContent: 'flex-start'

            }}>
              Include number letters
            </Text>
            <Checkbox

              style={{
                padding: '12px',
                marginLeft: '20px'
              }}
              value={haveNumberChecked}
              onValueChange={setNumberChecked}
              color={haveNumberChecked ? '#4630EB' : undefined}
            />

          </View>
          <View style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '15px',
            marginTop: '45px',
            marginLeft: '10px'

          }}>

            <Text style={{
              marginLeft: '10px',
              fontSize: '18px',
              fontWeight: '700',
              color: 'white',
              justifyContent: 'flex-start'

            }}>
              Include specical symbol
            </Text>
            <Checkbox

              style={{
                padding: '12px',
                marginLeft: '15px'
              }}
              value={haveSymbolChecked}
              onValueChange={setSymbolChecked}
              color={haveSymbolChecked ? '#4630EB' : undefined}
            />

          </View>
          <View style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Pressable
              style={{
                display: 'flex',
                flex: '1',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '25px',
                padding: '10px',
                backgroundColor: '#3B3B98',
                width: '259px'

              }}
              onPress={handlePassword}
            >
              <Text
                style={{
                  color: 'white',
                  fontSize: '18px',
                  fontWeight: '700',
                }}>GENERATE PASSWORD </Text>
            </Pressable>

          </View>

        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    backgroundImage: 'linear-gradient(180deg, #C4C4C400 0%, #3B3B98 100%)',
    padding: '25px'
  },
  checkbox: {
    marginBottom: '6px',
    padding: '12px'
  },
});
