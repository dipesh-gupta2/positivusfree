"use client"

import { Card } from "@/components/ui/card"
import { useState } from "react"
import { Minus, Plus } from "lucide-react"

export function WorkingProcess() {
  const [openStep, setOpenStep] = useState<number | null>(0)

  const steps = [
    {
      number: "01",
      title: "Consultation",
      description:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      number: "02",
      title: "Research",
      description:
        "After the consultation, we will conduct thorough research to identify your target audience, competitors, and industry trends. This will help us develop a comprehensive strategy to achieve your business goals.",
    },
    {
      number: "03",
      title: "Implementation",
      description:
        "Once the research is complete, we will begin implementing the strategy. This may include optimizing your website, creating content, and launching marketing campaigns. Our team will work diligently to ensure that all tasks are completed on time and within budget.",
    },
    {
      number: "04",
      title: "Optimization",
      description:
        "After the initial implementation, we will continuously monitor and optimize your marketing efforts to ensure maximum results. This may involve adjusting ad campaigns, refining content, and analyzing data to identify areas for improvement.",
    },
    {
      number: "05",
      title: "Reporting",
      description:
        "Throughout the process, we will provide regular reports on the performance of your marketing campaigns. This will allow you to track progress, measure success, and make informed decisions about future strategies.",
    },
    {
      number: "06",
      title: "Improvement",
      description:
        "Based on the data and insights gathered from the reports, we will make recommendations for further improvement. This may involve refining existing strategies, exploring new opportunities, or adjusting tactics to better align with your business goals.",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex items-center gap-8 mb-12">
        <h2 className="text-3xl md:text-4xl font-medium bg-[#B9FF66] px-2 rounded-md inline-block">
          Our Working Process
        </h2>
        <p className="text-lg">Step-by-Step Guide to Achieving Your Business Goals</p>
      </div>

      <div className="space-y-6">
        {steps.map((step, index) => (
          <Card
            key={index}
            className={`rounded-3xl border-2 border-[#191A23] overflow-hidden transition-colors ${
              openStep === index ? "bg-[#B9FF66]" : "bg-[#F3F3F3]"
            }`}
          >
            <button
              onClick={() => setOpenStep(openStep === index ? null : index)}
              className="w-full p-8 md:p-12 flex items-center justify-between gap-4 text-left"
            >
              <div className="flex items-center gap-6">
                <span className="text-4xl md:text-5xl font-medium">{step.number}</span>
                <h3 className="text-xl md:text-2xl font-medium">{step.title}</h3>
              </div>
              <div className="w-12 h-12 rounded-full bg-[#F3F3F3] flex items-center justify-center flex-shrink-0">
                {openStep === index ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
              </div>
            </button>

            {openStep === index && (
              <div className="px-8 md:px-12 pb-8 md:pb-12">
                <div className="border-t-2 border-foreground pt-6">
                  <p className="text-lg">{step.description}</p>
                </div>
              </div>
            )}
          </Card>
        ))}
      </div>
    </section>
  )
}
