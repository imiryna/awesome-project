import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image } from "react-native";
import { Text } from "./src/components/text";

export default function App() {
  return (
    <View style={styles.container}>
      <Text />
      <Image source={require("./assets/img/adaptive-icon.png")} />
      <Image source={{ uri: "https://www.my-rental-homes.com/blog/wp-content/uploads/2019/03/palma-de-mallorca.jpg" }} style={{ width: 400, height: 400 }} />
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
