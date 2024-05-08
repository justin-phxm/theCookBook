import { useFood } from "@/context/FoodContext";
import { FormEvent, useState } from "react";

export default function ChatGPTInput() {
  const [isLoading, setIsLoading] = useState(false);
  const { setAIRecipe, setCurrentFoodItem } = useFood();
  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    try {
      const prompt = (e.target as HTMLFormElement)["prompt"].value;
      const formData = JSON.stringify({ prompt });
      const response = await fetch("/api/geminiPrompt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: formData,
      });
      const data = await response.json();
      console.log(data.data);
      setAIRecipe(data.data);
      setCurrentFoodItem({});
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <form
      onSubmit={onSubmit}
      autoComplete="off"
      spellCheck="false"
      autoCorrect="off"
      autoCapitalize="off"
    >
      <input type="text" name="prompt" placeholder="Food name" />
      <button
        className="rounded p-2 bg-green-300"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : "Send"}
      </button>
    </form>
  );
}
