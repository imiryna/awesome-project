import React from "react";
import { Button, TextInput, Text, View, StyleSheet } from "react-native";
import { Formik } from "formik";

export const RegistrationScreen = () => {
  return (
    <>
      <Text>Реєстрація</Text>
      <Formik initialValues={{ email: "" }} onSubmit={(values) => console.log(values)}>
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Login" onChangeText={handleChange} value={values.login}></TextInput>
            <TextInput style={styles.input} placeholder="Email" onChangeText={handleChange("email")} onBlur={handleBlur("email")} value={values.email} />
            <TextInput style={styles.input} placeholder="Password" onChangeText={handleChange("password")} onBlur={handleBlur("password")} value={values.password} />
            <Button style={styles.button} onPress={handleSubmit} title="Sign up" />
          </View>
        )}
      </Formik>
      <View>
        <Text>You've already got account? </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});
