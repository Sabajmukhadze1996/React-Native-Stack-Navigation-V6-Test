import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const LoginScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
          <Text style={{color: "white"}}>LoginScreen</Text>
          <View style={{height: 10}} />
          <Button onPress={() => navigation.navigate("Forgot")} title="Forgot Password" />
          <View style={{height: 10}} />
          <Button onPress={() => navigation.navigate("Signup")} title="Signup"/>
        </View>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "green",
      alignItems: "center",
      justifyContent: "center"
    }
})