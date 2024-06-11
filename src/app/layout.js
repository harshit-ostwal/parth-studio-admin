import { Onest } from "next/font/google";
import "./globals.css";

const onest = Onest({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  preload: true,
  variable: "--onest",
  style: ["normal"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${onest.variable} font-Onest`}>
        {children}
      </body>
    </html>
  );
}
