import foodData from "../../public/foodData.json" assert { type: "json" };

export function getSortedRecipeData() {
  return foodData.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllFoodIds() {
  return foodData.map((foodItem) => {
    return {
      params: {
        id: foodItem.id,
      },
    };
  });
}

export function getPostData(id: string) {
  return foodData.find((obj) => obj.id === id);
}
