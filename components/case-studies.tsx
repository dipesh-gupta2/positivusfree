import { Card } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

export function CaseStudies() {
  const cases = [
    "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
    "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
    "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
  ]

  return (
    <section id="cases" className="container mx-auto px-4 py-16">
      <div className="flex items-center gap-8 mb-12">
        <h2 className="text-3xl md:text-4xl font-medium bg-[#B9FF66] px-2 rounded-md inline-block">Case Studies</h2>
        <p className="text-lg max-w-xl">
          Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
        </p>
      </div>

      <Card className="bg-[#191A23] text-white rounded-3xl p-8 md:p-12">
        <div className="grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/20">
          {cases.map((caseText, index) => (
            <div key={index} className="pt-8 md:pt-0 md:px-8 first:pl-0 last:pr-0">
              <p className="mb-6">{caseText}</p>
              <Link href="#" className="inline-flex items-center gap-2 text-[#B9FF66] hover:gap-3 transition-all">
                <span>Case Info</span>
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          ))}
        </div>
      </Card>
    </section>
  )
}
