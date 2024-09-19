import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import WelcomeSreen from "../screens/WelcomeScreen";
import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import SettingScreen from "../screens/SettingScreen";

// Stack Navigator for meals
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = ({ addFavorite, favorites, removeFavorite }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Favorite") {
            iconName = "heart";
          } else if (route.name === "Settings") {
            iconName = "settings";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#F96163", // Màu sắc của tab đang hoạt động
        tabBarInactiveTintColor: "gray", // Màu sắc của tab không hoạt động
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home">
        {(props) => <HomeScreen {...props} addFavorite={addFavorite} />}
      </Tab.Screen>
      <Tab.Screen name="Favorite">
        {(props) => (
          <FavoriteScreen
            {...props}
            favorites={favorites}
            removeFavorite={removeFavorite}
          />
        )}
      </Tab.Screen>
      <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  );
};

const MealsNavigator = () => {
  // return (
  //   <NavigationContainer>
  //     <Stack.Navigator screenOptions={{ headerShown: false }}>
  //       {/* <Stack.Screen name="Welcome" component={WelcomeSreen} /> */}
  //       <Stack.Screen name="HomeMeals" component={HomeScreen} />
  //       <Stack.Screen name="DetailMeals" component={DetailScreen} />
  //     </Stack.Navigator>
  //   </NavigationContainer>
  // );
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Tab Navigator cho các màn hình chính */}
        <Stack.Screen
          name="HomeTabs"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        {/* Màn hình chi tiết */}
        <Stack.Screen name="DetailMeals" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MealsNavigator;

const styles = StyleSheet.create({});
