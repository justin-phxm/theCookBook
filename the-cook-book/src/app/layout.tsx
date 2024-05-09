import "@/styles/globals.css";
export const metadata = {
  title: "TheCookBook",
  description: "Save all your recipes with theCookBook",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
