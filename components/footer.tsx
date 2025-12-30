import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#191A23] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Link href="/" className="flex items-center mb-6">
              <svg width="144" height="24" viewBox="0 0 144 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="#B9FF66" />
                <text x="32" y="18" fill="#fff" fontSize="20" fontWeight="600" fontFamily="system-ui, sans-serif">
                  Positivus
                </text>
              </svg>
            </Link>
          </div>

          <nav className="space-y-3">
            <Link href="#about" className="block hover:underline">
              About us
            </Link>
            <Link href="#services" className="block hover:underline">
              Services
            </Link>
            <Link href="#cases" className="block hover:underline">
              Use Cases
            </Link>
            <Link href="#pricing" className="block hover:underline">
              Pricing
            </Link>
            <Link href="#blog" className="block hover:underline">
              Blog
            </Link>
          </nav>

          <div className="flex gap-4">
            <Link href="https://facebook.com" target="_blank">
              <img src="/facebook-icon-white.jpg" alt="Facebook" className="w-8 h-8" />
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <img src="/linkedin-icon-white.png" alt="LinkedIn" className="w-8 h-8" />
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <img src="/twitter-icon-white.png" alt="Twitter" className="w-8 h-8" />
            </Link>
          </div>

          <div>
            <h3 className="font-medium mb-3">Contact us</h3>
            <div className="space-y-2 text-sm">
              <p>Email: examplemail.com</p>
              <p>Phone: +123 456 789</p>
              <p>Address: 1234 Street Name, City Name, Country Name</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              2024 Positivus - Made With{" "}
              <Link href="https://astro.build" className="underline" target="_blank">
                Astro
              </Link>{" "}
              by{" "}
              <Link href="https://manulthanura.com" className="underline" target="_blank">
                Manul
              </Link>{" "}
              Credits ({" "}
              <Link href="https://www.olgaskuja.design/" className="underline" target="_blank">
                Olga
              </Link>
              ,{" "}
              <Link href="https://esteban-vasquez.netlify.app/" className="underline" target="_blank">
                Esteban
              </Link>
              ) &{" "}
              <Link href="https://creativecommons.org/licenses/by/4.0/" className="underline" target="_blank">
                Licence
              </Link>
            </p>
            <div className="flex gap-4 text-sm">
              <Link href="#" className="hover:underline">
                Subscribe to news
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
