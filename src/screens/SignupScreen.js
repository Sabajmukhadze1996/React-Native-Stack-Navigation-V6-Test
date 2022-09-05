import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { useNavigation } from "@react-navigation/native"; // It's special hook


const SignupScreen = () => {
  const navigation = useNavigation() //ანუ ეს ჰუკი იგივეა რაც ქვემოთ არის მოცემული
    return (
        <View style={styles.container}>
          <Text style={{color: "white"}}>SignupScreen</Text>
          <Button title="Go to Login" onPress={() => navigation.navigate("Login")}/>
        </View>
    )
}

export default SignupScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "black",
      alignItems: "center",
      justifyContent: "center"
    }
})