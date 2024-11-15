"use client";
import { useFood } from "@/app/context/FoodContext";
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
      const response = await fetch("/api/geminiPrompt/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: formData,
      });
      const data = await response.json();
      setAIRecipe(data.data);
      setCurrentFoodItem({});
    } catch (e) {
      console.error(e);
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
        className="rounded bg-green-300 p-2"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : "Send"}
      </button>
    </form>
  );
}
