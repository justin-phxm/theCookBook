import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import FoodInterface from "./FoodInterface";

export const DatabaseProvider = () => {
  const addFoodItem = async (foodItem: FoodInterface) => {
    try {
      const docRef = await addDoc(collection(db, "food"), foodItem);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const readDB = async () => {
    const querySnapshot = await getDocs(collection(db, "food"));
    const foodCollection: FoodInterface[] = [];
    querySnapshot.forEach((doc) => {
      foodCollection.push(doc.data());
    });
    // console.log(foodCollection);
    return foodCollection;
  };
  return { readDB, addFoodItem };
};
