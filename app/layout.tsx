import { Unbounded } from "next/font/google";

const unbounded = Unbounded({ subsets: ["latin"], variable: "--font-unbounded" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={unbounded.variable}>
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
