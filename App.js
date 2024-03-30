import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
// import { useState } from "react";
// import { useFonts } from "expo-font";
import { store } from "./src/Redux/store";
import { Provider } from "react-redux";
import { RegistrationScreen } from "./src/Screens/RegistrationScreen";
import { LoginScreen } from "./src/Screens/LoginScreen";
// import {Pers}

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        {/* <PersistGate persistor={persistor}> */}
        <RegistrationScreen />
        <LoginScreen />
      </SafeAreaView>
    </Provider>
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
