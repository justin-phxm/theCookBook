import Circle from "@/components/Circle";
import Card from "./components/Card";
import RecipeDetails from "./components/recipeDetails";
// import ChatGPTInput from "./components/ChatGPTInput";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="w-full">
        <div className="fixed -top-3/4 w-full">
          <Circle />
        </div>
        <div className="fixed -right-3/4 top-1/4 w-full">
          <Circle />
        </div>
      </div>
      <div className="relative flex h-screen w-11/12 flex-col justify-between gap-2 py-2 lg:flex-row">
        <div className="flex flex-1 gap-2">{children}</div>
        <Card>
          <RecipeDetails />
          <h1 className="select-none border-b-2 border-gray-500 text-xl font-bold">
            Use AI 💻🧠
          </h1>
          {/* <ChatGPTInput /> */}
        </Card>
      </div>
    </>
  );
}
