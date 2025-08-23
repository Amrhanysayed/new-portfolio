import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Amr Hany - Software Engineer Portfolio",
  description:
    "Full-stack developer passionate about building scalable systems and impactful solutions. Computer Engineering student at Cairo University with experience in React.js, Vue.js, Next.js, Nest.js, and SQL/NoSQL databases.",
  keywords: [
    "Amr Hany",
    "Software Engineer",
    "Full Stack Developer",
    "React.js",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Cairo University",
    "Frontend Developer",
    "Backend Developer",
  ],
  authors: [{ name: "Amr Hany" }],
  creator: "Amr Hany",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://amrhany.dev",
    title: "Amr Hany - Software Engineer Portfolio",
    description:
      "Full-stack developer passionate about building scalable systems and impactful solutions.",
    siteName: "Amr Hany Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amr Hany - Software Engineer Portfolio",
    description:
      "Full-stack developer passionate about building scalable systems and impactful solutions.",
    creator: "@amrhanysayed",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
