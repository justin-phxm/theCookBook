import {
  collection,
  doc,
  getDocs,
  deleteDoc,
  setDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { Recipe } from "./types";
import { getStorage, ref, deleteObject } from "firebase/storage";

export const DatabaseProvider = () => {
  const storage = getStorage();

  const updateDocument = async (foodItem: Recipe) => {
    try {
      const foodRef = doc(db, "food", `${foodItem.id}`);
      setDoc(foodRef, foodItem);
    } catch (e) {
      console.error(e);
    }
  };

  const readDB = async () => {
    const querySnapshot = await getDocs(collection(db, "food"));
    const foodCollection: Recipe[] = [];
    querySnapshot.forEach((doc) => {
      foodCollection.push(doc.data() as Recipe);
    });
    return foodCollection;
  };

  const deleteFoodItem = async (foodItem: Recipe) => {
    try {
      await deleteDoc(doc(db, "food", `${foodItem.id}`));
      const imageRef = ref(storage, foodItem.image);
      await deleteObject(imageRef).then(() => {});
    } catch (e) {
      console.error(e);
    }
  };

  return { readDB, updateDocument, deleteFoodItem };
};
