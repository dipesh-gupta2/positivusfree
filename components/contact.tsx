"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export function Contact() {
  const [formType, setFormType] = useState<"hi" | "quote">("hi")

  return (
    <section id="contact" className="container mx-auto px-4 py-16">
      <div className="flex items-center gap-8 mb-12">
        <h2 className="text-3xl md:text-4xl font-medium bg-[#B9FF66] px-2 rounded-md inline-block">Contact Us</h2>
        <p className="text-lg">Connect with Us: Let's Discuss Your Digital Marketing Needs</p>
      </div>

      <Card className="rounded-3xl border-2 border-[#191A23] bg-[#F3F3F3] overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 md:p-12">
            <div className="flex gap-4 mb-8">
              <button
                onClick={() => setFormType("hi")}
                className={`px-6 py-3 rounded-xl transition-colors ${
                  formType === "hi" ? "bg-[#B9FF66] text-foreground" : "bg-white text-foreground"
                }`}
              >
                Say Hi
              </button>
              <button
                onClick={() => setFormType("quote")}
                className={`px-6 py-3 rounded-xl transition-colors ${
                  formType === "quote" ? "bg-[#B9FF66] text-foreground" : "bg-white text-foreground"
                }`}
              >
                Get a Quote
              </button>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name*</label>
                <Input placeholder="Name" className="rounded-xl border-2 border-[#191A23] bg-white" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email*</label>
                <Input type="email" placeholder="Email" className="rounded-xl border-2 border-[#191A23] bg-white" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message*</label>
                <Textarea
                  placeholder="Message"
                  rows={6}
                  className="rounded-xl border-2 border-[#191A23] bg-white resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full rounded-xl bg-[#191A23] text-white hover:bg-[#191A23]/90"
                size="lg"
              >
                Send
              </Button>
            </form>
          </div>

          <div className="relative hidden md:block">
            <img
              src="/abstract-illustration-of-communication-and-connect.jpg"
              alt="Contact decoration"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </Card>
    </section>
  )
}
