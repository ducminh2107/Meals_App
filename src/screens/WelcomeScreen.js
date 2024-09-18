import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: "#fff" }}>
      <Image
        style={{ width: "100%", height: "50%", marginTop: 40 }}
        source={require("../assets/Images/welcome.png")}
      />

      <Text
        style={{
          color: "#f96163",
          fontSize: 22,
          fontWeight: "bold",
          marginTop: 30,
        }}
      >
        60k+ Premium Recipess
      </Text>

      <Text
        style={{
          fontSize: 42,
          color: "#3c444c",
          fontWeight: "bold",
          marginTop: 44,
          marginBottom: 60,
        }}
      >
        Cook Like A Chef
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("HomeMeals")}
        style={{
          backgroundColor: "#f96163",
          borderRadius: 20,
          paddingVertical: 18,
          width: "80%",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 18, color: "#fff", fontWeight: "700" }}>
          Let's Go Welcome
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
