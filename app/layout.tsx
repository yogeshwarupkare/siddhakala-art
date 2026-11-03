import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Siddhakala Art | Technology, Made Simple", description: "Discover laptops, computers, components, accessories and IT services at Siddhakala Art." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
