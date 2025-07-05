"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { AnimatedCard } from "@/components/animated-card"
import { ImageCarousel } from "@/components/image-carousel"
import { ImageGallery } from "@/components/image-gallery"
import { useRouter } from "next/navigation"

export default function ServicesPage() {
  const router = useRouter()
  // Sample services data with multiple images
  const services = [
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      description: "Strategic digital marketing solutions to grow your online presence and reach your target audience.",
      mainImages: [
        { src: "/images/dm3.jpg?height=600&width=800&text=Social+Media+Campaign", alt: "Social Media Campaign" },
        { src: "/images/dm2.jpg?height=600&width=800&text=SEO+Strategy", alt: "SEO Strategy" },
        { src: "/images/dm1.jpg?height=600&width=800&text=PPC+Advertising", alt: "PPC Advertising" },
      ],
      galleryImages: [
        // {
        //   src: "/placeholder.svg?height=400&width=600&text=Social+Analytics",
        //   alt: "Social Analytics",
        //   caption: "Social Media Analytics",
        // },
        // {
        //   src: "/placeholder.svg?height=400&width=600&text=Content+Marketing",
        //   alt: "Content Marketing",
        //   caption: "Content Marketing Strategy",
        // },
        // {
        //   src: "/placeholder.svg?height=400&width=600&text=Email+Campaign",
        //   alt: "Email Campaign",
        //   caption: "Email Marketing Campaign",
        // },
        // {
        //   src: "/placeholder.svg?height=400&width=600&text=SEO+Audit",
        //   alt: "SEO Audit",
        //   caption: "SEO Performance Audit",
        // },
      ],
      features: [
        "Social Media Marketing",
        "Search Engine Optimization (SEO)",
        "Pay-Per-Click (PPC) Advertising",
        "Content Marketing",
        "Email Marketing Campaigns",
      ],
    },
    {
      id: "development",
      title: "Development",
      description: "Custom web and mobile development solutions tailored to your specific business needs.",
      mainImages: [
        { src: "/images/web2.jpg?height=600&width=800&text=Web+Development", alt: "Web Development" },
        { src: "/images/web3.jpg?height=600&width=800&text=Mobile+App", alt: "Mobile App Development" },
        { src: "/images/web1.png?height=600&width=800&text=E-commerce", alt: "E-commerce Development" },
      ],
      galleryImages: [
        // {
        //   src: "/placeholder.svg?height=400&width=600&text=Responsive+Design",
        //   alt: "Responsive Design",
        //   caption: "Responsive Web Design",
        // },
        // {
        //   src: "/placeholder.svg?height=400&width=600&text=Custom+CMS",
        //   alt: "Custom CMS",
        //   caption: "Custom Content Management Systems",
        // },
        // {
        //   src: "/placeholder.svg?height=400&width=600&text=API+Integration",
        //   alt: "API Integration",
        //   caption: "Third-party API Integration",
        // },
        // {
        //   src: "/placeholder.svg?height=400&width=600&text=Database+Design",
        //   alt: "Database Design",
        //   caption: "Database Architecture",
        // },
        // {
        //   src: "/placeholder.svg?height=400&width=600&text=Cloud+Deployment",
        //   alt: "Cloud Deployment",
        //   caption: "Cloud Infrastructure Setup",
        // },
      ],
      features: [
        "Website Development",
        "E-commerce Solutions",
        "Mobile App Development",
        "Custom Web Applications",
        "API Integration",
      ],
    },
    {
      id: "graphic-design",
      title: "Graphic Design",
      description: "Creative graphic design services to enhance your brand identity and visual communication.",
      mainImages: [
        { src: "/images/UIUX2.png?height=600&width=800&text=Brand+Identity", alt: "Brand Identity" },
        { src: "/images/UIUX.png?height=600&width=800&text=Print+Design", alt: "Print Design" },
        { src: "/images/certificate1.png?height=600&width=800&text=Packaging", alt: "Packaging Design" },
      ],
      galleryImages: [
        // {
        //   src: "/placeholder.svg?height=400&width=600&text=Logo+Design",
        //   alt: "Logo Design",
        //   caption: "Logo Design & Branding",
        // },
        // {
        //   src: "/placeholder.svg?height=400&width=600&text=Business+Cards",
        //   alt: "Business Cards",
        //   caption: "Business Cards & Stationery",
        // },
        // {
        //   src: "/placeholder.svg?height=400&width=600&text=Brochures",
        //   alt: "Brochures",
        //   caption: "Marketing Brochures",
        // },
        // {
        //   src: "/placeholder.svg?height=400&width=600&text=Packaging",
        //   alt: "Packaging",
        //   caption: "Product Packaging Design",
        // },
      ],
      features: ["Logo Design", "Brand Identity", "Print Design", "Packaging Design", "Marketing Materials"],
    },
    // {
    //   id: "video-editing",
    //   title: "Video Editing",
    //   description: "Professional video editing services to create engaging visual content for your brand.",
    //   mainImages: [
    //     { src: "/placeholder.svg?height=600&width=800&text=Commercial+Video", alt: "Commercial Video" },
    //     { src: "/placeholder.svg?height=600&width=800&text=Social+Media+Videos", alt: "Social Media Videos" },
    //     { src: "/placeholder.svg?height=600&width=800&text=Motion+Graphics", alt: "Motion Graphics" },
    //   ],
    //   galleryImages: [
    //     // {
    //     //   src: "/placeholder.svg?height=400&width=600&text=Commercial",
    //     //   alt: "Commercial Production",
    //     //   caption: "TV Commercial Production",
    //     // },
    //     // { src: "/placeholder.svg?height=400&width=600&text=Animation", alt: "Animation", caption: "2D & 3D Animation" },
    //     // {
    //     //   src: "/placeholder.svg?height=400&width=600&text=Social+Video",
    //     //   alt: "Social Video",
    //     //   caption: "Social Media Video Content",
    //     // },
    //     // {
    //     //   src: "/placeholder.svg?height=400&width=600&text=Product+Demo",
    //     //   alt: "Product Demo",
    //     //   caption: "Product Demonstration Videos",
    //     // },
    //   ],
    //   features: [
    //     "Commercial Video Production",
    //     "Social Media Videos",
    //     "Motion Graphics",
    //     "Animation",
    //     "Video Optimization",
    //   ],
    // },
    // {
    //   id: "photography",
    //   title: "Photography & Shoots",
    //   description: "High-quality photography services to capture your brand's essence and products.",
    //   mainImages: [
    //     { src: "/placeholder.svg?height=600&width=800&text=Product+Photography", alt: "Product Photography" },
    //     { src: "/placeholder.svg?height=600&width=800&text=Corporate+Photography", alt: "Corporate Photography" },
    //     { src: "/placeholder.svg?height=600&width=800&text=Event+Coverage", alt: "Event Coverage" },
    //   ],
    //   galleryImages: [
    //     // {
    //     //   src: "/placeholder.svg?height=400&width=600&text=Product+Photography",
    //     //   alt: "Product Photography",
    //     //   caption: "Professional Product Photography",
    //     // },
    //     // {
    //     //   src: "/placeholder.svg?height=400&width=600&text=Corporate+Headshots",
    //     //   alt: "Corporate Headshots",
    //     //   caption: "Corporate Team Headshots",
    //     // },
    //     // {
    //     //   src: "/placeholder.svg?height=400&width=600&text=Event+Coverage",
    //     //   alt: "Event Coverage",
    //     //   caption: "Corporate Event Coverage",
    //     // },
    //     // {
    //     //   src: "/placeholder.svg?height=400&width=600&text=Location+Shoot",
    //     //   alt: "Location Shoot",
    //     //   caption: "On-location Photography",
    //     // },
    //     // {
    //     //   src: "/placeholder.svg?height=400&width=600&text=Lifestyle",
    //     //   alt: "Lifestyle Photography",
    //     //   caption: "Lifestyle Product Photography",
    //     // },
    //   ],
    //   features: [
    //     "Product Photography",
    //     "Corporate Photography",
    //     "Event Coverage",
    //     "Lifestyle Photography",
    //     "Photo Retouching",
    //   ],
    // },
  ]

  return (
    <div className="flex min-h-screen flex-col pt-16 md:pt-0">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-black to-gray-900 py-20 md:py-32">
        <div className="absolute inset-0 bg-cover bg-center opacity-100"
          style={{ 
          backgroundImage: "url('/images/background.png')",
          backgroundBlendMode: "overlay" 
          }}></div>
        <AnimatedSection className="container relative z-10 mx-auto px-4 text-center min-h-[250px]">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
            Our{" "}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300 md:text-xl">
            Comprehensive digital solutions tailored to your unique business needs.
          </p>
        </AnimatedSection>
      </section>

      {/* Services Overview */}
      <section className="bg-black py-20">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">What We Offer</h2>
            <p className="mx-auto max-w-2xl text-gray-400">
              From concept to execution, we provide end-to-end digital solutions to help your business thrive in the
              digital landscape.
            </p>
          </AnimatedSection>

          <div className="space-y-32">
            {services.map((service, index) => (
              <div key={service.id} className="space-y-16">
                <div className={`grid gap-12 md:grid-cols-2 ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}>
                  <AnimatedSection className={`${index % 2 === 1 ? "md:col-start-2" : ""}`} delay={0.2}>
                    <div>
                      <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">{service.title}</h2>
                      <p className="mb-6 text-gray-400">{service.description}</p>
                      <ul className="mb-8 space-y-3">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="mr-2 h-5 w-5 flex-shrink-0 text-purple-500" />
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link href={`/services/${service.id}`}>
                        <Button className="bg-gradient-to-r from-purple-500 to-purple-700 text-white transition-all duration-300 hover:from-purple-600 hover:to-purple-800 hover:scale-105">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </AnimatedSection>
                  <div className={`${index % 2 === 1 ? "md:col-start-1" : ""}`}>
                    <ImageCarousel images={service.mainImages} />
                  </div>
                </div>

                {/* <AnimatedSection delay={0.3}>
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-white">Recent {service.title} Projects</h3>
                    <ImageGallery images={service.galleryImages} columns={4} />
                  </div>
                </AnimatedSection> */}

                {index < services.length - 1 && (
                  <div className="flex justify-center">
                    <div className="h-px w-24 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gradient-to-br from-gray-900 to-black py-20">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Our Process</h2>
            <p className="mx-auto max-w-2xl text-gray-400">
              We follow a structured approach to ensure your project is delivered on time and exceeds expectations.
            </p>
          </AnimatedSection>

          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We start by understanding your business, goals, and target audience.",
                image: "/placeholder.svg?height=200&width=200&text=Discovery",
              },
              {
                step: "02",
                title: "Strategy",
                description: "We develop a comprehensive strategy tailored to your specific needs.",
                image: "/placeholder.svg?height=200&width=200&text=Strategy",
              },
              {
                step: "03",
                title: "Creation",
                description: "Our team brings your vision to life with creative excellence.",
                image: "/placeholder.svg?height=200&width=200&text=Creation",
              },
              {
                step: "04",
                title: "Launch & Support",
                description: "We ensure a smooth launch and provide ongoing support.",
                image: "/placeholder.svg?height=200&width=200&text=Launch",
              },
            ].map((item, index) => (
              <AnimatedCard key={item.step} delay={0.2 * (index + 1)}>
                <div className="rounded-lg bg-gray-900 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:translate-y-[-5px]">
                  <div className="mb-4 flex justify-center">
                    <div className="relative h-16 w-16 overflow-hidden rounded-full bg-purple-500/10">
                      <div className="absolute inset-0 flex items-center justify-center rounded-full bg-purple-500/10 text-xl font-bold text-purple-400">
                        {item.step}
                      </div>
                    </div>
                  </div>
                  <h3 className="mb-2 text-center text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-center text-gray-400">{item.description}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-900 to-purple-700 py-16">
        <AnimatedSection className="container mx-auto px-4 text-center md:px-6">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Ready to elevate your digital presence?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-purple-100">
            Let's discuss how our services can help you achieve your business goals.
          </p>
          <Button
            size="lg"
            className="bg-white text-purple-700 transition-all duration-300 hover:bg-gray-100 hover:scale-105"
            onClick={() => router.push("/contact")}
          >
            Get in Touch
          </Button>
        </AnimatedSection>
      </section>
    </div>
  )
}
