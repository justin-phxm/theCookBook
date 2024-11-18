/* eslint-disable no-use-before-define */

"use client";

import { useFood } from "@/app/context/FoodContext";
// import { ref, uploadBytes
//   } from "@firebase/storage";
import { useState } from "react";
// import { storage } from "../../../firebase";
// import { DatabaseProvider } from "@/lib/firestore";

export default function SaveRecipeButton() {
  const {
    editMode,
    setEditMode,
    // currentFoodItem,
    //  selectedImage
  } = useFood();
  const [loading, setLoading] = useState(false);
  // const imageAddress = "foodImages/" + currentFoodItem.id;
  // const storageRef = ref(storage, imageAddress);
  // const { updateDocument } = DatabaseProvider();

  const saveHandler = async () => {
    if (loading || !editMode) return;
    setLoading(true);
    // if (selectedImage) {
    //   await uploadBytes(storageRef, selectedImage);
    // }
    // await updateDocument(currentFoodItem);
    setLoading(false);
    setEditMode(!editMode);
  };

  return (
    <button
      onClick={saveHandler}
      className="p-2 transition-all hover:rounded-md hover:bg-slate-300"
    >
      {loading ? "Saving..." : "Save"}
    </button>
  );
}
