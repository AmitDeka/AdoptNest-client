import { AppSidebar } from "@/components/app-sidebar";
import NavbarAdmin from "@/components/admin/navbar-admin";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import "../../global.css";
import { Karla, Petrona } from "next/font/google";
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
  title: "Admin | AdoptNest",
  description: "Find your new best friend, right here.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function AdminLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${petronaSerif.variable} ${karlaSans.variable} antialiased`}
        suppressHydrationWarning>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <NavbarAdmin />
            <div className="p-4 pt-0">{children}</div>
          </SidebarInset>
        </SidebarProvider>
        <Toaster richColors />
      </body>
    </html>
  );
}
