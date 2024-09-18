import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import Search from "../components/Search";
import Categories from "../components/Categories";
import CategoriesCard from "../components/CategoriesCard";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Render header */}
      <Header headerText="Xin chào, Minh app Meals" headerIcon="bell-o" />

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
