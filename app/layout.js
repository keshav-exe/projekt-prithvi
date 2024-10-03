import "./globals.css";
import Footer from "../components/footer";
import { Suspense } from "react";
import Loading from "./loading";
import { ThemeProvider } from "../components/theme-provider";
import { Space_Grotesk } from "next/font/google";

const font = Space_Grotesk({
  subsets: ["latin"],
});

export const metadata = {
  manifest: "/manifest.json",
  title: "Prithvi | A YouTube Clone",
  description:
    "A dynamic Next.js YouTube clone designed for seamless exploration. Inspired by the Sanskrit word for Earth Prithvi offers an ad-free experience and a commitment to open-source. ",
  other: {
    "twitter:image": "https://i.ibb.co/cLX8vK4/prithvi.png",
    "twitter:card": "summary_image_large",
    "twitter:url": "https://prithvi.keshavbagaade.com/",
    "twitter:domain": "prithvi.keshavbagaade.com",
    "twitter:title": "Prithvi",
    "twitter:description":
      "A dynamic Next.js YouTube clone designed for seamless exploration. Inspired by the Sanskrit word for Earth Prithvi offers an ad-free experience and a commitment to open-source. ",

    "og:url": "https://prithvi.keshavbagaade.com/",
    "og:type": "website",
    "og:title": "Prithvi",
    "og:description":
      "A dynamic Next.js YouTube clone designed for seamless exploration. Inspired by the Sanskrit word for Earth Prithvi offers an ad-free experience and a commitment to open-source. ",
    "og:image": "https://i.ibb.co/cLX8vK4/prithvi.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${font.className} bg-background min-h-screen justify-evenly flex flex-col`}
      >
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
