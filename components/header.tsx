import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <svg width="144" height="24" viewBox="0 0 144 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#B9FF66" />
            <text x="32" y="18" fill="#000" fontSize="20" fontWeight="600" fontFamily="system-ui, sans-serif">
              Positivus
            </text>
          </svg>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="#about" className="text-sm hover:underline">
            About us
          </Link>
          <Link href="#services" className="text-sm hover:underline">
            Services
          </Link>
          <Link href="#cases" className="text-sm hover:underline">
            Use Cases
          </Link>
          <Link href="#pricing" className="text-sm hover:underline">
            Pricing
          </Link>
          <Link href="#blog" className="text-sm hover:underline">
            Blog
          </Link>
          <Button variant="outline" className="rounded-xl bg-transparent">
            Request a quote
          </Button>
        </nav>
      </div>
    </header>
  )
}
