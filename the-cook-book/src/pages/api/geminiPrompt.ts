import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const MODEL_NAME = "gemini-1.5-pro-latest";
const API_KEY = process.env.GEMINI_API_KEY as string;

type ResponseData = {
  data: string;
};
async function runChat(FOOD: string) {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 1,
    topK: 0,
    topP: 0.95,
    maxOutputTokens: 8192,
    response_mime_type: "application/json",
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  const chat = model.startChat({
    generationConfig,
    safetySettings,
    history: [
      {
        role: "user",
        parts: [{ text: "write me a recipe for a hamburger" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "## Juicy Homemade Hamburgers\n\nThis recipe is for classic, delicious hamburgers that you can customize with your favorite toppings. \n\n**Ingredients:**\n\n* 1 pound ground beef (80/20 chuck is recommended)\n* 1/2 teaspoon salt\n* 1/4 teaspoon black pepper\n* 1/4 teaspoon garlic powder (optional)\n* 4 hamburger buns\n* Toppings of your choice (lettuce, tomato, onion, cheese, pickles, ketchup, mustard, etc.)\n\n**Instructions:**\n\n1. **Form the patties:** Gently mix the ground beef with salt, pepper, and garlic powder (if using) in a bowl. Avoid overmixing, as it can make the burgers tough. Divide the mixture into 4 equal portions and form them into patties, slightly larger than the size of your buns, as they will shrink when cooked. Use your thumb to make a small indentation in the center of each patty; this helps them cook evenly and prevents them from bulging in the middle. \n2. **Cook the patties:** Preheat your grill, grill pan, or skillet over medium heat. Cook the patties for about 4-5 minutes per side, or until they reach your desired level of doneness. Use a meat thermometer to ensure the internal temperature reaches 160°F for well-done.\n3. **Toast the buns (optional):** While the patties are cooking, you can lightly toast the buns on the grill or in a toaster for added flavor and texture. \n4. **Assemble the burgers:** Place the cooked patties on the toasted buns and add your favorite toppings. \n\n**Tips:**\n\n* For extra flavor, you can add chopped onions, Worcestershire sauce, or your favorite herbs and spices to the ground beef mixture.\n* If you're grilling the burgers, be sure to oil the grill grates to prevent sticking.\n* Let the cooked patties rest for a few minutes before serving to allow the juices to redistribute.\n* Get creative with your toppings! Some other ideas include avocado, bacon, fried egg, sautéed mushrooms, or different types of cheese.\n\n**Enjoy your delicious homemade hamburgers!**",
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: "Can you write me a recipe for french onion soup" }],
      },
      {
        role: "model",
        parts: [
          {
            text: '[\n  {\n    "name": "Classic French Onion Soup",\n    "ingredients": [\n      {\n        "quantity": "4",\n        "name": "large yellow onions",\n        "preparation": "thinly sliced"\n      },\n      {\n        "quantity": "4 tablespoons",\n        "name": "unsalted butter"\n      },\n      {\n        "quantity": "1 tablespoon",\n        "name": "olive oil"\n      },\n      {\n        "quantity": "1 teaspoon",\n        "name": "salt"\n      },\n      {\n        "quantity": "1/2 teaspoon",\n        "name": "black pepper"\n      },\n      {\n        "quantity": "1/4 cup",\n        "name": "dry white wine (optional)"\n      },\n      {\n        "quantity": "8 cups",\n        "name": "beef broth"\n      },\n      {\n        "quantity": "1 sprig",\n        "name": "fresh thyme"\n      },\n      {\n        "quantity": "2 bay leaves"\n      },\n      {\n        "quantity": "1 baguette",\n        "preparation": "sliced into thick rounds"\n      },\n      {\n        "quantity": "1 cup",\n        "name": "grated Gruyère cheese"\n      }\n    ],\n    "instructions": [\n      "Melt butter with olive oil in a large pot or Dutch oven over medium heat.",\n      "Add the sliced onions, salt, and pepper. Cook, stirring occasionally, for about 45-60 minutes, until the onions are deeply caramelized and golden brown. Be patient, as this step is crucial for developing the rich flavor of the soup.",\n      "If using white wine, add it to the pot and cook for a few minutes, scraping up any browned bits from the bottom.",\n      "Add the beef broth, thyme sprig, and bay leaves. Bring to a simmer and cook for about 30 minutes to allow the flavors to meld.",\n      "Preheat your oven to 375°F (190°C).",\n      "Place the baguette slices on a baking sheet and toast in the oven for a few minutes until lightly golden and crisp.",\n      "To serve, ladle the soup into oven-safe bowls. Top each bowl with a few slices of toasted baguette and a generous amount of grated Gruyère cheese.",\n      "Place the bowls under the broiler for a few minutes, until the cheese is melted and bubbly.",\n      "Serve immediately and enjoy!"\n    ],\n    "tips": [\n      "You can substitute vegetable broth for beef broth to make a vegetarian version of the soup.",\n      "For a richer flavor, you can add a splash of cognac or brandy along with the white wine.",\n      "If you don\'t have Gruyère cheese, you can use Swiss cheese or another type of melting cheese.",\n      "The key to this soup is to caramelize the onions slowly and patiently. Don\'t rush the process!"\n    ]\n  }\n]',
          },
        ],
      },
      {
        role: "user",
        parts: [
          {
            text: "write me a recipe for a hamburger and include the name, ingredients, instructions, tips, and a description?",
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: '{\n  "name": "Ultimate Juicy Burger",\n  "description": "This recipe delivers a classic burger experience with juicy, flavorful patties cooked to perfection and customizable with your favorite toppings. The secret lies in the simple seasoning and the perfect blend of ground beef for a satisfyingly delicious burger.",\n  "ingredients": [\n    {\n      "quantity": "1 1/2 pounds",\n      "name": "ground beef (80/20 chuck blend)",\n      "description": "The fat content ensures juiciness and flavor"\n    },\n    {\n      "quantity": "1 teaspoon",\n      "name": "kosher salt"\n    },\n    {\n      "quantity": "1/2 teaspoon",\n      "name": "freshly ground black pepper"\n    },\n    {\n      "quantity": "1/4 teaspoon",\n      "name": "garlic powder"\n    },\n    {\n      "quantity": "4",\n      "name": "hamburger buns",\n      "description": "Brioche or sesame seed buns recommended"\n    },\n    {\n      "quantity": "as needed",\n      "name": "Toppings of your choice",\n      "description": "Lettuce, tomato, onion, cheese, pickles, ketchup, mustard, etc."\n    }\n  ],\n  "instructions": [\n    {\n      "step": 1,\n      "description": "Gently mix ground beef, salt, pepper, and garlic powder in a bowl. Avoid overmixing."\n    },\n    {\n      "step": 2,\n      "description": "Divide mixture into 4 equal portions and form patties, slightly larger than bun size."\n    },\n    {\n      "step": 3,\n      "description": "Make a thumbprint indentation in the center of each patty for even cooking."\n    },\n    {\n      "step": 4,\n      "description": "Preheat grill or pan over medium heat. Cook patties for 4-5 minutes per side, or until desired doneness."\n    },\n    {\n      "step": 5,\n      "description": "Toast buns (optional) while patties cook."\n    },\n    {\n      "step": 6,\n      "description": "Place patties on buns and add desired toppings."\n    }\n  ],\n  "tips": [\n    "For extra flavor, add chopped onions or Worcestershire sauce to the beef mixture.",\n    "Use a meat thermometer for precise cooking; 160°F for well-done.",\n    "Let patties rest before serving to retain juiciness.",\n    "Experiment with different cheeses, sauces, and toppings for variety."\n  ]\n}',
          },
        ],
      },
      {
        role: "user",
        parts: [
          {
            text: "write me a recipe for a hamburger and include the name, ingredients, instructions, tips, and a description? output in JSON",
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: '```json\n{\n  "name": "The Perfect Backyard Burger",\n  "description": "This recipe captures the essence of a classic American burger, with its juicy beef patty, simple seasonings, and endless topping possibilities. Perfect for a backyard barbecue or a casual weeknight meal, it\'s sure to become a family favorite.",\n  "ingredients": [\n    {\n      "quantity": "1 pound",\n      "name": "ground beef (80/20 chuck blend)",\n      "description": "Provides the ideal balance of flavor and juiciness."\n    },\n    {\n      "quantity": "1/2 teaspoon",\n      "name": "kosher salt"\n    },\n    {\n      "quantity": "1/4 teaspoon",\n      "name": "black pepper"\n    },\n    {\n      "quantity": "4",\n      "name": "hamburger buns",\n      "description": "Choose your favorite type, such as sesame seed, brioche, or whole wheat."\n    },\n    {\n      "quantity": "as needed",\n      "name": "Toppings",\n      "description": "Lettuce, tomato, onion, cheese, pickles, ketchup, mustard, mayo, etc."\n    }\n  ],\n  "instructions": [\n    {\n      "step": 1,\n      "description": "In a large bowl, gently combine the ground beef with salt and pepper. Avoid overmixing, as this can make the burgers tough." \n    },\n    {\n      "step": 2,\n      "description": "Divide the mixture into 4 equal portions and shape them into patties slightly larger than the size of your buns. This accounts for shrinkage during cooking."\n    },\n    {\n      "step": 3,\n      "description": "Make a small indentation in the center of each patty using your thumb. This helps the burgers cook evenly and prevents them from bulging in the middle."\n    },\n    {\n      "step": 4,\n      "description": "Preheat your grill or a grill pan over medium heat. Cook the patties for about 4-5 minutes per side, or until they reach your desired level of doneness. Use a meat thermometer to ensure the internal temperature reaches 160°F for well-done."\n    },\n    {\n      "step": 5,\n      "description": "While the burgers are cooking, lightly toast the buns if desired."\n    },\n    {\n      "step": 6,\n      "description": "Assemble the burgers by placing the cooked patties on the toasted buns and adding your favorite toppings."\n    }\n  ],\n  "tips": [\n    "For additional flavor, you can mix in chopped onions, Worcestershire sauce, or your favorite herbs and spices with the ground beef.",\n    "To prevent sticking, make sure your grill grates or pan are well-oiled before cooking the burgers.",\n    "Let the cooked patties rest for a few minutes before serving to allow the juices to redistribute, resulting in a more flavorful burger."\n    "Get creative with your toppings! Explore different cheeses, sauces, and vegetables to discover your ultimate burger combination."\n  ]\n}\n```',
          },
        ],
      },
      {
        role: "user",
        parts: [
          {
            text: "write me a recipe for Lasagna. Follow this schema:\ntype Ingredient = {\n  quantity: string;\n  name: string;\n  description?: string;\n};\ntype Instruction = {\n  step: number;\n  description: string;\n};\ntype Tip = {\n  tip: string;\n  description: string;\n};\nexport type Recipe = {\n  name: string;\n  description: string;\n  ingredients: Ingredient[];\n  instructions: Instruction[];\n  tips: Tip[];\n};",
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: '```typescript\nconst recipe: Recipe = {\n  name: "Classic Lasagna",\n  description: "A comforting and flavorful Italian dish with layers of pasta, rich meat sauce, creamy béchamel, and melted cheese.",\n  ingredients: [\n    {\n      quantity: "1 pound",\n      name: "Lasagna noodles",\n      description: "Preferably no-boil lasagna noodles for convenience."\n    },\n    {\n      quantity: "1 pound",\n      name: "Ground beef",\n      description: "You can also use a mixture of ground beef and Italian sausage."\n    },\n    {\n      quantity: "1 jar (24 ounces)",\n      name: "Marinara sauce"\n    },\n    {\n      quantity: "1 onion",\n      description: "Finely chopped"\n    },\n    {\n      quantity: "2 cloves",\n      name: "Garlic",\n      description: "Minced"\n    },\n    {\n      quantity: "1/2 teaspoon",\n      name: "Dried oregano"\n    },\n    {\n      quantity: "1/4 teaspoon",\n      name: "Dried basil"\n    },\n    {\n      quantity: "1/4 teaspoon",\n      name: "Salt"\n    },\n    {\n      quantity: "1/4 teaspoon",\n      name: "Black pepper"\n    },\n    {\n      quantity: "1 container (15 ounces)",\n      name: "Ricotta cheese"\n    },\n    {\n      quantity: "1 cup",\n      name: "Grated Parmesan cheese"\n    },\n    {\n      quantity: "2 cups",\n      name: "Shredded mozzarella cheese"\n    },\n    {\n      quantity: "1/2 cup",\n      name: "Butter"\n    },\n    {\n      quantity: "1/2 cup",\n      name: "All-purpose flour"\n    },\n    {\n      quantity: "4 cups",\n      name: "Milk"\n    },\n    {\n      quantity: "1/4 teaspoon",\n      name: "Ground nutmeg"\n    }\n  ],\n  instructions: [\n    {\n      step: 1,\n      description: "Preheat oven to 375°F (190°C). In a large skillet, brown the ground beef with onion and garlic. Drain any excess fat. Stir in marinara sauce, oregano, basil, salt, and pepper. Simmer for 15 minutes."\n    },\n    {\n      step: 2,\n      description: "While the sauce simmers, prepare the béchamel sauce: Melt butter in a saucepan over medium heat. Whisk in flour until smooth. Gradually whisk in milk until the sauce thickens. Season with nutmeg, salt, and pepper."\n    },\n    {\n      step: 3,\n      description: "In a bowl, combine ricotta cheese and Parmesan cheese."\n    },\n    {\n      step: 4,\n      description: "Spread a thin layer of meat sauce on the bottom of a 9x13 inch baking dish. Top with a layer of lasagna noodles, overlapping as needed. Spread with half of the ricotta mixture, then half of the béchamel sauce, and sprinkle with half of the mozzarella cheese. Repeat layers."\n    },\n    {\n      step: 5,\n      description: "Cover the dish with foil and bake for 30 minutes. Uncover and bake for an additional 15-20 minutes, or until the cheese is golden brown and bubbly."\n    },\n    {\n      step: 6,\n      description: "Let the lasagna rest for 10-15 minutes before serving to allow it to set."\n    }\n  ],\n  tips: [\n    {\n      tip: "Use fresh herbs.",\n      description: "If available, fresh basil and oregano can enhance the flavor of the sauce. Add them towards the end of the simmering time to preserve their freshness."\n    },\n    {\n      tip: "Make it vegetarian.",\n      description: "Replace the ground beef with sautéed vegetables such as mushrooms, zucchini, and spinach."\n    },\n    {\n      tip: "Add a layer of spinach.",\n      description: "For added nutrients and a pop of color, layer fresh spinach leaves over the ricotta cheese mixture."\n    },\n    {\n      tip: "Prevent sticking.",\n      description: "If using regular lasagna noodles, cook them according to package instructions and toss them with a little olive oil to prevent sticking."\n    },\n    {\n      tip: "Make it ahead of time.",\n      description: "Lasagna can be assembled and refrigerated a day in advance. Let it come to room temperature before baking."\n    }\n  ]\n};\n```',
          },
        ],
      },
    ],
  });

  const result = await chat.sendMessage(
    `write me a recipe for a ${FOOD}. Follow this schema:
type Ingredient = {
  quantity: string;
  name: string;
  description?: string;
};
type Instruction = {
  step: number;
  description: string;
};
type Tip = {
  tip: string;
  description: string;
};
export type Recipe = {
  name: string;
  description: string;
  ingredients: Ingredient[];
  instructions: Instruction[];
  tips: Tip[];
};`
  );
  const response = result.response;
  try {
    console.log(JSON.parse(response.text()));
  } catch (e) {
    console.log(e);
  }
  return JSON.parse(response.text());
}
const schema = z.object({
  firstName: z.string().optional(),
  prompt: z.string(),
});
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { prompt } = schema.parse(req.body);
  res.status(200).json({ data: (await runChat(prompt)) || "undefined" });
}
