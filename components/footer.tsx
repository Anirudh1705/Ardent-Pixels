import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <AnimatedSection delay={0.1}>
            <div>
              <Link href="/" className="mb-4 inline-block">
                <Image
                  src="/images/footer.svg"
                  alt="Ardent Pixels Logo"
                  width={48}
                  height={40}
                  className="h-10 w-auto mb-4"
                />
              </Link>
              <p className="mb-4 text-gray-400">
                Company that can help you in developing your company for the future
              </p>
              {/* <div className="flex space-x-4">
                <a href="https://www.instagram.com/ardent_pixels/" className="text-gray-300 hover:text-campus-orange transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-300 hover:text-campus-orange transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-300 hover:text-campus-orange transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="https://www.linkedin.com/company/ardent-pixels/" className="text-gray-300 hover:text-campus-orange transition-colors">
                  <Linkedin size={20} />
                </a>
              </div> */}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About Us" },
                  { href: "/work", label: "Our Work" },
                  { href: "/services", label: "Services" },
                  { href: "/contact", label: "Contact" },
                ].map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-gray-400 transition-all duration-300 hover:pl-2 hover:text-purple-400"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">Services</h3>
              <ul className="space-y-2">
                {[
                  { href: "/services/digital-marketing", label: "Digital Marketing" },
                  { href: "/services/development", label: "Development" },
                  { href: "/services/graphic-design", label: "Graphic Design" },
                  { href: "/services/video-editing", label: "Video Editing" },
                  { href: "/services/photography", label: "Photography & Shoots" },
                ].map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-gray-400 transition-all duration-300 hover:pl-2 hover:text-purple-400"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">Follow</h3>
              <p className="mb-4 text-gray-400">Follow us on Instagram and LinkedIn for the latest design trends, creative tips, and a behind-the-scenes look at our projects.</p>
              <div className="space-y-2">
                {/* <Input
                  type="email"
                  placeholder="Your email"
                  className="border-gray-700 bg-gray-900 text-white placeholder:text-gray-500 focus:border-purple-500"
                />
                <Button className="w-full bg-gradient-to-r from-purple-500 to-purple-700 text-white transition-all duration-300 hover:from-purple-600 hover:to-purple-800">
                  Subscribe
                </Button> */}
                <div className="flex space-x-4">
                  <a href="https://www.instagram.com/ardent_pixels/" className="text-gray-300 hover:text-campus-orange transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href="https://www.linkedin.com/company/ardent-pixels/" className="text-gray-300 hover:text-campus-orange transition-colors">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Ardent Pixels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
