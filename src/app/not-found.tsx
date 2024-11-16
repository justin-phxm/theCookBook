import { Metadata } from "next";
import Layout from "./(public)/layout";
export const metadata: Metadata = {
  title: "404 Error",
  description: "Page not found",
};
export default function PageNotFound() {
  return (
    <Layout>
      <div className="flex flex-1 items-center justify-center text-center text-4xl">
        404 Error -- Page not found
      </div>
    </Layout>
  );
}
