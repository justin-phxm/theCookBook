import {
  collection,
  addDoc,
  doc,
  getDocs,
  updateDoc,
  deleteField,
  deleteDoc,
} from "firebase/firestore";
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

  const updateFoodItem = async (foodItem: FoodInterface) => {
    try {
      const foodRef = doc(db, "food", `${foodItem.id}`);
      await updateDoc(foodRef, {
        name: foodItem.name,
        image: foodItem.image,
        servings: foodItem.servings,
        ingredients: foodItem.ingredients,
        instructions: foodItem.instructions,
      });
    } catch (e) {
      console.error("Error updating document: ", e);
    }
  };

  const deleteFoodItem = async (foodItem: FoodInterface) => {
    try {
      await deleteDoc(doc(db, "food", `${foodItem.id}`));
    } catch (e) {
      console.error("Error deleting document: ", e);
    }
  };

  return { readDB, addFoodItem, updateFoodItem, deleteFoodItem };
};
