import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
  title: {
    default: "Tennis - Olympic Callendar & Matchs Managements",
    template: `%s | Tennis`,
  },
  description:
    "Stay on top of your game with TennisPro Dashboard, your ultimate companion for all things tennis. Whether you’re a seasoned player or just starting out, our platform offers everything you need to enhance your tennis experience.",
  icons: {
    icon: [
      {
        url: "/icons/favicon.ico",
        href: "/icons/favicon.ico",
      },
    ],
  },
  metadataBase: new URL("https://tennis-galembeck.vercel.app"),
};
