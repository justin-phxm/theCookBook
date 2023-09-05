import { StaticImageData } from "next/image";

export default interface FoodInterface {
  name?: string;
  image?: StaticImageData;
  testimonyText?: string;
}
