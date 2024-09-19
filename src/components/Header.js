import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const Header = ({ headerText, headerIcon, onIconPress }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        marginTop: 10,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text style={{ fontWeight: "bold", flex: 1, fontSize: 20 }}>
        {headerText}
      </Text>
      <Pressable onPress={onIconPress}>
        <FontAwesome name={headerIcon} size={24} color="black" />
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
