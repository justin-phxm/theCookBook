import { Button } from "flowbite-react";

export default function createRecipe() {
  return (
    <>
      <div className="flex">
        <Button gradientDuoTone="tealToLime" href="/#" pill={true} size="xl">
          CREATE RECIPES
        </Button>

        <Button
          outline={true}
          color="light"
          pill={true}
          size="xl"
          className="ml-2"
          href="/#"
        >
          VIEW RECIPES
        </Button>
      </div>
    </>
  );
}
