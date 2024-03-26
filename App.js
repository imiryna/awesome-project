import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Image, SafeAreaView, FlatList } from "react-native";

import { useState } from "react";
import { useFonts } from "expo-font";

export default function App() {
  const COURSES = [
    {
      id: "45k6-j54k-4jth",
      title: "HTML",
    },
    {
      id: "4116-jfk5-43rh",
      title: "JavaScript",
    },
    {
      id: "4d16-5tt5-4j55",
      title: "React",
    },
    {
      id: "LG16-ant5-0J25",
      title: "React Native",
    },
  ];

  const [colection, setColection] = useState(COURSES);

  const [fontsLoaded] = useFonts({
    "Comic-Sans": require("./src/assets/fonts/ComicSansMS.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={colection} renderItem={({ item }) => <Text>{item.title}</Text>} keyExtractor={(item) => item.id} />
      <Text style={{ fontFamily: "Comic-Sans", fontSize: 30 }}>React Native</Text>

      <Text style={{ fontSize: 30 }}>Platform Default</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
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
    fontWeight: "bold",
  },
});
