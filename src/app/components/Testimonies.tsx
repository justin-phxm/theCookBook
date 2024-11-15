import TestimonyInterface from "@/lib/TestimonyInterface";
import Testimony from "./testimony";

import testimony0 from "@/testimonyImages/testimonyImage.png";
import testimony1 from "@/testimonyImages/Screen Shot 2022-05-09 at 10.28.png";
import testimony2 from "@/testimonyImages/Screen Shot 2022-05-09 at 10.28 (1).png";
const testimonies: TestimonyInterface[] = [
  {
    name: "Olivia Cole",
    image: testimony0,
    testimonyText: "theCookBook has changed my life. I can now cook anything!",
  },
  {
    name: "Evan White",
    image: testimony1,
    testimonyText: "I didn't know I could cook until I found theCookBook.",
  },
  {
    name: "Jessica Page",
    image: testimony2,
    testimonyText: "I can now cook for my family and they love it!",
  },
];
export default function Testimonies() {
  return (
    <div className="flex flex-col gap-16 text-center text-3xl">
      <div className="flex flex-col gap-4 font-bold">
        <h1 className="text-primary">TESTIMONIALS</h1>
        <h1>Read What Others Have To Say</h1>
      </div>
      <div className="flex w-full flex-row justify-center">
        {testimonies.map((testimony: TestimonyInterface) => (
          <Testimony
            key={testimony.name}
            testimonyImage={testimony.image}
            testimonyName={testimony.name}
            testimonyText={testimony.testimonyText}
          />
        ))}
      </div>
    </div>
  );
}
