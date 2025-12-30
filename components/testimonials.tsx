"use client"

import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function Testimonials() {
  const testimonials = [
    {
      text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
      name: "John Smith",
      role: "Marketing director at XYZ",
    },
    {
      text: "We chose Positivus to help us with our SEO and PPC campaigns and have been very impressed with their results. They are knowledgeable, responsive, and truly care about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
      name: "Jane Doe",
      role: "CEO at ABC",
    },
    {
      text: "I recently started working with Positivus and have been very impressed with their professionalism and expertise. They have helped me increase my online visibility and generate more leads for my business. I highly recommend Positivus to anyone looking to improve their online marketing strategy.",
      name: "Alice Johnson",
      role: "Owner at 123",
    },
    {
      text: "Positivus has been a great partner for our company. They are knowledgeable, responsive, and truly care about the success of our business. We have seen a significant increase in website traffic and leads as a result of their efforts. I highly recommend Positivus to any company looking to grow their online presence.",
      name: "Bob Brown",
      role: "Director at XYZ",
    },
    {
      text: "I have been working with Positivus for the past year and have been very impressed with their professionalism and expertise. They have helped me increase my online visibility and generate more leads for my business. I highly recommend Positivus to anyone looking to improve their online marketing strategy.",
      name: "Gupta Patel",
      role: "Content creator",
    },
    {
      text: "Positivus made a huge difference in our online presence. They are knowledgeable, responsive, and truly care about the success of our business. We have seen a significant increase in website traffic and leads as a result of their efforts. I highly recommend Positivus to any company looking to grow their online presence.",
      name: "Sara Johnson",
      role: "Freelancer",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const testimonialsPerPage = 3

  const maxIndex = Math.max(0, testimonials.length - testimonialsPerPage)

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))
  }

  return (
    <section id="testimonials" className="container mx-auto px-4 py-16">
      <div className="flex items-center gap-8 mb-12">
        <h2 className="text-3xl md:text-4xl font-medium bg-[#B9FF66] px-2 rounded-md inline-block">Testimonials</h2>
        <p className="text-lg max-w-2xl">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
        </p>
      </div>

      <div className="bg-[#191A23] rounded-3xl p-8 md:p-12">
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-8"
            style={{ transform: `translateX(-${currentIndex * (100 / testimonialsPerPage)}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="flex-shrink-0 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] bg-white rounded-3xl p-8 border-2 border-[#B9FF66]"
              >
                <div className="space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">"{testimonial.text}"</p>
                  <div>
                    <p className="font-medium text-[#B9FF66]">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-end gap-4 mt-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="rounded-full disabled:opacity-50"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className="rounded-full disabled:opacity-50"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </Button>
        </div>
      </div>
    </section>
  )
}
