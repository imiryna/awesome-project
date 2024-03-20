import { useFonts } from "expo-font";
import { Text } from "react-native";

export const Text = () => {
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("./assets/fonts/Inter-Black.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Text
      styles={{
        fontFamily: "Inter-Black",
        fontSize: 30,
      }}>
      Open up App.js to start working on your app!
    </Text>
  );
};

// const styles = StyleSheet.create();
