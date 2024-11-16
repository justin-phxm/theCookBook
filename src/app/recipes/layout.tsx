import Circle from "@/components/Circle";

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
      <div className="relative flex h-screen w-11/12 flex-col py-2">
        {children}
      </div>
    </>
  );
}
