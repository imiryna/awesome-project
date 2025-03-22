import { useState } from "react";
      
import { Button, TextInput, Text, View, Image, ImageBackground, StyleSheet, SafeAreaView } from "react-native";
import { Formik } from "formik";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { url } from "inspector";

const image = {source: 'src/assets/photoBG.png'};

export const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <SafeAreaView>
     <ImageBackground source={image} resizeMode="cover" style={styles.image}></ImageBackground>
       <Image style={styles.tinyLogo} source={require("@expo/snack-static/react-native-logo.png")} />
      <Text>Реєстрація</Text>
      <Formik initialValues={{ email: "", password: "" }} onSubmit={(values) => console.log(values)}>
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Email" onChangeText={handleChange("email")} onBlur={handleBlur("email")} value={values.email} />
            <TextInput style={styles.input} placeholder="Password" secureTextEntry={!showPassword} onChangeText={handleChange(setPassword)} onBlur={handleBlur("password")} value={values.password} />
            <MaterialCommunityIcons name={showPassword ? "eye-off" : "eye"} size={24} color="#aaa" style={styles.icon} onPress={toggleShowPassword} />
            <Button style={styles.button} onPress={handleSubmit} title="Sign up" />
          </View>
        )}
      </Formik>
      <View>
        <Text>You've no account yet? Sign up </Text>
      </View>
     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "column",

    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,

    backgroundColor: "rgb(255, 255, 255)",
    gap: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  input: {
    width: 343,
    height: 50,

    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgb(232, 232, 232)",
    borderRadius: 8,
    padding: 16,
  },
  icon: {
    marginLeft: 10,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  
  button: {
    width: 343,
    height: 51,
    display: " flex",
    justifyContent: "flexStart",
    alignItems: " center",
    paddingTop: 16,
    paddingLeft: 32,
    paddingRight: 16,
    paddingBottom: 32,

    borderRadius: 100,
    backgroundColor: "rgb(255, 108, 0)",

    /* sign up */
    text: { color: "rgb(255, 255, 255)", fontSize: 16, fontWeight: 400, lineHeight: 1.2, letterSpacing: 0.25, textAlign: "center" },
  },
  tinyLogo: {
    position: "absolute",
    width: 120,
    height: 120,
    borderRadius: 16,
background: url(photo-1479936343636-73cdc5aae0c3);
  },
});
