import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import DestinationCard from "@/components/DestinationCard"

import { destinations } from "@/data/destinations"

export default function DestinationsPage() {
  return (
    <div>

      <Navbar />

      <section className="max-w-7xl mx-auto p-10">

        <h1 className="text-5xl font-bold mb-10 text-center">
          Explore Destinations
        </h1>

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

      <Footer />

    </div>
  )
}