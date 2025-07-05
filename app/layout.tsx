import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { PageTransition } from "@/components/page-transition"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Ardent Pixels | Creative Digital Agency",
  description:
    "Ardent Pixels is a creative digital agency specializing in UI/UX design, web development, and digital marketing solutions.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-black text-white flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Header />
          <PageTransition>
            <main className="w-full">{children}</main>
          </PageTransition>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
