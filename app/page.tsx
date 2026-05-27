import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Footer from "@/components/Footer"
import DestinationCard from "@/components/DestinationCard"
import ChatWidget from "@/components/ChatWidget"

import { destinations } from "@/data/destinations"

export default function Home() {
  return (
    <div>

      <Navbar />

      <Hero />

      <section className="bg-gray-100 py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-extrabold mb-14 text-center">
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

        </div>

      </section>

      <ChatWidget />

      <Footer />

    </div>
  )
}