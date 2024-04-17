export default function manifest() {
  return {
    name: "projekt-prithvi",
    short_name: "prithvi",
    description:
      "A dynamic Next.js YouTube clone designed for seamless exploration.",
    start_url: "/",
    display: "standalone",
    background_color: "#40BF40",
    theme_color: "#40BF40",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      ,
      {
        src: "/logo192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/logo512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
