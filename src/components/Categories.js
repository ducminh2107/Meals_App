import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { categories, colors } from "../constants/constant";
import { TouchableOpacity } from "react-native";
const Categories = () => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => {
          return (
            <View
              style={{
                backgroundColor:
                  index === 0 ? colors.COLOR_PRIMARY : colors.COLOR_LIGHT,
                marginRight: 36,
                borderRadius: 8,
                paddingHorizontal: 16,
                paddingVertical: 10,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 7,
                marginVertical: 16,
              }}
            >
              <TouchableOpacity>
                <Text
                  style={{
                    color: index === 0 && colors.COLOR_LIGHT,
                    fontSize: 18,
                  }}
                >
                  {category.category}
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({});

// import React, { useEffect, useState } from "react";
// import {
//   ScrollView,
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
// } from "react-native";
// import { fetchCategories, colors } from "../constants/constant";

// const Categories = () => {
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     const getCategories = async () => {
//       const fetchedCategories = await fetchCategories();
//       setCategories(fetchedCategories);
//     };
//     getCategories();
//   }, []);

//   return (
//     <View>
//       <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//         {categories.map((category, index) => {
//           return (
//             <View
//               key={category.idCategory}
//               style={{
//                 backgroundColor:
//                   index === 0 ? colors.COLOR_PRIMARY : colors.COLOR_LIGHT,
//                 marginRight: 36,
//                 borderRadius: 8,
//                 paddingHorizontal: 16,
//                 paddingVertical: 10,
//                 shadowColor: "#000",
//                 shadowOffset: { width: 0, height: 4 },
//                 shadowOpacity: 0.1,
//                 shadowRadius: 7,
//                 marginVertical: 16,
//               }}
//             >
//               <TouchableOpacity>
//                 <Text
//                   style={{
//                     color: index === 0 ? colors.COLOR_LIGHT : colors.COLOR_DARK,
//                     fontSize: 18,
//                   }}
//                 >
//                   {category.strCategory}
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           );
//         })}
//       </ScrollView>
//     </View>
//   );
// };

// export default Categories;

// const styles = StyleSheet.create({});
