export function CompanyLogos() {
  const logos = [
    { name: "Amazon", width: 125 },
    { name: "Dribble", width: 127 },
    { name: "HubSpot", width: 129 },
    { name: "Notion", width: 147 },
    { name: "Netflix", width: 126 },
    { name: "Zoom", width: 111 },
  ]

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 grayscale opacity-70">
        {logos.map((logo) => (
          <img
            key={logo.name}
            src={`/ceholder-svg-height-48-width-.jpg?height=48&width=${logo.width}&query=${logo.name} logo`}
            alt={`${logo.name} logo`}
            className="h-12"
          />
        ))}
      </div>
    </section>
  )
}
