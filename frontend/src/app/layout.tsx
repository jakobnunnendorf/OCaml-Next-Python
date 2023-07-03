import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: "OCaml Next Python",
    description:
        "A collaboration project by Axel Krukziener and Jakob Nunnendorf",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
          <body className={`${inter.className} p-8`}>{children}</body>
      </html>
  );
}
