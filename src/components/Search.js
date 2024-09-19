import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

const Search = ({ icon, placeholder }) => {
  const [isFocused, setIsFocused] = useState(false); // Trạng thái focus của TextInput
  const [text, setText] = useState(""); // Văn bản được nhập
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flexDirection: "row",
        paddingVertical: 16,
        borderRadius: 20,
        paddingHorizontal: 16,
        marginVertical: 16,

        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 7,
      }}
    >
      <FontAwesome name={icon} size={20} color="#f96163" style={styles.icon} />
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={(text) => setText(text)}
        placeholder={isFocused && text === "" ? "" : placeholder} // Điều kiện ẩn/hiển placeholder
        onFocus={() => setIsFocused(true)} // Khi nhấn vào
        onBlur={() => setIsFocused(false)} // Khi rời khỏi TextInput
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
});
