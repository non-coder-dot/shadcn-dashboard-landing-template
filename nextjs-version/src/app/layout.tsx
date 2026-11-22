import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarConfigProvider } from "@/contexts/sidebar-context";
import { inter } from "@/lib/fonts";
export const metadata: Metadata = { title: "Vivace School of Music | Learning Portal", description: "The digital conservatory for Vivace School of Music." };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en" suppressHydrationWarning className={inter.variable}><body className={inter.className}><ThemeProvider attribute="class" defaultTheme="light" enableSystem storageKey="vivace-theme"><SidebarConfigProvider>{children}</SidebarConfigProvider></ThemeProvider></body></html>; }
