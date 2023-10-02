import { useState } from "react";
import { Pressable, StyleSheet, Text, View, TextInput } from "react-native";
import { PaperProvider, RadioButton } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function App() {
  const [gender, setGender] = useState("Female");

  const [hidePassword, setHidePassword] = useState(true);

  return (
    <PaperProvider>
      <View style={styles.container}>
        <View
          style={{
            marginBottom: "48px",
          }}
        >
          <Text style={styles.title}>Register</Text>
        </View>
        <View
          style={{
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <TextInput style={styles.input} placeholder="Name" />
          <TextInput style={styles.input} placeholder="Phone" />
          <TextInput style={styles.input} placeholder="Email" />
          <View>
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={hidePassword}
            />
            <Ionicons
              name="eye"
              size={32}
              style={{
                position: "absolute",
                right: "10px",
                top: "10px",
              }}
              onPress={() => setHidePassword((previousValue) => !previousValue)}
            />
          </View>
          <TextInput style={styles.input} placeholder="Birthday" />
          <View style={styles.radioButtonGroup}>
            <View style={styles.radioButtonContainer}>
              <RadioButton
                status={gender === "Male" ? "checked" : "unchecked"}
                value="Male"
                onPress={() => setGender("Male")}
              />
              <Text style={styles.radioButtonLabel}>Male</Text>
            </View>
            <View style={styles.radioButtonContainer}>
              <RadioButton
                status={gender === "Female" ? "checked" : "unchecked"}
                value="Female"
                onPress={() => setGender("Female")}
              />
              <Text style={styles.radioButtonLabel}>Female</Text>
            </View>
          </View>
        </View>
        <Pressable
          style={{
            width: "330px",
            marginTop: "16px",

            fontSize: "20px",
            fontWeight: "700",
            textAlign: "center",

            padding: "18px",
            borderRadius: "2px",

            color: "#ffffff",
            backgroundColor: "rgba(229, 57, 53, 1)",
          }}
        >
          Register
        </Pressable>
        <View
          style={{
            marginTop: "8px",
            fontSize: "14px",
            fontWeight: "400",
          }}
        >
          <Text>When you agree to terms and conditions</Text>
        </View>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#31AA5230",

    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: "24px",
    fontWeight: "700",
  },
  input: {
    fontSize: "18px",
    fontWeight: "400",

    width: "330px",
    height: "54px",
    backgroundColor: "rgba(196, 196, 196, 0.3)",

    padding: "10px",
  },
  radioButtonGroup: {
    flexDirection: "row",
    gap: "24px",
  },
  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioButtonLabel: {
    fontSize: "18px",
  },
});
