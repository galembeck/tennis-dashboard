import { Poppins } from "next/font/google";

import { SITE_CONFIG } from "@/config";

import { cn } from "@/lib/utils";

import "../styles/globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = SITE_CONFIG;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-primary-background text-foreground antialiased max-w-full overflow-x-hidden",
          poppins.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
