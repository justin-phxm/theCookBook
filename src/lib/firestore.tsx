import {
  collection,
  doc,
  getDocs,
  deleteDoc,
  setDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import FoodInterface from "./FoodInterface";
import { getStorage, ref, deleteObject } from "firebase/storage";

export const DatabaseProvider = () => {
  const storage = getStorage();

  // const { currentUser } = useAuth();
  const updateDocument = async (foodItem: FoodInterface) => {
    try {
      const foodRef = doc(db, "food", `${foodItem.id}`);
      setDoc(foodRef, foodItem);
    } catch (e) {
      console.error(e);
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
      const imageRef = ref(storage, foodItem.image);
      await deleteObject(imageRef).then(() => {});
    } catch (e) {
      console.error(e);
    }
  };

  return { readDB, updateDocument, deleteFoodItem };
};
