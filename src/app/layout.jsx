import "./globals.css";
import { CoinProvider } from "@/context/coinContext";
import { MoneyProvider } from "@/context/moneyContext"; // Tambahkan ini

export const metadata = {
  title: "App Keren",
  description: "Aplikasi dengan coin dan uang",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CoinProvider>
          <MoneyProvider>{children}</MoneyProvider>
        </CoinProvider>
      </body>
    </html>
  );
}
