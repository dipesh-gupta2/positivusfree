import { Card } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

export function Services() {
  const services = [
    {
      title: "Search Engine Optimization",
      image: "/seo-illustration-with-magnifying-glass-and-search-.jpg",
      bg: "bg-[#F3F3F3]",
      textBg: "bg-[#B9FF66]",
    },
    {
      title: "Pay-per-click advertising",
      image: "/ppc-advertising-illustration-with-cursor-clicking-.jpg",
      bg: "bg-[#B9FF66]",
      textBg: "bg-white",
    },
    {
      title: "Social Media Marketing",
      image: "/social-media-marketing-illustration-with-mobile-ap.jpg",
      bg: "bg-[#191A23]",
      textBg: "bg-white",
      textColor: "text-white",
      iconColor: "white",
    },
    {
      title: "Email Marketing",
      image: "/email-marketing-illustration-with-envelopes.jpg",
      bg: "bg-[#F3F3F3]",
      textBg: "bg-[#B9FF66]",
    },
    {
      title: "Content Creation",
      image: "/content-creation-illustration-with-writing-and-ima.jpg",
      bg: "bg-[#B9FF66]",
      textBg: "bg-white",
    },
    {
      title: "Analytics and Tracking",
      image: "/analytics-illustration-with-charts-and-graphs.jpg",
      bg: "bg-[#191A23]",
      textBg: "bg-[#B9FF66]",
      textColor: "text-white",
      iconColor: "white",
    },
  ]

  return (
    <section id="services" className="container mx-auto px-4 py-16">
      <div className="flex items-center gap-8 mb-12">
        <h2 className="text-3xl md:text-4xl font-medium bg-[#B9FF66] px-2 rounded-md inline-block">Services</h2>
        <p className="text-lg max-w-xl">
          At our digital marketing agency, we offer a range of services to help businesses grow and succeed online.
          These services include
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <Card
            key={index}
            className={`${service.bg} border-2 border-[#191A23] rounded-3xl p-12 ${service.textColor || ""}`}
          >
            <div className="space-y-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3
                    className={`text-2xl md:text-3xl font-medium ${service.textBg} px-2 rounded-md inline-block ${service.textColor ? "text-black" : ""}`}
                  >
                    {service.title.split(" ")[0]}
                  </h3>
                  <h3
                    className={`text-2xl md:text-3xl font-medium ${service.textBg} px-2 rounded-md inline-block mt-2 ${service.textColor ? "text-black" : ""}`}
                  >
                    {service.title.split(" ").slice(1).join(" ")}
                  </h3>
                </div>
                <img src={service.image || "/placeholder.svg"} alt={service.title} className="w-32 md:w-52" />
              </div>

              <Link href="#" className="inline-flex items-center gap-2 hover:gap-3 transition-all">
                <div
                  className={`w-10 h-10 rounded-full ${service.iconColor === "white" ? "bg-white" : "bg-black"} flex items-center justify-center`}
                >
                  <ArrowUpRight
                    className={`w-5 h-5 ${service.iconColor === "white" ? "text-black" : "text-[#B9FF66]"}`}
                  />
                </div>
                <span className={service.iconColor === "white" ? "text-white" : "text-foreground"}>Service Info</span>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
