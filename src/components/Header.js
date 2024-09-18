import { StyleSheet, Text, View } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
const Header = ({ headerText, headerIcon }) => {
  return (
    <View style={{ flexDirection: "row", marginTop: 10 }}>
      <Text style={{ fontWeight: "bold", flex: 1, fontSize: 20 }}>
        {headerText}
      </Text>
      <FontAwesome name={headerIcon} size={24} color="#f96163" />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
