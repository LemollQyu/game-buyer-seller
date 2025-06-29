import "./globals.css";
import { CoinProvider } from "../context/coinContext";
import { MoneyProvider } from "../context/moneyContext";
import { AudioProvider } from "../context/audioProvider";

export const metadata = {
  title: "App Keren",
  description: "Aplikasi dengan coin dan uang",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CoinProvider>
          <MoneyProvider>
            <AudioProvider>{children}</AudioProvider>
          </MoneyProvider>
        </CoinProvider>
      </body>
    </html>
  );
}
