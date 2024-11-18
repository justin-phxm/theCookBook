// @ts-nocheck
/* eslint-disable no-use-before-define */
"use client";
import { useFood } from "@/app/context/FoodContext";
import { Recipe } from "@/lib/types";
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
      setCurrentFoodItem({} as Recipe);
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
      className="flex gap-2"
    >
      <input
        type="text"
        name="prompt"
        className="flex-1 rounded-md border-0 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primaryLight"
        placeholder="Food name"
      />
      <button
        className="rounded bg-green-300 p-2 px-4"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : "Send"}
      </button>
    </form>
  );
}
