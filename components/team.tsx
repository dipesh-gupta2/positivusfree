import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Team() {
  const members = [
    {
      name: "John Smith",
      role: "CEO and Founder",
      image: "/ceo-headshot.png",
      description: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    },
    {
      name: "Jane Doe",
      role: "Director of Operations",
      image: "/director-headshot.png",
      description:
        "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
    },
    {
      name: "Michael Brown",
      role: "Senior SEO Specialist",
      image: "/professional-headshot-of-seo-specialist.jpg",
      description:
        "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
    },
    {
      name: "Emily Johnson",
      role: "PPC Manager",
      image: "/professional-headshot-of-ppc-manager.jpg",
      description:
        "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
    },
    {
      name: "Brian Williams",
      role: "Social Media Specialist",
      image: "/professional-headshot-of-social-media-specialist.jpg",
      description:
        "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
    },
    {
      name: "Sarah Kim",
      role: "Content Creator",
      image: "/content-creator-headshot.png",
      description:
        "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex items-center gap-8 mb-12">
        <h2 className="text-3xl md:text-4xl font-medium bg-[#B9FF66] px-2 rounded-md inline-block">Team</h2>
        <p className="text-lg">
          Meet the skilled and experienced team behind our successful digital marketing strategies
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {members.map((member, index) => (
          <Card key={index} className="rounded-3xl border-2 border-[#191A23] p-8">
            <div className="space-y-4">
              <div className="flex items-end gap-4">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <Link href="https://linkedin.com" className="w-8 h-8 mb-2" target="_blank">
                  <img src="/linkedin-icon.png" alt="LinkedIn" className="w-full h-full" />
                </Link>
              </div>
              <div>
                <h3 className="text-xl font-medium">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
              <div className="border-t-2 border-foreground pt-4">
                <p className="text-sm">{member.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="flex justify-end">
        <Button variant="outline" className="rounded-xl bg-transparent">
          See all team
        </Button>
      </div>
    </section>
  )
}
