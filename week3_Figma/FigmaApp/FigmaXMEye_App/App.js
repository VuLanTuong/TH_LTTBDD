import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: "32px",
        }}
      >
        <Image
          style={{
            width: 200,
            height: 200,
          }}
          source={require("./assets/eyeball.svg")}
        />
      </View>
      <View
        style={{
          gap: "16px",
        }}
      >
        <View style={styles.inputContainer}>
          <FontAwesome
            style={styles.inputIconLeft}
            name="user"
            size={32}
            color="black"
          />
          <TextInput style={styles.input} placeholder="Please input username" />
        </View>
        <View style={styles.inputContainer}>
          <FontAwesome
            style={styles.inputIconLeft}
            name="lock"
            size={32}
            color="black"
          />
          <TextInput style={styles.input} placeholder="Please input password" />
        </View>
      </View>
      <Pressable
        style={{
          justifyContent: "center",
          alignItems: "center",

          width: "330px",
          height: "48px",

          marginTop: "50px",

          borderRadius: "10px",

          backgroundColor: "rgba(56, 111, 252, 1)",
        }}
      >
        <Text style={{ fontSize: "18px", fontWeight: "400", color: "#ffffff" }}>
          Login
        </Text>
      </Pressable>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignContent: "center",

          width: "300px",

          marginTop: "16px",
        }}
      >
        <Text
          style={{
            fontSize: "18px",
            fontWeight: "400",
          }}
        >
          Register
        </Text>
        <Text
          style={{
            fontSize: "18px",
            fontWeight: "400",
          }}
        >
          Forgot Password
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "3px",

          width: "330px",

          marginTop: "32px",
        }}
      >
        <View
          style={{
            flex: 1,
            height: 2,
            border: "2px solid rgba(14, 24, 245, 1)",
          }}
        ></View>
        <Text
          style={{
            fontSize: "18px",
            fontWeight: "400",
          }}
        >
          Other Login Methods
        </Text>
        <View
          style={{
            flex: 1,
            height: 2,
            border: "2px solid rgba(14, 24, 245, 1)",
          }}
        ></View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",

          width: "330px",

          marginTop: "24px",
        }}
      >
        <View
          style={{
            width: "74px",
            height: "74px",

            justifyContent: "center",
            alignItems: "center",

            backgroundColor: "rgba(58, 180, 255, 1)",
            borderRadius: "10px",
          }}
        >
          <FontAwesome5 name="user-plus" size={45} color="white" />
        </View>
        <View
          style={{
            width: "74px",
            height: "74px",

            justifyContent: "center",
            alignItems: "center",

            backgroundColor: "rgba(244, 170, 71, 1)",
            borderRadius: "10px",
          }}
        >
          <FontAwesome5 name="wifi" size={45} color="white" />
        </View>
        <View
          style={{
            width: "74px",
            height: "74px",

            justifyContent: "center",
            alignItems: "center",

            backgroundColor: "rgba(58, 87, 156, 1)",
            borderRadius: "10px",
          }}
        >
          <FontAwesome5 name="facebook-f" size={45} color="white" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",

    padding: "16px",

    width: "330px",
    height: "54px",

    backgroundColor: "rgba(56, 111, 252, 0.1)",

    border: "1px solid #ffffff",
  },
  inputIconLeft: {
    marginLeft: "10px",
    marginRight: "24px",
  },
  input: {
    flex: 1,
    fontSize: "20px",
    fontWeight: "400",
  },
});
