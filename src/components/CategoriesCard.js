import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { colors, recipeList } from "../constants/constant";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
const CategoriesCard = () => {
  const navigation = useNavigation();
  return (
    <View>
      <FlatList
        data={recipeList}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigation.navigate("DetailMeals", { item: item })}
            style={{
              backgroundColor: colors.COLOR_LIGHT,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.1,
              shadowRadius: 7,
              marginVertical: 16,
              borderRadius: 40,
              alignItems: "center",
              paddingHorizontal: 8,
              paddingVertical: 26,
            }}
          >
            <Image
              source={item.image}
              style={{ width: 150, height: 150, resizeMode: "center" }}
            />
            <Text>{item.name}</Text>
            <View style={{ flexDirection: "row", marginTop: 8 }}>
              <Text>{item.time}</Text>
              <Text> | </Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ marginRight: 4 }}>{item.rating}</Text>
                <FontAwesome
                  name="star"
                  size={16}
                  color={colors.COLOR_PRIMARY}
                />
              </View>
            </View>
          </Pressable>
        )}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        showsVerticalScrollIndicator={false}
      ></FlatList>
    </View>
  );
};

export default CategoriesCard;

const styles = StyleSheet.create({});

// import React, { useEffect, useState } from "react";
// import {
//   FlatList,
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   Pressable,
// } from "react-native";
// import { fetchSeafoodMeals, colors } from "../constants/constant";
// import FontAwesome from "@expo/vector-icons/FontAwesome";
// import { useNavigation } from "@react-navigation/native";

// const CategoriesCard = () => {
//   const [meals, setMeals] = useState([]);
//   const navigation = useNavigation();

//   // Gọi API để lấy dữ liệu từ API khi component được render
//   useEffect(() => {
//     const getMeals = async () => {
//       const fetchedMeals = await fetchSeafoodMeals();
//       setMeals(fetchedMeals);
//     };
//     getMeals();
//   }, []);

//   return (
//     <View>
//       <FlatList
//         data={meals}
//         renderItem={({ item }) => (
//           <Pressable
//             //   onPress={() => navigation.navigate("DetailMeals", { item: item })}
//             //   style={styles.cardContainer}
//             // >
//             //   <Image
//             //     source={{ uri: item.strCategoryThumb }}
//             //     style={styles.image}
//             //   />
//             //   <Text style={styles.title}>{item.strCategory}</Text>
//             //   <Text style={styles.description}>
//             //     {item.strCategoryDescription.length > 100
//             //       ? `${item.strCategoryDescription.substring(0, 100)}...`
//             //       : item.strCategoryDescription}
//             //   </Text>
//             onPress={() => navigation.navigate("DetailMeals", { item: item })}
//             style={styles.cardContainer}
//           >
//             <Image source={{ uri: item.strMealThumb }} style={styles.image} />
//             <Text style={styles.title}>{item.strMeal}</Text>
//           </Pressable>
//         )}
//         numColumns={2}
//         columnWrapperStyle={styles.columnWrapper}
//         showsVerticalScrollIndicator={false}
//       />
//     </View>
//   );
// };

// export default CategoriesCard;

// const styles = StyleSheet.create({
//   cardContainer: {
//     backgroundColor: colors.COLOR_LIGHT,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.1,
//     shadowRadius: 7,
//     marginVertical: 16,
//     borderRadius: 20,
//     alignItems: "center",
//     paddingHorizontal: 8,
//     paddingVertical: 16,
//     flex: 1,
//     margin: 10,
//   },
//   image: {
//     width: 150,
//     height: 150,
//     borderRadius: 10,
//     resizeMode: "cover",
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginTop: 10,
//   },
//   description: {
//     fontSize: 14,
//     color: "#808080",
//     textAlign: "center",
//     marginTop: 8,
//   },
//   columnWrapper: {
//     justifyContent: "space-between",
//   },
// });
