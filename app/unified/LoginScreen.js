import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Image,
} from "react-native";
import React from "react";

export default function LoginScreen() {
  return (
    <View style={{ paddingHorizontal: 24, justifyContent: "center", flex: 1 }}>
      <Image
        source={require("./assets/logo.png")}
        style={{
          height: 200,
          width: 200,
          objectFit: "cover",
          alignSelf: "center",
        }}
      />
      <View
        style={{
          marginTop: 24,
        }}
      >
        <Text
          style={{
            fontFamily: "Regular",
          }}
        >
          Phone Number
        </Text>
        <TextInput
          keyboardType="numeric"
          maxLength={10}
          style={{
            fontFamily: "Regular",
            width: "100%",
            marginTop: 8,
            // borderWidth: 1,
            padding: 16,
            borderRadius: 4,
            height: 50,
            backgroundColor: "#F5F5F9",
          }}
          placeholder="Phone Number"
        />
      </View>

      <View
        style={{
          marginTop: 24,
        }}
      >
        <Text
          style={{
            fontFamily: "Regular",
          }}
        >
          Phone Number
        </Text>
        <TextInput
          keyboardType="numeric"
          maxLength={10}
          style={{
            fontFamily: "Regular",
            width: "100%",
            marginTop: 8,
            // borderWidth: 1,
            padding: 16,
            borderRadius: 4,
            height: 50,
            backgroundColor: "#F5F5F9",
          }}
          placeholder="Phone Number"
        />
      </View>
      <Pressable
        style={{
          borderColor: "#0197F6",
          borderWidth: 1,
          justifyContent: "center",
          height: 50,
          backgroundColor: "#0197F6",
          marginTop: 24,
          borderRadius: 8,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
            textAlignVertical: "center",
          }}
        >
          Login
        </Text>
      </Pressable>
      {/* {error1 ? (
        <Text
          style={{
            fontFamily: "Regular",

            color: "red",
          }}
        >
          {error1}
        </Text>
      ) : null} */}
    </View>
  );
}
const styles = StyleSheet.create({});
