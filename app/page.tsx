import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Footer from "@/components/Footer"
import DestinationCard from "@/components/DestinationCard"

import { destinations } from "@/data/destinations"

export default function Home() {
  return (
    <div>

      <Navbar />

      <Hero />

      <Footer />

      <section className="max-w-7xl mx-auto p-10">

        <h2 className="text-4xl font-bold mb-10 text-center">
          Featured Destinations
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {destinations.map((place, index) => (
            <DestinationCard
              key={index}
              title={place.title}
              image={place.image}
              description={place.description}
            />
          ))}

        </div>

      </section>

    </div>
  )
}