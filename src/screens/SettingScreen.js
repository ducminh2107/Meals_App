import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const SettingScreen = ({ navigation }) => {
  return (
    <View>
      <Text>FavoriteScreen</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Settings")}
      ></TouchableOpacity>
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({});
