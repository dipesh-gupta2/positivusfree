import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { CompanyLogos } from "@/components/company-logos"
import { Services } from "@/components/services"
import { Proposal } from "@/components/proposal"
import { CaseStudies } from "@/components/case-studies"
import { WorkingProcess } from "@/components/working-process"
import { Team } from "@/components/team"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <CompanyLogos />
      <Services />
      <Proposal />
      <CaseStudies />
      <WorkingProcess />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}
