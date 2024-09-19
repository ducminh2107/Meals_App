// export const fetchCategories = async () => {
//   try {
//     const response = await fetch(
//       "https://www.themealdb.com/api/json/v1/1/categories.php"
//     );
//     const data = await response.json();
//     return data.categories;
//   } catch (error) {
//     console.error("Error fetching categories:", error);
//     return [];
//   }
// };

export const colors = {
  COLOR_PRIMARY: "#F96163",
  COLOR_LIGHT: "#fff",
  COLOR_DARK: "#000",
  COLOR_DARK_ALT: "#262626",
};

export const categories = [
  {
    id: "01",
    category: "Breakfast",
  },
  {
    id: "02",
    category: "Lunch",
  },
  {
    id: "03",
    category: "Dinner",
  },
  {
    id: "04",
    category: "Asian",
  },
  {
    id: "05",
    category: "Italian",
  },
  {
    id: "06",
    category: "Desserts",
  },
  {
    id: "07",
    category: "Vegetarian",
  },
  {
    id: "08",
    category: "Seafood",
  },
];

// const mapContact = contact => {
//   const {
//     name,
//   }
// }

export const recipeList = [
  {
    id: "01",
    name: "Beefsteak",
    image: require("../assets/Images/pngegg (1).png"),
    rating: "4.2",
    ingredients: ["Fresh", "Lime Juice", "Red Onion", "Avocado"],
    time: "40 mins",
    difficulty: "Medium",
    calories: "420 cal",
    colors: "#FF0000",
    description:
      "In this tutorial you will learn how to build smooth UIs in react native using expo.",
    steps: [
      "By the end of this video you will learn how to utilise flatlist to render data",
      "How to add scrollview for a smooth scrolling",
      "How to make two  column layout using flatlist",
      "How to pass data from one screen to another screen in react native and other exciting stuff.",
    ],
  },
  {
    id: "02",
    name: "Hamburger",
    image: require("../assets/Images/pngegg (2).png"),
    rating: "4.2",
    ingredients: ["Fresh", "Lime Juice", "Red Onion", "Avocado"],
    time: "24 mins",
    difficulty: "Medium",
    calories: "420 cal",
    colors: "#91fe89",
    description:
      "In this tutorial you will learn how to build smooth UIs in react native using expo.",
    steps: [
      "By the end of this video you will learn how to utilise flatlist to render data",
      "How to add scrollview for a smooth scrolling",
      "How to make two  column layout using flatlist",
      "How to pass data from one screen to another screen in react native and other exciting stuff.",
    ],
  },
  {
    id: "03",
    name: "Cơm chiên",
    image: require("../assets/Images/pngegg (3).png"),
    rating: "4.6",
    ingredients: ["Fresh", "Lime Juice", "Red Onion", "Avocado"],
    time: "15 mins",
    difficulty: "Medium",
    calories: "420 cal",
    colors: "#FF0000",
    description:
      "In this tutorial you will learn how to build smooth UIs in react native using expo.",
    steps: [
      "By the end of this video you will learn how to utilise flatlist to render data",
      "How to add scrollview for a smooth scrolling",
      "How to make two  column layout using flatlist",
      "How to pass data from one screen to another screen in react native and other exciting stuff.",
    ],
  },
  {
    id: "04",
    name: "Pizza",
    image: require("../assets/Images/pngegg (4).png"),
    rating: "4.9",
    ingredients: ["Fresh", "Lime Juice", "Red Onion", "Avocado"],
    time: "40 mins",
    difficulty: "Medium",
    calories: "420 cal",
    colors: "#f39c12",
    description:
      "In this tutorial you will learn how to build smooth UIs in react native using expo.",
    steps: [
      "By the end of this video you will learn how to utilise flatlist to render data",
      "How to add scrollview for a smooth scrolling",
      "How to make two  column layout using flatlist",
      "How to pass data from one screen to another screen in react native and other exciting stuff.",
    ],
  },
  {
    id: "05",
    name: "Thịt trộn xà lách",
    image: require("../assets/Images/pngegg (5).png"),
    rating: "4.0",
    ingredients: ["Fresh", "Lime Juice", "Red Onion", "Avocado"],
    time: "15 mins",
    difficulty: "Medium",
    calories: "420 cal",
    colors: "#FF0",
    description:
      "In this tutorial you will learn how to build smooth UIs in react native using expo.",
    steps: [
      "By the end of this video you will learn how to utilise flatlist to render data",
      "How to add scrollview for a smooth scrolling",
      "How to make two  column layout using flatlist",
      "How to pass data from one screen to another screen in react native and other exciting stuff.",
    ],
  },
  {
    id: "06",
    name: "Đồ nướng",
    image: require("../assets/Images/pngegg (6).png"),
    rating: "4.3",
    ingredients: ["Fresh", "Lime Juice", "Red Onion", "Avocado"],
    time: "30 mins",
    difficulty: "Medium",
    calories: "420 cal",
    colors: "#165168",
    description:
      "In this tutorial you will learn how to build smooth UIs in react native using expo.",
    steps: [
      "By the end of this video you will learn how to utilise flatlist to render data",
      "How to add scrollview for a smooth scrolling",
      "How to make two  column layout using flatlist",
      "How to pass data from one screen to another screen in react native and other exciting stuff.",
    ],
  },
  {
    id: "07",
    name: "Tuna Tartane",
    image: require("../assets/Images/pngegg (8).png"),
    rating: "4.2",
    ingredients: ["Fresh", "Lime Juice", "Red Onion", "Avocado"],
    time: "40 mins",
    difficulty: "Medium",
    calories: "420 cal",
    colors: "#FF0000",
    description:
      "In this tutorial you will learn how to build smooth UIs in react native using expo.",
    steps: [
      "By the end of this video you will learn how to utilise flatlist to render data",
      "How to add scrollview for a smooth scrolling",
      "How to make two  column layout using flatlist",
      "How to pass data from one screen to another screen in react native and other exciting stuff.",
    ],
  },
  {
    id: "08",
    name: "Tuna Tartane",
    image: require("../assets/Images/pngegg (9).png"),
    rating: "4.2",
    ingredients: ["Fresh", "Lime Juice", "Red Onion", "Avocado"],
    time: "40 mins",
    difficulty: "Medium",
    calories: "420 cal",
    colors: "#813523",
    description:
      "In this tutorial you will learn how to build smooth UIs in react native using expo.",
    steps: [
      "By the end of this video you will learn how to utilise flatlist to render data",
      "How to add scrollview for a smooth scrolling",
      "How to make two  column layout using flatlist",
      "How to pass data from one screen to another screen in react native and other exciting stuff.",
    ],
  },
  {
    id: "09",
    name: "Pizza",
    image: require("../assets/Images/pngegg (4).png"),
    rating: "4.9",
    ingredients: ["Fresh", "Lime Juice", "Red Onion", "Avocado"],
    time: "40 mins",
    difficulty: "Medium",
    calories: "420 cal",
    colors: "#f39c12",
    description:
      "In this tutorial you will learn how to build smooth UIs in react native using expo.",
    steps: [
      "By the end of this video you will learn how to utilise flatlist to render data",
      "How to add scrollview for a smooth scrolling",
      "How to make two  column layout using flatlist",
      "How to pass data from one screen to another screen in react native and other exciting stuff.",
    ],
  },
  {
    id: "10",
    name: "Tuna Tartane",
    image: require("../assets/Images/pngegg (8).png"),
    rating: "4.2",
    ingredients: ["Fresh", "Lime Juice", "Red Onion", "Avocado"],
    time: "40 mins",
    difficulty: "Medium",
    calories: "420 cal",
    colors: "#FF0000",
    description:
      "In this tutorial you will learn how to build smooth UIs in react native using expo.",
    steps: [
      "By the end of this video you will learn how to utilise flatlist to render data",
      "How to add scrollview for a smooth scrolling",
      "How to make two  column layout using flatlist",
      "How to pass data from one screen to another screen in react native and other exciting stuff.",
    ],
  },
  {
    id: "11",
    name: "Beefsteak",
    image: require("../assets/Images/pngegg (1).png"),
    rating: "4.2",
    ingredients: ["Fresh", "Lime Juice", "Red Onion", "Avocado"],
    time: "40 mins",
    difficulty: "Medium",
    calories: "420 cal",
    colors: "#FF0000",
    description:
      "In this tutorial you will learn how to build smooth UIs in react native using expo.",
    steps: [
      "By the end of this video you will learn how to utilise flatlist to render data",
      "How to add scrollview for a smooth scrolling",
      "How to make two  column layout using flatlist",
      "How to pass data from one screen to another screen in react native and other exciting stuff.",
    ],
  },
  {
    id: "12",
    name: "Thịt trộn xà lách",
    image: require("../assets/Images/pngegg (5).png"),
    rating: "4.0",
    ingredients: ["Fresh", "Lime Juice", "Red Onion", "Avocado"],
    time: "15 mins",
    difficulty: "Medium",
    calories: "420 cal",
    colors: "#FF0",
    description:
      "In this tutorial you will learn how to build smooth UIs in react native using expo.",
    steps: [
      "By the end of this video you will learn how to utilise flatlist to render data",
      "How to add scrollview for a smooth scrolling",
      "How to make two  column layout using flatlist",
      "How to pass data from one screen to another screen in react native and other exciting stuff.",
    ],
  },
  {
    id: "13",
    name: "Đồ nướng",
    image: require("../assets/Images/pngegg (6).png"),
    rating: "4.3",
    ingredients: ["Fresh", "Lime Juice", "Red Onion", "Avocado"],
    time: "30 mins",
    difficulty: "Medium",
    calories: "420 cal",
    colors: "#165168",
    description:
      "In this tutorial you will learn how to build smooth UIs in react native using expo.",
    steps: [
      "By the end of this video you will learn how to utilise flatlist to render data",
      "How to add scrollview for a smooth scrolling",
      "How to make two  column layout using flatlist",
      "How to pass data from one screen to another screen in react native and other exciting stuff.",
    ],
  },
  {
    id: "14",
    name: "Tuna Tartane",
    image: require("../assets/Images/pngegg (8).png"),
    rating: "4.2",
    ingredients: ["Fresh", "Lime Juice", "Red Onion", "Avocado"],
    time: "40 mins",
    difficulty: "Medium",
    calories: "420 cal",
    colors: "#FF0000",
    description:
      "In this tutorial you will learn how to build smooth UIs in react native using expo.",
    steps: [
      "By the end of this video you will learn how to utilise flatlist to render data",
      "How to add scrollview for a smooth scrolling",
      "How to make two  column layout using flatlist",
      "How to pass data from one screen to another screen in react native and other exciting stuff.",
    ],
  },
];

// Hàm fetch dữ liệu từ API
// export const fetchCategories = async () => {
//   try {
//     const response = await fetch(
//       "https://www.themealdb.com/api/json/v1/1/categories.php"
//     );
//     const data = await response.json();
//     return data.categories;
//   } catch (error) {
//     console.error("Error fetching categories:", error);
//     return [];
//   }
// };
// export const fetchSeafoodMeals = async () => {
//   try {
//     const response = await fetch(
//       "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
//     );
//     const data = await response.json();
//     return data.meals;
//   } catch (error) {
//     console.error("Error fetching seafood meals:", error);
//     return [];
//   }
// };
// export const fetchMealDetails = async (idMeal) => {
//   try {
//     const response = await fetch(
//       `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
//     );
//     const data = await response.json();

//     if (!data.meals || data.meals.length === 0) {
//       console.error("No meal data found for id:", idMeal);
//       return null; // Trả về null nếu không tìm thấy dữ liệu món ăn
//     }

//     return data.meals[0]; // Trả về chi tiết của món ăn đầu tiên
//   } catch (error) {
//     console.error("Error fetching meal details:", error);
//     return null;
//   }
// };

// // Định nghĩa màu sắc
// export const colors = {
//   COLOR_PRIMARY: "#F96163",
//   COLOR_LIGHT: "#fff",
//   COLOR_DARK: "#000",
//   COLOR_DARK_ALT: "#262626",
// };
