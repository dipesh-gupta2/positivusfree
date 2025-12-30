import { Button } from "@/components/ui/button"

export function Proposal() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="bg-[#F3F3F3] rounded-3xl p-8 md:p-12 lg:p-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-medium leading-tight">Let's make things happen</h2>
            <p className="text-lg">
              Contact us today to learn more about how our digital marketing services can help your business grow and
              succeed online.
            </p>
            <Button size="lg" className="rounded-xl bg-[#191A23] text-white hover:bg-[#191A23]/90">
              Get your free proposal
            </Button>
          </div>
          <div>
            <img src="/illustration-of-people-collaborating-on-digital-ma.jpg" alt="Proposal illustration" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}
