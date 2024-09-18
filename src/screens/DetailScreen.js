import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const DetailScreen = ({ navigation, route }) => {
  const { item } = route.params;
  console.log(item);

  return (
    <View style={{ backgroundColor: item.colors, flex: 1 }}>
      {/* Icon */}
      <SafeAreaView
        style={{ flexDirection: "row", marginHorizontal: 16, marginTop: 10 }}
      >
        <Pressable style={{ flex: 1 }} onPress={() => navigation.goBack()}>
          <FontAwesome name="arrow-circle-left" size={24} color="white" />
        </Pressable>

        <FontAwesome name="heart-o" size={24} color="white" />
      </SafeAreaView>
      <View
        style={{
          backgroundColor: "#fff",
          flex: 1,
          marginTop: 240,
          borderTopRightRadius: 50,
          borderTopLeftRadius: 50,
          alignItems: "center",
          paddingHorizontal: 16,
        }}
      >
        <View
          style={{
            // backgroundColor: "red",
            height: 300,
            width: 300,
            position: "absolute",
            top: -150,
          }}
        >
          <Image
            source={item.image}
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "contain",
              //   borderRadius: 100,
            }}
          />
        </View>
        {/* Recipes Name */}
        <Text style={{ marginTop: 160, fontSize: 28, fontWeight: "bold" }}>
          {item.name}
        </Text>

        <View style={{ flex: 1 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* Recipes description */}
            <Text style={{ fontSize: 20, marginVertical: 16 }}>
              {item.description}
            </Text>

            {/* Recipe Extra Detail */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                // width: "100%",
              }}
            >
              <View
                style={{
                  backgroundColor: "rgba(255,0,0,0.38)",
                  //   paddingHorizontal: 16,
                  paddingVertical: 20,
                  borderRadius: 15,
                  alignItems: "center",
                  width: 100,
                }}
              >
                <Text style={{ fontSize: 30 }}>⏳</Text>
                <Text style={{ fontSize: 20, fontWeight: 400 }}>
                  {item.time}
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "rgba(135,206,235,0.8)",
                  //   paddingHorizontal: 16,
                  paddingVertical: 20,
                  borderRadius: 15,
                  alignItems: "center",
                  width: 100,
                }}
              >
                <Text style={{ fontSize: 30 }}>🥣</Text>
                <Text style={{ fontSize: 20, fontWeight: 400 }}>
                  {item.difficulty}
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "rgba(255,165,0,0.48)",
                  //   paddingHorizontal: 16,
                  paddingVertical: 20,
                  borderRadius: 15,
                  alignItems: "center",
                  width: 100,
                }}
              >
                <Text style={{ fontSize: 30 }}>🔥</Text>
                <Text style={{ fontSize: 20, fontWeight: 400 }}>
                  {item.calories}
                </Text>
              </View>
            </View>

            {/* Recipe Ingredients */}
            <View style={{ alignSelf: "flex-start", marginVertical: 22 }}>
              <Text
                style={{ fontSize: 22, fontWeight: "600", marginBottom: 6 }}
              >
                Ingredients
              </Text>

              {item.ingredients.map((ingredient, index) => {
                return (
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginVertical: 4,
                    }}
                    key={index}
                  >
                    <View
                      style={{
                        backgroundColor: "red",
                        height: 10,
                        width: 10,
                        borderRadius: 5,
                      }}
                    ></View>
                    <Text style={{ fontSize: 18, marginLeft: 6 }}>
                      {ingredient}
                    </Text>
                  </View>
                );
              })}
            </View>

            {/* Recipe Steps */}
            <View style={{ alignSelf: "flex-start", marginVertical: 22 }}>
              <Text
                style={{ fontSize: 22, fontWeight: "600", marginBottom: 6 }}
              >
                Steps:
              </Text>

              {item.steps.map((step, index) => {
                return (
                  <Text
                    key={index}
                    style={{ fontSize: 18, marginLeft: 6, marginVertical: 6 }}
                  >{`${index + 1} ) ${step}`}</Text>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({});

// import React, { useEffect, useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   Pressable,
//   ScrollView,
// } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import FontAwesome from "@expo/vector-icons/FontAwesome";
// import { fetchMealDetails, colors } from "../constants/constant"; // Thêm import colors

// const DetailScreen = ({ navigation, route }) => {
//   // Lấy dữ liệu món ăn từ route params
//   const { item } = route.params;

//   // Gọi API để lấy chi tiết món ăn
//   // useEffect(() => {
//   //   const getMealDetails = async () => {
//   //     const fetchedMeal = await fetchMealDetails(idMeal);
//   //     setMeal(fetchedMeal);
//   //   };
//   //   getMealDetails();
//   // }, [idMeal]);

//   // if (!meal) {
//   //   return (
//   //     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//   //       <Text>Không tìm thấy món ăn hoặc đang tải dữ liệu...</Text>
//   //     </View>
//   //   );
//   // }

//   return (
//     <View style={{ backgroundColor: colors.COLOR_LIGHT, flex: 1 }}>
//       {/* Header với nút quay lại */}
//       <SafeAreaView
//         style={{ flexDirection: "row", marginHorizontal: 16, marginTop: 10 }}
//       >
//         <Pressable style={{ flex: 1 }} onPress={() => navigation.goBack()}>
//           <FontAwesome name="arrow-circle-left" size={24} color="black" />
//         </Pressable>
//         <FontAwesome name="heart-o" size={24} color="black" />
//       </SafeAreaView>

//       <ScrollView>
//         {/* Hình ảnh món ăn */}
//         <View style={styles.imageContainer}>
//           <Image source={{ uri: item.strMealThumb }} style={styles.image} />
//         </View>

//         {/* Tên món ăn */}
//         <Text style={styles.title}>{item.strCategory}</Text>

//         {/* Mô tả món ăn */}
//         <Text style={styles.description}>{item.strCategoryDescription}</Text>

//         {/* Thành phần món ăn  */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Thành phần:</Text>
//           {item.ingredients &&
//             item.ingredients.map((ingredient, index) => (
//               <Text key={index} style={styles.ingredient}>
//                 {ingredient}
//               </Text>
//             ))}
//         </View>

//         {/* Các bước nấu ăn (giả định) */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Các bước nấu ăn:</Text>
//           {item.steps &&
//             item.steps.map((step, index) => (
//               <Text key={index} style={styles.step}>{`${
//                 index + 1
//               }. ${step}`}</Text>
//             ))}
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// export default DetailScreen;

// const styles = StyleSheet.create({
//   imageContainer: {
//     alignItems: "center",
//     marginTop: 20,
//   },
//   image: {
//     width: 300,
//     height: 300,
//     borderRadius: 150,
//     resizeMode: "cover",
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: "bold",
//     textAlign: "center",
//     marginVertical: 20,
//   },
//   description: {
//     fontSize: 16,
//     color: "#808080",
//     textAlign: "center",
//     marginHorizontal: 20,
//   },
//   section: {
//     marginVertical: 20,
//     marginHorizontal: 20,
//   },
//   sectionTitle: {
//     fontSize: 22,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   ingredient: {
//     fontSize: 16,
//     marginBottom: 5,
//   },
//   step: {
//     fontSize: 16,
//     marginBottom: 10,
//   },
// });
