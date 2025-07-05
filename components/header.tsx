"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Contact, Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 z-50 w-full transition-all duration-300
        rounded-b-[35px] bg-black/80
        shadow-[0px_5px_4px_0px_rgba(0,0,0,0.25)] backdrop-blur-[7.5px]
        border-[2px] border-[#AB4FFD]"
      style={{
        borderImage: "linear-gradient(to right, #E20B6F, #AB4FFD) 1 round-b-[30px]",
      }}
    >
      {/* <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#E20B6F] to-[#AB4FFD] rounded-b-[35px]"></div> */}
      <div className="flex h-16 w-full items-center justify-between px-6 md:px-12 lg:px-[120px] mx-auto">
        <Link href="/" className="flex items-center">
          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            <Image
              src="/AP Logo.svg"
              alt="Ardent Pixels Logo"
              width={48}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation & CTA */}
        <div className="hidden items-center gap-x-8 md:flex">
          <nav>
            <ul className="flex items-center space-x-8">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/work", label: "Our Work" },
                { href: "/services", label: "Services" },
                { href: "/contact", label: "Contact" },
                { href: "/verify", label: "Verify" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative text-sm font-medium transition-colors duration-300 hover:text-purple-400 group ${
                      pathname === link.href
                        ? "text-white"
                        : "text-gray-400"
                    }`}
                  >
                    <motion.span
                      whileHover={{ y: -2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      className="inline-block"
                    >
                      {link.label}
                      {pathname === link.href && (
                        <motion.div
                          layoutId="underline"
                          className="absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-to-r from-[#E20B6F] to-[#AB4FFD]"
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              className="bg-gradient-to-r from-[#E20B6F] to-[#AB4FFD] text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
              onClick={() => router.push("/contact")}
            >
              Get Started
            </Button>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="inline-flex items-center justify-center rounded-lg p-2 text-white hover:bg-white/10 focus:outline-none md:hidden transition-colors duration-200"
          onClick={toggleMenu}
        >
          <span className="sr-only">{isMenuOpen ? "Close main menu" : "Open main menu"}</span>
          {isMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 z-[1000] flex md:hidden pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Overlay only for menu drawer, not navbar */}
          <div
            className="absolute top-16 left-0 right-0 bottom-0 bg-black opacity-80 pointer-events-auto"
            style={{ zIndex: 1001 }}
            onClick={toggleMenu}
          />
          {/* Drawer */}
          <motion.div
            className="fixed top-16 right-0 max-h-[calc(100vh-4rem)] w-4/5 max-w-xs bg-[#1a1333] shadow-2xl rounded-l-2xl flex flex-col items-center px-6 border-l-4 border-[#AB4FFD] pointer-events-auto overflow-y-auto"
            style={{ zIndex: 1002 }}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="flex flex-col justify-start space-y-4 w-full mt-4 pb-8">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/work", label: "Our Work" },
                { href: "/services", label: "Services" },
                { href: "/contact", label: "Contact" },
              ].map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Link
                    href={link.href}
                    className={`block rounded-lg px-4 py-3 text-lg font-semibold text-center transition-all duration-300 ${
                      pathname === link.href
                        ? "bg-[#AB4FFD] text-white"
                        : "text-white hover:bg-[#2d1a3a] hover:text-purple-300"
                    }`}
                    onClick={toggleMenu}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Link href="/verify">
                  <span className="block rounded-lg px-4 py-3 text-lg font-semibold text-center transition-all duration-300 text-white hover:bg-[#2d1a3a] hover:text-purple-300 mb-4">
                    Verify
                  </span>
                </Link>
                <Link href="/contact">
                  <Button className="w-full bg-gradient-to-r from-[#E20B6F] to-[#AB4FFD] text-white text-lg py-6 rounded-xl shadow-lg hover:shadow-purple-500/20">
                    Get Started
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.header>
  )
}
