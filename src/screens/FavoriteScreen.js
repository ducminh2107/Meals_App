import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const FavoriteScreen = ({ navigation }) => {
  return (
    <View>
      <Text>FavoriteScreen</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Favorites")}
      ></TouchableOpacity>
    </View>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({});
