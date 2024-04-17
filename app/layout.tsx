import { StoreProvider } from "../store/provider";

export const metadata = {
  title: "Bookstore",
  description: "Bookstore",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <StoreProvider>
        <body>{children}</body>
      </StoreProvider>
    </html>
  );
}
