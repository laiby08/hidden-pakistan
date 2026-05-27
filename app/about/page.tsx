import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">

      <Navbar />

      <section className="flex-1 max-w-5xl mx-auto py-20 px-6">

        <h1 className="text-6xl font-bold mb-8">
          About Hidden Pakistan
        </h1>

        <p className="text-lg leading-8 text-gray-700 mb-6">
          Hidden Pakistan is an AI-powered tourism platform
          designed to help travelers discover the unseen
          beauty of Pakistan.
        </p>

        <p className="text-lg leading-8 text-gray-700 mb-6">
          Our mission is to showcase hidden valleys,
          historical places, lakes, mountains, and cultural
          destinations across the country.
        </p>

        <p className="text-lg leading-8 text-gray-700">
          This project is built using Next.js, TypeScript,
          Tailwind CSS, FastAPI, and AI technologies.
        </p>

      </section>

      <Footer />

    </div>
  )
}