import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ForgotPassword = () => {
    return (
        <View style={styles.container}>
          <Text style={{color: "black"}}>ForgotPassword</Text>
        </View>
    )
}

export default ForgotPassword;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "orange",
      alignItems: "center",
      justifyContent: "center"
    }
})