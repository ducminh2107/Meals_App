import {
  StyleSheet,
  Text,
  View,
  Alert,
  ToastAndroid,
  Platform,
} from "react-native";
import React from "react";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import Search from "../components/Search";
import Categories from "../components/Categories";
import CategoriesCard from "../components/CategoriesCard";

const HomeScreen = () => {
  // Hàm xử lý khi nhấn vào icon thông báo
  const handleNotificationPress = () => {
    const message = "Chào mừng bạn đến với App Meals của tôi";
    if (Platform.OS === "android") {
      ToastAndroid.show(message, ToastAndroid.SHORT);
    } else {
      Alert.alert(message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Render header */}
      <Header
        headerText="Xin chào, Minh app Meals"
        headerIcon="bell-o"
        onIconPress={handleNotificationPress} // Truyền hàm xử lý vào Header
      />

      {/* Search */}
      <Search icon="search" placeholder="Hãy nhập tên món ăn vào đây ..." />

      {/* Categories */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <Categories />
      </View>

      {/* Recipes */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recipes</Text>
        <CategoriesCard />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  section: {
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
