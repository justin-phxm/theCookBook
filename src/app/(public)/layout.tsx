import Circle from "../components/Circle";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

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

      <div className="flex w-5/6 max-w-screen-2xl flex-1 flex-col pt-24">
        <div className="relative flex h-full flex-1 flex-col">{children}</div>
        <Footer />
      </div>
      <NavBar />
    </>
  );
}
