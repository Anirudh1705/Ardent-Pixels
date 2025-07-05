"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, MessageSquare } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { AnimatedCard } from "@/components/animated-card"
import { useRouter } from "next/navigation"
import { use } from "react"

export default function Home() {
  const router = useRouter()
  return (
    <div className="flex min-h-screen flex-col pt-16 md:pt-0">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-black to-gray-900 py-20 md:py-32">
        <div  className="absolute inset-0 bg-cover bg-center opacity-100"
          style={{ 
          backgroundImage: "url('/images/background.png')",
          backgroundBlendMode: "overlay" 
          }}
        ></div>
        <AnimatedSection className="container relative z-10 mx-auto px-4 text-center min-h-[250px]">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:px-6">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Ardent Pixels
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300 md:text-xl">
            Where creativity meets innovation. We transform your digital presence with cutting-edge design and
            development solutions.
          </p>
          {/* <Button
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-purple-700 text-white transition-all duration-300 hover:from-purple-600 hover:to-purple-800 hover:scale-105"
          >
            Let's work together
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button> */}
        </AnimatedSection>
      </section>

      {/* Services Overview */}
      <section className="bg-black py-20">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Let's work together with us</h2>
            <p className="mx-auto max-w-2xl text-gray-400">
              We offer comprehensive digital solutions tailored to your unique needs, helping you stand out in today's
              competitive landscape.
            </p>
          </AnimatedSection>

          <div className="grid gap-8 md:grid-cols-2">
            {/* UI/UX Design Card */}
            <AnimatedCard delay={0.2}>
              <div className="group overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-1 transition-all duration-300 hover:from-purple-900 hover:to-purple-800">
                <div className="h-full rounded-lg bg-gray-900 p-6">
                  <div className="mb-4 h-48 overflow-hidden rounded-lg">
                    <Image
                      src="/images/web.png?height=400&width=600"
                      alt="UI/UX Design"
                      width={600}
                      height={400}
                      className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">UI/UX Design</h3>
                  <p className="mb-4 text-gray-400">
                    Create intuitive, engaging user experiences that delight your customers and keep them coming back
                    for more.
                  </p>
                  <Button
                    variant="outline"
                    className="border-purple-500 text-purple-400 transition-colors duration-300 hover:bg-purple-500 hover:text-white"
                    onClick={() => router.push("/services#ui-ux-design")}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </AnimatedCard>

            {/* Web Development Card */}
            <AnimatedCard delay={0.4}>
              <div className="group overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-1 transition-all duration-300 hover:from-purple-900 hover:to-purple-800">
                <div className="h-full rounded-lg bg-gray-900 p-6">
                  <div className="mb-4 h-48 overflow-hidden rounded-lg">
                    <Image
                      src="/images/web1.png?height=400&width=600"
                      alt="Web Development"
                      width={600}
                      height={400}
                      className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">Web Development</h3>
                  <p className="mb-4 text-gray-400">
                    Build fast, responsive, and scalable websites and applications that drive results for your business.
                  </p>
                  <Button
                    variant="outline"
                    className="border-purple-500 text-purple-400 transition-colors duration-300 hover:bg-purple-500 hover:text-white"
                    onClick={() => router.push("/services#web-development")}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gradient-to-br from-gray-900 to-black py-20">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Why Choose Us?</h2>
            <p className="mx-auto max-w-2xl text-gray-400">
              We combine technical expertise with creative excellence to deliver exceptional results.
            </p>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-3">
            <AnimatedCard delay={0.2}>
              <div className="rounded-lg bg-gray-900 p-6 transition-transform duration-300 hover:scale-105">
                <CheckCircle className="mb-4 h-10 w-10 text-purple-500" />
                <h3 className="mb-2 text-xl font-bold text-white">Innovative Approach</h3>
                <p className="text-gray-400">
                  We stay ahead of trends and technologies to bring fresh ideas to every project.
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.4}>
              <div className="rounded-lg bg-gray-900 p-6 transition-transform duration-300 hover:scale-105">
                <CheckCircle className="mb-4 h-10 w-10 text-purple-500" />
                <h3 className="mb-2 text-xl font-bold text-white">Client Satisfaction</h3>
                <p className="text-gray-400">
                  Your success is our priority. We work closely with you to exceed expectations.
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.6}>
              <div className="rounded-lg bg-gray-900 p-6 transition-transform duration-300 hover:scale-105">
                <CheckCircle className="mb-4 h-10 w-10 text-purple-500" />
                <h3 className="mb-2 text-xl font-bold text-white">Expert Team</h3>
                <p className="text-gray-400">
                  Our specialists bring years of experience and passion to every project we undertake.
                </p>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-black py-20">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">What They Say About Us</h2>
            <p className="mx-auto max-w-2xl text-gray-400">
              Don't just take our word for it. Here's what our clients have to say.
            </p>
          </AnimatedSection>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item, index) => (
              <AnimatedCard key={item} delay={0.2 * (index + 1)}>
                <div className="rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                  <div className="mb-4 flex items-center">
                    <MessageSquare className="mr-2 h-5 w-5 text-purple-500" />
                    <div className="text-purple-400">Testimonial</div>
                  </div>
                  <p className="mb-6 text-gray-300">
                    "Ardent Pixels transformed our digital presence completely. Their team's creativity and technical
                    expertise delivered results beyond our expectations."
                  </p>
                  <div className="flex items-center">
                    <div className="mr-3 h-10 w-10 overflow-hidden rounded-full bg-gray-700">
                      <Image
                        src="/placeholder.svg?height=100&width=100"
                        alt="Client"
                        width={100}
                        height={100}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-white">Client Name</p>
                      <p className="text-sm text-gray-400">Company Position</p>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-900 to-purple-700 py-16">
        <AnimatedSection className="container mx-auto px-4 text-center md:px-6">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Ready to transform your digital presence?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-purple-100">
            Let's create something amazing together. Contact us today to get started.
          </p>
          <Button
            size="lg"
            className="bg-white text-purple-700 transition-all duration-300 hover:bg-gray-100 hover:scale-105"
            onClick={() => router.push("/contact")}
          >
            Contact Us
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </AnimatedSection>
      </section>
    </div>
  )
}
