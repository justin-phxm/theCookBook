import type { NextApiRequest, NextApiResponse } from "next";
const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const MODEL_NAME = "gemini-1.5-pro-latest";
const API_KEY = process.env.GEMINI_API_KEY;
const FOOD = "hambuger";

type ResponseData = {
  data: string;
};
async function runChat() {
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
    ],
  });

  const result = await chat.sendMessage(
    `write me a recipe for a ${FOOD} and include the name, ingredients, instructions, tips, and a description?`
  );
  const response = result.response;
  try {
    console.log(JSON.parse(response.text()));
  } catch (e) {
    console.log(e);
  }
  return JSON.parse(response.text());
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ data: (await runChat()) || "undefined" });
}
