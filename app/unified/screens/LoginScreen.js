import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Image,
} from "react-native";
import React, { useState } from "react";
import axios from "axios";
export default function LoginScreen() {
  const [medicalid, setMedicalId] = useState("");
  const [otp, setOtp] = useState("");
  const [mainOtp, setMainOtp] = useState("");

  const [send, setSend] = useState(false);
  const sendOtp = async () => {
    alert("ok");
    async function validateOtp() {
      if (otp == mainOtp) {
        alert("ok");
      } else {
        alert("wrong otp");
      }
    }
    async function getSms(otp, num) {
      console.log(SMS_TOKEN);

      var url = "https://sms.aakashsms.com/sms/v3/send/";
      var data = {
        to: num,
        auth_token:
          "b83027e50e5ebe14738201708e8488ded718f4f139a51dbdd255264af88db89d",
        text: " Hello User Your code is: " + otp + " Regards OnServic",
      };
      console.log(data);
      fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          alert("Error" + error);
        });
    }

    const data = await axios.post(
      "http://172.105.53.40:3000/v1/api/patient/getonepatient",
      {
        p_mid: medicalid,
      }
    );
    if (data.data.data[0].p_contact != null) {
      setSend(true);
      let randNum = (1000 + Math.random() * 9000).toFixed(0);
      setMainOtp(randNum);
      await getSms(randNum, data.data.data[0].p_contact);
    } else {
      alert("Wrong Medical Id");
    }
  };
  return (
    <View style={{ paddingHorizontal: 24, justifyContent: "center", flex: 1 }}>
      <Image
        source={require("../assets/logo.png")}
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
          Enter your Medical Id
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
          onChangeText={(text) => {
            setMedicalId(text);
          }}
          placeholder="Medical Id"
        />
      </View>
      {send ? (
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
            OTP which is sent to your phone number
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
            onChangeText={(text) => setOtp(text)}
            placeholder="Enter your OTP"
          />
        </View>
      ) : null}
      {!send ? (
        <Pressable
          onPress={() => {
            sendOtp();
          }}
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
            <Text> Send Otp</Text>
          </Text>
        </Pressable>
      ) : (
        <Pressable
          onPress={() => {
            validateOtp();
          }}
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
            <Text> Login</Text>
          </Text>
        </Pressable>
      )}

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
