import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {ClerkProvider, SignedIn, SignedOut, SignInButton, SignUpButton, UserButton} from "@clerk/nextjs";
import {HeaderBY_v0Generated} from "@/_UI/_backYard/HeaderBY_v0-generated";
import Header from "@/_UI/Header/Header";
import Body from "@/_UI/Main/Body";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "EstateVibe",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

      <div className="min-h-screen">
        {/*<HeaderBY_v0Generated />*/}
        <Header/>
        <Body>{children}</Body>
      </div>

      {/*<header className="flex justify-end items-center p-4 gap-4 h-16">*/}
      {/*  <SignedOut>*/}
      {/*    <SignInButton mode={'modal'}/>*/}
      {/*    <SignUpButton mode={'modal'}/>*/}
      {/*  </SignedOut>*/}
      {/*  <SignedIn>*/}
      {/*    <UserButton />*/}
      {/*  </SignedIn>*/}
      {/*</header>*/}
      {/*{children}*/}
      </body>
      </html>
    </ClerkProvider>
  );
}
