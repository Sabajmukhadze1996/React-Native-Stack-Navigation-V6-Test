import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";


const IntroScreen = ({navigation}) => {

    return (
        <View style={styles.container}>
          <Text style={{color: "white", marginBottom: 20}}>IntroScreen</Text>
          <Button onPress={() => navigation.navigate("Login")} title="Go to Login"/>
        </View>
    )
}

export default IntroScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "crimson",
      alignItems: "center",
      justifyContent: "center"
    }
})
