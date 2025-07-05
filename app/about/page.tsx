"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { AnimatedCard } from "@/components/animated-card"
import { useRouter } from "next/navigation"

export default function AboutPage() {
  const router = useRouter()
  // Redirect to home if the user tries to access this page directly
  return (
    <div className="flex min-h-screen flex-col pt-16 md:pt-0">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-black to-gray-900 py-20 md:py-32">
        <div className="absolute inset-0 bg-cover bg-center opacity-100"
          style={{
            backgroundImage: "url('/images/background.png')",
            backgroundBlendMode: "overlay"
          }}
        ></div>
        <AnimatedSection className="container relative z-10 mx-auto px-4 text-center min-h-[250px]">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
            About{" "}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Ardent Pixels
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300 md:text-xl">
            Get to know the creative minds behind your digital success.
          </p>
        </AnimatedSection>
      </section>

      {/* Who We Are */}
      <section className="bg-black py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <AnimatedSection delay={0.2}>
              <div>
                <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">Who We Are</h2>
                <p className="mb-4 text-gray-400">
                  Ardent Pixels is a creative digital agency founded on the principle that great design and technology
                  should work seamlessly together to deliver exceptional results.
                </p>
                <p className="mb-4 text-gray-400">
                  Since our inception, we've been passionate about helping businesses of all sizes establish their
                  digital presence and connect with their audience in meaningful ways.
                </p>
                <p className="text-gray-400">
                  Our team of designers, developers, and digital strategists work collaboratively to create solutions
                  that not only look beautiful but also drive real business results.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedCard delay={0.4}>
              <div className="relative h-[400px] overflow-hidden rounded-xl">
                <Image src="/images/whoarewe.png? height=800&width=600" alt="Our Team" fill className="object-cover" />
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Meet Our Founders */}
      {/* <section className="bg-gradient-to-br from-gray-900 to-black py-20"> */}
        {/* <div className="container mx-auto px-4 md:px-6"> */}
          {/* <AnimatedSection className="mb-12 text-center"> */}
            {/* <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent"> */}
              {/* Meet Our Founders */}
            {/* </h2> */}
            {/* <p className="mx-auto max-w-2xl text-gray-300 text-lg"> */}
              {/* The visionaries who brought Ardent Pixels to life. */}
            {/* </p> */}
          {/* </AnimatedSection> */}

          {/* <div className="grid gap-12 md:grid-cols-2"> */}
            {/* Founder 1 */}
            {/* <AnimatedCard delay={0.2}> */}
              {/* <div className="overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-1 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 group"> */}
                {/* <div className="rounded-lg bg-gray-900 p-8"> */}
                  {/* <div className="flex flex-col items-center mb-8"> */}
                    {/* <div className="relative w-[371px] h-[395.5px] overflow-hidden rounded-lg mb-6 group-hover:shadow-xl transition-all duration-500">
                      <div className="absolute inset-0 bg-gradient-to-br from-black to transparent opacity-30 z-10 group-hover:opacity-40 transition-opacity duration-500"></div>
                      <div className="absolute inset-0 border-2 border-purple-500/50 z-20 rounded-lg group-hover:border-purple-500/80 transition-colors duration-500"></div>
                      <Image
                        src="/images/founder1."
                        alt="Founder 1"
                        fill
                        className="object-cover z-0 transition-transform duration-700 group-hover:scale-105"
                      />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 z-30"> */}
                      {/* <h3 className="text-2xl font-bold text-white mb-1">Anirudh Kaushik</h3>
                      <p className="text-purple-400 text-lg">Founder & Chief Strategy Officer</p> */}
                    {/* </div> */}
                    {/* </div> */}
                  {/* </div> */}

                  {/* <div className="bg-gray-800/50 p-6 rounded-lg"> */}
                    {/* <h3 className="text-2xl font-bold text-white mb-1">Anirudh Kaushik</h3> */}
                    {/* <p className="text-purple-400 text-lg">Founder & Chief Strategy Officer</p> */}
                    {/* <p className="text-gray-300 leading-relaxed">
                      Ardent Pixels started as a vision—a dream to create cutting-edge, user-friendly, and impactful digital experiences.
                      For me, it's not just about building websites or services; it's about crafting stories, pushing creative boundaries, and delivering solutions that make a difference.
                      Every project we take on is a step toward shaping the future of digital innovation.
                      Thank you for being part of this journey—let’s create something extraordinary together
                    </p> */}
                    {/* <div className="mt-6 pt-6 border-t border-gray-700">
                      <div className="flex flex-wrap gap-2">
                        {["Design", "Strategy", "Leadership", "Innovation"].map((skill) => (
                          <span key={skill} className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div> */}
                  {/* </div>
                </div>
              </div> */}
            {/* </AnimatedCard> */}

            {/* Founder 2 */}
            {/* <AnimatedCard delay={0.4}> */}
              {/* <div className="overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-1 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 group"> */}
                {/* <div className="rounded-lg bg-gray-900 p-8"> */}
                  {/* <div className="flex flex-col items-center mb-8"> */}
                    {/* <div className="relative w-[371px] h-[395.5px] overflow-hidden rounded-lg mb-6 group-hover:shadow-xl transition-all duration-500">
                      <div className="absolute inset-0 bg-gradient-to-br from-black to transparent opacity-30 z-10 group-hover:opacity-40 transition-opacity duration-500"></div>
                      <div className="absolute inset-0 border-2 border-purple-500/50 z-20 rounded-lg group-hover:border-purple-500/80 transition-colors duration-500"></div>
                      <Image
                        src="/images/founder2."
                        alt="Founder 2"
                        fill
                        className="object-cover z-0 transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 z-30">
                        {/* <h3 className="text-2xl font-bold text-white mb-1">Rishav Raj</h3> */}
                        {/* <p className="text-purple-400 text-lg">Founder & Chief Operation Officer</p> */}
                      {/* </div> */}
                    {/* </div> */}
                  {/* </div> */}

                  {/* <div className="bg-gray-800/50 p-6 rounded-lg"> */}
                    {/* <h3 className="text-2xl font-bold text-white mb-1">Rishav Raj</h3> */}
                    {/* <p className="text-purple-400 text-lg">Founder & Chief Operation Officer</p> */}
                    {/* <p className="text-gray-300 leading-relaxed"> */}
                      {/* Behind every successful project at Ardent Pixels lies a strong foundation of seamless operations and smart execution.
                      We focus on making sure every process flows effortlessly—promoting smooth teamwork, clear communication, and efficient problem-solving.
                      Our goal is to deliver high-quality solutions quickly and precisely, so teams stay aligned, creative energy stays high,
                      and our clients receive the very best—every single time. */}
                    {/* </p> */}
                    {/* <div className="mt-6 pt-6 border-t border-gray-700">
                      <div className="flex flex-wrap gap-2">
                        {["Creativity", "Branding", "UX/UI", "Leadership"].map((skill) => (
                          <span key={skill} className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div> */}
                    {/* </div> */}
                  {/* </div> */}
                {/* </div> */}
              {/* </div> */}
            {/* </AnimatedCard> */}
          {/* </div> */}
        {/* </div > */}
      {/* </section > */}

      {/* What Sets Us Apart */}
      < section className="bg-black py-20" >
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <AnimatedSection className="order-2 md:order-1" delay={0.2}>
              <div>
                <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">What Sets Us Apart</h2>
                <ul className="space-y-4">
                  {[
                    {
                      title: "People First",
                      description:
                        " At the heart of everything we do is you. Your vision, aspirations, and challenges fuel our drive to innovate and excel. We measure our success by the impact we create for you.",
                    },
                    {
                      title: "Curiosity at the Core",
                      description:
                        "We believe in constantly challenging the status quo. 'What if?' is a question we ask every day, pushing boundaries and exploring new possibilities to bring fresh, groundbreaking ideas to life.",
                    },
                    {
                      title: "Purpose-Driven Growth",
                      description:
                        "Growth, for us, is not just about numbers and profits. It's about creating lasting value, making meaningful contributions, and leaving a positive impact in every interaction, every project, and every solution we craft.",
                    },
                  ].map((item, index) => (
                    <AnimatedCard key={index} delay={0.3 + index * 0.1}>
                      <li className="flex">
                        <div className="mr-4 mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-purple-500"></div>
                        <div>
                          <h3 className="mb-2 text-xl font-bold text-white">{item.title}</h3>
                          <p className="text-gray-400">{item.description}</p>
                        </div>
                      </li>
                    </AnimatedCard>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedCard delay={0.4}>
              <div className="relative h-[400px] overflow-hidden rounded-xl order-1 md:order-2">
                <Image
                  src="/images/Whatsetsusapart.jpg? height=800&width=600"
                  alt="What Sets Us Apart"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section >

      {/* Our Mission & Promise */}
      < section className="bg-gradient-to-br from-purple-900 to-purple-700 py-20" >
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <AnimatedCard delay={0.2}>
              <div className="rounded-xl bg-black/20 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-black/30">
                <h3 className="mb-4 text-2xl font-bold text-white">Our Mission</h3>
                <p className="mb-6 text-purple-100">
                  To transform the impossible into reality.
                  With unwavering dedication, collaborative energy, and boundless imagination, we craft solutions that don't just function —
                  they captivate, inspire, and revolutionize the way people experience innovation..
                </p>
                <p className="text-purple-100">
                  We're committed to pushing the boundaries of creativity and technology to deliver exceptional results
                  that make a real difference for our clients.
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.4}>
              <div className="rounded-xl bg-black/20 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-black/30">
                <h3 className="mb-4 text-2xl font-bold text-white">Our Promise</h3>
                <p className="mb-6 text-purple-100">
                  At Ardent Pixels, we are here to change the game. Whether it’s through cutting-edge solutions, outstanding service, or even the simplest gestures, we promise to infuse every endeavor with authenticity, passion, and creativity.
                  When you work with us, you’re not just getting a service — you’re becoming a part of a movement that dares to dream bigger and achieve more.
                </p>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section >

      {/* CTA Section */}
      < section className="bg-black py-16" >
        <AnimatedSection className="container mx-auto px-4 text-center md:px-6">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Ready to work with us?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-gray-400">
            Let's create something amazing together. Contact us today to get started.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-purple-700 text-white transition-all duration-300 hover:from-purple-600 hover:to-purple-800 hover:scale-105"
            onClick={() => router.push("/contact")}
          >
            Contact Us
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </AnimatedSection>
      </section >
      </div >
    );
  }
