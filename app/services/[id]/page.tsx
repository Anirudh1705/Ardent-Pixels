import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle, Star } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { AnimatedCard } from "@/components/animated-card"
import { ImageGallery } from "@/components/image-gallery"
import { notFound } from "next/navigation"

// This would normally come from a database or API
const services = {
  "digital-marketing": {
    title: "Digital Marketing",
    subtitle: "Grow your online presence and reach your target audience",
    description:
      "Our digital marketing services help businesses of all sizes establish a strong online presence, reach their target audience, and achieve their marketing goals. We combine data-driven strategies with creative excellence to deliver exceptional results across all digital channels.",
    heroImage: "/images/background.png?height=800&width=1600&text=Digital+Marketing+Services",
    features: [
      "Comprehensive digital marketing strategy development",
      "Social media marketing and management",
      "Search engine optimization (SEO)",
      "Pay-per-click (PPC) advertising campaigns",
      "Content marketing and creation",
      "Email marketing campaigns and automation",
      "Analytics and performance reporting",
    ],
    benefits: [
      "Increase brand awareness and visibility",
      "Generate high-quality leads and conversions",
      "Improve return on marketing investment (ROMI)",
      "Build stronger customer relationships",
      "Make data-driven marketing decisions",
    ],
    portfolio: [
      // {
      //   src: "/placeholder.svg?height=500&width=700&text=Social+Campaign+1",
      //   alt: "Social Media Campaign",
      //   caption: "Social Media Campaign for Tech Company",
      // },
      // {
      //   src: "/placeholder.svg?height=500&width=700&text=SEO+Project",
      //   alt: "SEO Project",
      //   caption: "SEO Optimization for E-commerce Website",
      // },
      // {
      //   src: "/placeholder.svg?height=500&width=700&text=PPC+Campaign",
      //   alt: "PPC Campaign",
      //   caption: "Google Ads Campaign for SaaS Business",
      // },
      // {
      //   src: "/placeholder.svg?height=500&width=700&text=Email+Marketing",
      //   alt: "Email Marketing",
      //   caption: "Email Marketing Automation for Retail Brand",
      // },
      // {
      //   src: "/placeholder.svg?height=500&width=700&text=Content+Strategy",
      //   alt: "Content Strategy",
      //   caption: "Content Marketing Strategy for B2B Company",
      // },
      // {
      //   src: "/placeholder.svg?height=500&width=700&text=Analytics+Dashboard",
      //   alt: "Analytics Dashboard",
      //   caption: "Custom Analytics Dashboard for Marketing Metrics",
      // },
    ],
    testimonials: [
      {
        quote:
          "The digital marketing strategy Ardent Pixels developed for us transformed our online presence and led to a 150% increase in qualified leads.",
        author: "Sarah Johnson",
        position: "Marketing Director, TechSolutions Inc.",
        company: "TechSolutions Inc.",
        avatar: "/placeholder.svg?height=100&width=100&text=SJ",
      },
      {
        quote:
          "Their SEO expertise helped us achieve first-page rankings for our most valuable keywords, resulting in a significant boost in organic traffic and sales.",
        author: "Michael Chen",
        position: "E-commerce Manager",
        company: "StyleHub",
        avatar: "/placeholder.svg?height=100&width=100&text=MC",
      },
    ],
  },
  development: {
    title: "Web & App Development",
    subtitle: "Custom development solutions for your unique business needs",
    description:
      "Our development team creates custom web and mobile solutions that help businesses streamline operations, improve customer experiences, and achieve their digital goals. From responsive websites to complex applications, we deliver reliable, scalable, and user-friendly solutions.",
    heroImage: "/images/background.png?height=800&width=1600&text=Development+Services",
    features: [
      "Custom website development",
      "E-commerce solutions",
      "Mobile app development (iOS & Android)",
      "Progressive web applications (PWAs)",
      "Web application development",
      "API development and integration",
      "Database design and development",
    ],
    benefits: [
      "Create seamless user experiences across all devices",
      "Build scalable solutions that grow with your business",
      "Improve operational efficiency and productivity",
      "Enhance customer engagement and satisfaction",
      "Stay ahead of the competition with innovative technology",
    ],
    portfolio: [
      // {
      //   src: "/placeholder.svg?height=500&width=700&text=E-commerce+Site",
      //   alt: "E-commerce Website",
      //   caption: "Custom E-commerce Platform for Fashion Brand",
      // },
      // {
      //   src: "/placeholder.svg?height=500&width=700&text=Mobile+App",
      //   alt: "Mobile App",
      //   caption: "iOS and Android App for Fitness Tracking",
      // },
      // {
      //   src: "/placeholder.svg?height=500&width=700&text=Web+Application",
      //   alt: "Web Application",
      //   caption: "Financial Management Web Application",
      // },
      // {
      //   src: "/placeholder.svg?height=500&width=700&text=Dashboard",
      //   alt: "Dashboard",
      //   caption: "Custom Analytics Dashboard for Healthcare Provider",
      // },
      // {
      //   src: "/placeholder.svg?height=500&width=700&text=API+Integration",
      //   alt: "API Integration",
      //   caption: "Third-party API Integration for Travel Platform",
      // },
      // {
      //   src: "/placeholder.svg?height=500&width=700&text=PWA",
      //   alt: "Progressive Web App",
      //   caption: "Progressive Web App for News Organization",
      // },
    ],
    testimonials: [
      {
        quote:
          "Ardent Pixels built our e-commerce platform from the ground up, delivering a solution that not only looks beautiful but also drove a 35% increase in online sales.",
        author: "David Rodriguez",
        position: "CEO",
        company: "Artisan Goods Co.",
        avatar: "/placeholder.svg?height=100&width=100&text=DR",
      },
      {
        quote:
          "Their development team created a mobile app that exceeded our expectations. The app has received rave reviews from our users and has significantly improved our customer engagement.",
        author: "Jennifer Liu",
        position: "Product Manager",
        company: "HealthTrack",
        avatar: "/placeholder.svg?height=100&width=100&text=JL",
      },
    ],
  },
  // Additional services would be defined similarly
  "graphic-design": {
    title: "Graphic Design",
    subtitle: "Creative visual solutions to enhance your brand identity",
    description:
      "Our graphic design services help businesses create compelling visual assets that communicate their brand message effectively. From logo design to marketing materials, we create visually stunning designs that capture attention and drive engagement.",
    heroImage: "/images/background.png?height=800&width=1600&text=Graphic+Design+Services",
    features: [
      "Logo and brand identity design",
      "Print design (brochures, business cards, etc.)",
      "Packaging design",
      "Marketing and advertising materials",
      "Social media graphics",
      "Infographics and data visualization",
      "Publication design",
    ],
    benefits: [
      "Establish a strong, recognizable brand identity",
      "Communicate complex information visually",
      "Create consistent brand experiences across all touchpoints",
      "Stand out from competitors with professional design",
      "Increase engagement with visually appealing content",
    ],
    portfolio: [
      // {
      //   src: "/placeholder.svg?height=500&width=700&text=Logo+Design",
      //   alt: "Logo Design",
      //   caption: "Brand Identity for Technology Startup",
      // },
      // {
      //   src: "/placeholder.svg?height=500&width=700&text=Packaging",
      //   alt: "Packaging Design",
      //   caption: "Product Packaging for Organic Food Brand",
      // },
      // {
      //   src: "/placeholder.svg?height=500&width=700&text=Brochure",
      //   alt: "Brochure Design",
      //   caption: "Corporate Brochure for Financial Services",
      // },
      // {
      //   src: "/placeholder.svg?height=500&width=700&text=Social+Graphics",
      //   alt: "Social Media Graphics",
      //   caption: "Social Media Campaign Graphics",
      // },
      // {
      //   src: "/placeholder.svg?height=500&width=700&text=Annual+Report",
      //   alt: "Annual Report",
      //   caption: "Annual Report Design for Nonprofit",
      // },
      // {
      //   src: "/placeholder.svg?height=500&width=700&text=Infographic",
      //   alt: "Infographic",
      //   caption: "Data Visualization for Research Findings",
      // },
    ],
    testimonials: [
      {
        quote:
          "The brand identity Ardent Pixels created for our startup perfectly captures our vision and values. Their design work has been instrumental in establishing our market presence.",
        author: "Alex Thompson",
        position: "Founder",
        company: "NovaTech",
        avatar: "/placeholder.svg?height=100&width=100&text=AT",
      },
      {
        quote:
          "Their packaging design for our product line led to a 40% increase in retail sales. The designs were not only beautiful but also effective in communicating our brand story.",
        author: "Emma Garcia",
        position: "Marketing Manager",
        company: "Pure Harvest",
        avatar: "/placeholder.svg?height=100&width=100&text=EG",
      },
    ],
  },
  "video-editing": {
    title: "Video Production & Editing",
    subtitle: "Engaging video content to tell your brand's story",
    description:
      "Our video production and editing services help businesses create compelling visual content that engages audiences and communicates their message effectively. From commercials to social media videos, we deliver high-quality video content that drives results.",
    heroImage: "/images/background.png?height=800&width=1600&text=Video+Production+Services",
    features: [
      "Commercial video production",
      "Social media videos",
      "Corporate videos and testimonials",
      "Product demonstrations",
      "Motion graphics and animation",
      "Event video coverage",
      "Video editing and post-production",
    ],
    benefits: [
      "Increase engagement with dynamic visual content",
      "Explain complex products or services clearly",
      "Build emotional connections with your audience",
      "Enhance social media presence with shareable content",
      "Showcase your brand's personality and values",
    ],
    portfolio: [
      // {
      //   src: "/placeholder.svg?height=500&width=700&text=Commercial",
      //   alt: "Commercial",
      //   caption: "TV Commercial for Retail Brand",
      // },
      // {
      //   src: "/placeholder.svg?height=500&width=700&text=Social+Video",
      //   alt: "Social Video",
      //   caption: "Instagram Video Campaign for Fashion Brand",
      // },
      // {
      //   src: "/placeholder.svg?height=500&width=700&text=Corporate+Video",
      //   alt: "Corporate Video",
      //   caption: "Corporate Overview Video for Tech Company",
      // },
      // {
      //   src: "/placeholder.svg?height=500&width=700&text=Product+Demo",
      //   alt: "Product Demo",
      //   caption: "Product Demonstration for Consumer Electronics",
      // },
      // {
      //   src: "/placeholder.svg?height=500&width=700&text=Animation",
      //   alt: "Animation",
      //   caption: "Animated Explainer Video for SaaS Product",
      // },
      // {
      //   src: "/placeholder.svg?height=500&width=700&text=Event+Coverage",
      //   alt: "Event Coverage",
      //   caption: "Conference Highlight Video",
      // },
    ],
    testimonials: [
      {
        quote:
          "The video campaign Ardent Pixels created for our product launch generated over 1 million views and significantly boosted our brand awareness.",
        author: "Chris Martinez",
        position: "Brand Director",
        company: "InnovateTech",
        avatar: "/placeholder.svg?height=100&width=100&text=CM",
      },
      {
        quote:
          "Their video production team captured the essence of our brand beautifully. The corporate video they created has been an invaluable tool for our sales team.",
        author: "Rebecca Kim",
        position: "Marketing VP",
        company: "GlobalSolutions",
        avatar: "/placeholder.svg?height=100&width=100&text=RK",
      },
    ],
  },
  photography: {
    title: "Photography & Shoots",
    subtitle: "Professional photography to showcase your brand and products",
    description:
      "Our photography services help businesses capture high-quality images that showcase their products, people, and brand in the best light. From product photography to corporate headshots, we deliver professional images that make a lasting impression.",
    heroImage: "/placeholder.svg?height=800&width=1600&text=Photography+Services",
    features: [
      "Product photography",
      "Corporate photography and headshots",
      "Event photography",
      "Lifestyle and brand photography",
      "Interior and architectural photography",
      "Food and beverage photography",
      "Photo retouching and editing",
    ],
    benefits: [
      "Showcase products in their best light",
      "Create a professional image for your team",
      "Build a library of high-quality visual assets",
      "Enhance marketing materials with authentic imagery",
      "Stand out with professional visual content",
    ],
    portfolio: [
      // {
      //   src: "/placeholder.svg?height=500&width=700&text=Product+Photography",
      //   alt: "Product Photography",
      //   caption: "Product Photography for E-commerce",
      // },
      // {
      //   src: "/placeholder.svg?height=500&width=700&text=Corporate+Headshots",
      //   alt: "Corporate Headshots",
      //   caption: "Executive Team Headshots",
      // },
      // {
      //   src: "/placeholder.svg?height=500&width=700&text=Event+Photos",
      //   alt: "Event Photography",
      //   caption: "Corporate Event Coverage",
      // },
      // {
      //   src: "/placeholder.svg?height=500&width=700&text=Lifestyle",
      //   alt: "Lifestyle Photography",
      //   caption: "Lifestyle Brand Photography",
      // },
      // {
      //   src: "/placeholder.svg?height=500&width=700&text=Architecture",
      //   alt: "Architectural Photography",
      //   caption: "Office Space and Architecture",
      // },
      // {
      //   src: "/placeholder.svg?height=500&width=700&text=Food",
      //   alt: "Food Photography",
      //   caption: "Food and Beverage Photography for Restaurant",
      // },
    ],
    testimonials: [
      {
        quote:
          "The product photography transformed our online store. We've seen a 25% increase in conversion rates since implementing the new images.",
        author: "Daniel Brown",
        position: "E-commerce Director",
        company: "LuxuryGoods",
        avatar: "/placeholder.svg?height=100&width=100&text=DB",
      },
      {
        quote:
          "Their team captured our corporate event beautifully. The photos not only documented the event but really conveyed the energy and excitement of the day.",
        author: "Sophia Wong",
        position: "Events Manager",
        company: "Global Enterprises",
        avatar: "/placeholder.svg?height=100&width=100&text=SW",
      },
    ],
  },
}

export default function ServicePage({ params }: { params: { id: string } }) {
  const service = services[params.id as keyof typeof services]

  if (!service) {
    return notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-black to-gray-900 py-20 md:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${service.heroImage})` }}
        ></div>
        <AnimatedSection className="container relative z-10 mx-auto px-4 text-center md:px-6">
          <Link
            href="/services"
            className="mb-6 inline-flex items-center text-gray-400 transition-colors duration-300 hover:text-purple-400"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Link>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-6xl">
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              {service.title}
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300 md:text-xl">{service.subtitle}</p>
        </AnimatedSection>
      </section>

      {/* Overview Section */}
      <section className="bg-black py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <AnimatedSection delay={0.2}>
              <div>
                <h2 className="mb-6 text-3xl font-bold text-white">Service Overview</h2>
                <p className="mb-8 text-gray-400 leading-relaxed">{service.description}</p>
                <h3 className="mb-4 text-xl font-semibold text-white">Why Choose Our {service.title} Services?</h3>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 flex-shrink-0 text-purple-500" />
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedCard delay={0.4}>
              <div className="rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-1">
                <div className="h-full rounded-lg bg-gray-900 p-6">
                  <h3 className="mb-4 text-xl font-semibold text-white">What We Offer</h3>
                  <ul className="space-y-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-purple-500/10">
                          <CheckCircle className="h-5 w-5 text-purple-500" />
                        </div>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="bg-gradient-to-br from-gray-900 to-black py-20">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">Our {service.title} Portfolio</h2>
            <p className="mx-auto max-w-2xl text-gray-400">
              Explore some of our recent {service.title.toLowerCase()} projects and see how we've helped businesses
              achieve their goals.
            </p>
          </AnimatedSection>

          <ImageGallery images={service.portfolio} columns={3} />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-black py-20">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">Client Testimonials</h2>
            <p className="mx-auto max-w-2xl text-gray-400">
              Don't just take our word for it. Here's what our clients have to say about our{" "}
              {service.title.toLowerCase()} services.
            </p>
          </AnimatedSection>

          <div className="grid gap-8 md:grid-cols-2">
            {service.testimonials.map((testimonial, index) => (
              <AnimatedCard key={index} delay={0.2 * (index + 1)}>
                <div className="rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-1 h-full">
                  <div className="h-full rounded-lg bg-gray-900 p-6">
                    <div className="mb-6 flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-5 w-5 fill-purple-500 text-purple-500" />
                      ))}
                    </div>
                    <p className="mb-6 text-gray-300 italic leading-relaxed">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                        <Image
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.author}
                          width={48}
                          height={48}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-white">{testimonial.author}</p>
                        <p className="text-sm text-gray-400">
                          {testimonial.position}, {testimonial.company}
                        </p>
                      </div>
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
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Ready to get started?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-purple-100">
            Let's discuss your {service.title.toLowerCase()} needs and how we can help you achieve your goals.
          </p>
          <Button
            size="lg"
            className="bg-white text-purple-700 transition-all duration-300 hover:bg-gray-100 hover:scale-105"
          >
            Get in Touch
          </Button>
        </AnimatedSection>
      </section>
    </div>
  )
}
