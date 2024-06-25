import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Sobre from "./screens/Sobre";
import Login from "./screens/Login";
import PrevisaoTempo from "./screens/PrevisaoTempo";

export default function App() {
  return (
    <View style={styles.container}>
      <PrevisaoTempo />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
