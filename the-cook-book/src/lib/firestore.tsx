import {
  collection,
  doc,
  getDocs,
  deleteField,
  deleteDoc,
  setDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import FoodInterface from "./FoodInterface";
import { useAuth } from "@/context/AuthContext";

export const DatabaseProvider = () => {
  // const { currentUser } = useAuth();
  const updateDocument = async (foodItem: FoodInterface) => {
    try {
      const foodRef = doc(db, "food", `${foodItem.id}`);
      setDoc(foodRef, foodItem);

      console.log("Document written with ID: ", foodItem.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const readDB = async () => {
    // if (!currentUser) {
    //   return;
    // }
    const querySnapshot = await getDocs(collection(db, "food"));
    const foodCollection: FoodInterface[] = [];
    querySnapshot.forEach((doc) => {
      foodCollection.push(doc.data());
    });
    return foodCollection;
  };

  const deleteFoodItem = async (foodItem: FoodInterface) => {
    try {
      await deleteDoc(doc(db, "food", `${foodItem.id}`));
      console.log("Document successfully deleted!");
    } catch (e) {
      console.error("Error deleting document: ", e);
    }
  };

  return { readDB, updateDocument, deleteFoodItem };
};
