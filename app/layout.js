import { Manrope } from "next/font/google";
import "./globals.css";
import Footer from "../components/footer";
import { Suspense } from "react";
import Loading from "./loading";
import { ThemeProvider } from "../components/theme-provider";
import Navbar from "../components/navbar";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata = {
  manifest: "/manifest.json",
  title: "Projekt Prithvi",
  description:
    "A dynamic Next.js YouTube clone designed for seamless exploration. Inspired by the Sanskrit word for Earth Prithvi offers an ad-free experience and a commitment to open-source. ",
  other: {
    "twitter:image": "https://i.ibb.co/cLX8vK4/prithvi.png",
    "twitter:card": "summary_image_large",
    "twitter:url": "https://projekt-prithvi.vercel.app/",
    "twitter:domain": "projekt-prithvi.vercel.app",
    "twitter:title": "Projekt Prithvi",
    "twitter:description":
      "A dynamic Next.js YouTube clone designed for seamless exploration. Inspired by the Sanskrit word for Earth Prithvi offers an ad-free experience and a commitment to open-source. ",

    "og:url": "https://projekt-prithvi.vercel.app/",
    "og:type": "website",
    "og:title": "Projekt Prithvi",
    "og:description":
      "A dynamic Next.js YouTube clone designed for seamless exploration. Inspired by the Sanskrit word for Earth Prithvi offers an ad-free experience and a commitment to open-source. ",
    "og:image": "https://i.ibb.co/cLX8vK4/prithvi.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.className} bg-background h-full`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense fallback={<Loading />}>
            {children}
            <Footer />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
