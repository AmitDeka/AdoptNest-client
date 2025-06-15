import { Karla, Petrona } from "next/font/google";
import "../global.css";
import { Footer } from "@/components/footer";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/sonner";

const petronaSerif = Petrona({
  variable: "--font-petrona-serif",
  subsets: ["latin"],
});

const karlaSans = Karla({
  variable: "--font-karla-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "AdoptNest",
  description: "Find your new best friend, right here.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${petronaSerif.variable} ${karlaSans.variable} antialiased`}
        suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
        <Toaster richColors expand={true} />
      </body>
    </html>
  );
}
