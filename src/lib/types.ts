import { StaticImageData } from "next/image";
export interface Testimony {
  name?: string;
  image?: StaticImageData;
  testimonyText?: string;
}
export interface Recipe {
  name: string;
  image?: string;
  id: string;
  summary?: string;
  color?: "red" | "blue" | "green" | "yellow" | "purple" | "pink";
  ingredients?: string[];
  instructions?: string[];
  tags?: string[];
  servings?: number;
  imageURL?: string;
  author?: string;
}
