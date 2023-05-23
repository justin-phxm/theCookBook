import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import FoodInterface from "./FoodInterface";
import foodData from "../../public/foodData.json" assert { type: "json" };

export const DatabaseProvider = () => {
  const addFoodItem = async (foodItem: FoodInterface) => {
    try {
      const docRef = await addDoc(collection(db, "food"), foodItem);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const addDB = async () => {
    try {
      //   const docRef = await addDoc(collection(db, "users"), {
      //     first: "Alan",
      //     middle: "Mathison",
      //     last: "Turing",
      //     born: 1912,
      //   });
      //   console.log(foodData[0].name);
      //   console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return { addDB, addFoodItem };
};
