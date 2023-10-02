import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: "30px",
          fontWeight: "700",

          marginTop: "82px",
          marginBottom: "82px",
          marginLeft: "32px",
        }}
      >
        Login
      </Text>
      <View
        style={{
          gap: "18px",
        }}
      >
        <View style={styles.inputContainer}>
          <FontAwesome
            style={styles.inputIconLeft}
            name="user"
            size={32}
            color="black"
          />
          <TextInput style={styles.input} placeholder="Name" />
        </View>
        <View style={styles.inputContainer}>
          <FontAwesome
            style={styles.inputIconLeft}
            name="lock"
            size={32}
            color="black"
          />
          <TextInput style={styles.input} placeholder="Password" />
          <FontAwesome
            style={styles.inputIconRight}
            name="eye"
            size={32}
            color="black"
          />
        </View>
        <Pressable
          style={{
            justifyContent: "center",
            alignItems: "center",

            width: "330px",
            height: "45px",

            marginTop: "82px",

            backgroundColor: "rgba(6, 0, 0, 1)",
          }}
        >
          <Text
            style={{
              fontSize: "20px",
              fontWeight: "700",

              color: "#ffffff",
            }}
          >
            Login
          </Text>
        </Pressable>
        <Pressable
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: "20px",
              fontWeight: "700",

              color: "rgba(0, 0, 0, 1)",
            }}
          >
            Create Account
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(251, 203, 0, 1)",
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",

    width: "330px",
    height: "54px",

    backgroundColor: "rgba(196, 196, 196, 0.3)",
    border: "1px solid #ffffff",
  },
  inputIconLeft: {
    marginLeft: "10px",
    marginRight: "32px",
  },
  inputIconRight: {
    marginRight: "10px",
  },
  input: {
    flex: 1,
    fontSize: "20px",
    fontWeight: "400",
  },
});
