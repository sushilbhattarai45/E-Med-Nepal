import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import LoginScreen from "./screens/LoginScreen.js";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <LoginScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
