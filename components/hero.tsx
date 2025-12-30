import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
            Navigating the digital landscape for success
          </h1>
          <p className="text-lg text-muted-foreground">
            Our digital marketing agency helps businesses grow and succeed online through a range of services including
            SEO, PPC, social media marketing, and content creation.
          </p>
          <Button size="lg" className="rounded-xl bg-foreground text-background hover:bg-foreground/90">
            Book a consultation
          </Button>
        </div>
        <div className="relative">
          <img src="/digital-marketing-illustration-with-people-working.jpg" alt="Hero Illustration" className="w-full h-auto" />
        </div>
      </div>
    </section>
  )
}
