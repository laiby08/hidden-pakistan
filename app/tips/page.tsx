import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function TipsPage() {
  return (
    <div>

      <Navbar />

      <section className="max-w-5xl mx-auto p-10">

        <h1 className="text-5xl font-bold mb-8">
          Travel Tips
        </h1>

        <div className="space-y-8">

          <div className="bg-white shadow-lg hover:shadow-2xl transition p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-2">
              Best Time to Visit Northern Areas
            </h2>

            <p>
              March to October is considered the best
              season for tourism in northern Pakistan.
            </p>
          </div>

          <div className="bg-white shadow-lg hover:shadow-2xl transition p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-2">
              Pack Warm Clothes
            </h2>

            <p>
              Mountain areas can become cold even during summer.
            </p>
          </div>

          <div className="bg-white shadow-lg hover:shadow-2xl transition p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-2">
              Respect Local Culture
            </h2>

            <p>
              Always respect traditions and local communities.
            </p>
          </div>

        </div>

      </section>

      <Footer />

    </div>
  )
}