import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 Error",
  description: "Page not found",
};
export default function PageNotFound() {
  return (
    <div className="flex flex-1 items-center justify-center text-center text-4xl">
      404 Error -- Page not found
    </div>
  );
}
