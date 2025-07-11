"use client";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { AnimatedSection } from "@/components/animated-section"
import { AnimatedCard } from "@/components/animated-card"
import Image from "next/image"
import { useState } from "react"

export default function ContactPage() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setSuccess("")
    setError("")
    const form = e.currentTarget
    const firstName = (form.elements.namedItem("first-name") as HTMLInputElement)?.value || ""
    const lastName = (form.elements.namedItem("last-name") as HTMLInputElement)?.value || ""
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value || ""
    const phone = (form.elements.namedItem("phone") as HTMLInputElement)?.value || ""
    const service = (form.elements.namedItem("service") as HTMLSelectElement)?.value || ""
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value || ""
    const name = `${firstName} ${lastName}`.trim()
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, service, message })
      })
      const data = await res.json()
      if (data.success) {
        setSuccess("Message sent successfully!")
        form.reset()
      } else {
        setError("Failed to send message. Please try again.")
      }
    } catch {
      setError("Failed to send message. Please try again.")
    }
    setLoading(false)
  }

  return (
    <div className="flex min-h-screen flex-col pt-16 md:pt-0">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-black to-gray-900 py-20 md:py-32">
        <div className="absolute inset-0 bg-cover bg-center opacity-100"
          style={{ 
          backgroundImage: "url('/images/background.png')",
          backgroundBlendMode: "overlay" 
          }}></div>
        <AnimatedSection className="relative z-10 mx-auto px-4 text-center min-h-[250px] w-full max-w-[1600px]">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
            Get in{" "}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300 md:text-xl">
            Have a project in mind? We'd love to hear from you.
          </p>
        </AnimatedSection>
      </section>

      {/* Contact Form Section */}
      <section className="bg-black py-20">
        <div className="mx-auto w-full max-w-[1600px] px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <AnimatedSection delay={0.2}>
              <div className="relative w-full max-w-[500px] aspect-[3/4] rounded-xl overflow-hidden">
                <Image
                  src='/images/call.png'
                  alt="Contact Us"
                  fill
                  className="object-cover rounded-xl"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  {/* <h2 className="text-3xl font-bold text-white mb-2">Get in Touch</h2>
                  <p className="text-gray-200">We're excited to hear about your project</p> */}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedCard delay={0.4}>
              <div className="rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-1 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                <div className="rounded-lg bg-gray-900 p-6">
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="first-name" className="text-sm font-medium text-white">
                          First Name
                        </label>
                        <Input
                          id="first-name"
                          name="first-name"
                          type="text"
                          placeholder="John"
                          className="border-gray-700 bg-gray-800 text-white placeholder:text-gray-500 focus:border-purple-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="last-name" className="text-sm font-medium text-white">
                          Last Name
                        </label>
                        <Input
                          id="last-name"
                          name="last-name"
                          type="text"
                          placeholder="Doe"
                          className="border-gray-700 bg-gray-800 text-white placeholder:text-gray-500 focus:border-purple-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-white">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john.doe@example.com"
                        className="border-gray-700 bg-gray-800 text-white placeholder:text-gray-500 focus:border-purple-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-white">
                        Phone Number (Optional)
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="text"
                        placeholder="+1 (555) 123-4567"
                        className="border-gray-700 bg-gray-800 text-white placeholder:text-gray-500 focus:border-purple-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm font-medium text-white">
                        Service You're Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        className="w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-white focus:border-purple-500 focus:outline-none"
                      >
                        <option value="">Select a service</option>
                        <option value="digital-marketing">Digital Marketing</option>
                        <option value="development">Development</option>
                        <option value="graphic-design">Graphic Design</option>
                        <option value="video-editing">Video Editing</option>
                        <option value="photography">Photography & Shoots</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-white">
                        Your Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your project..."
                        className="min-h-[120px] border-gray-700 bg-gray-800 text-white placeholder:text-gray-500 focus:border-purple-500"
                      />
                    </div>

                    <Button className="w-full bg-gradient-to-r from-purple-500 to-purple-700 text-white transition-all duration-300 hover:from-purple-600 hover:to-purple-800 hover:scale-105" type="submit" disabled={loading}>
                      {loading ? "Sending..." : "Send Message"}
                    </Button>
                    {success && <div className="mt-4 text-green-500 text-center">{success}</div>}
                    {error && <div className="mt-4 text-red-500 text-center">{error}</div>}
                  </form>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-black py-20">
        <div className=" mx-auto w-full max-w-[1600px] px-4 md:px-6">
          <AnimatedSection className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">Frequently Asked Questions</h2>
            <p className="mx-auto max-w-2xl text-gray-400">
              Find answers to common questions about our services and process.
            </p>
          </AnimatedSection>

          <div className="mx-auto max-w-3xl space-y-6">
            {[
              {
                question: "What is your typical process for new projects?",
                answer:
                  "Our process typically includes discovery, strategy, creation, and launch phases. We start by understanding your needs, develop a strategy, create the solution, and then launch with ongoing support.",
              },
              {
                question: "How long does a typical project take to complete?",
                answer:
                  "Project timelines vary depending on scope and complexity. A simple website might take 4-6 weeks, while more complex projects can take several months. We'll provide a detailed timeline during our initial consultation.",
              },
              {
                question: "Do you offer ongoing maintenance and support?",
                answer:
                  "Yes, we offer various maintenance and support packages to ensure your digital assets continue to perform optimally after launch. We can discuss these options based on your specific needs.",
              },
              {
                question: "What information do you need to provide a quote?",
                answer:
                  "To provide an accurate quote, we typically need to understand your project goals, target audience, desired features, timeline, and budget range. The more details you can provide, the more accurate our estimate will be.",
              },
            ].map((faq, index) => (
              <AnimatedCard key={index} delay={0.2 * (index + 1)}>
                <div className="rounded-lg bg-gray-900 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                  <h3 className="mb-3 text-lg font-bold text-white">{faq.question}</h3>
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}