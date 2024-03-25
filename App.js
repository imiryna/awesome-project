import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text Image } from "react-native";
import { Text } from "./src/components/text";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>React Native</Text>
      <Text2 />
      <Image source={require("./assets/img/adaptive-icon.png")} />
      <Image source={{ uri: "https://www.my-rental-homes.com/blog/wp-content/uploads/2019/03/palma-de-mallorca.jpg" }} style={{ width: 400, height: 400 }} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: "#eaeaea"
    },
    title: {
      marginTop: 16,
      paddingVertical: 8,
      borderWidth: 4,
      borderColor: "#20232a",
      borderRadius: 6,
      backgroundColor: "#61dafb",
      color: "#20232a",
      textAlign: "center",
      fontSize: 30,
      fontWeight: "bold"
    }
  });
});
