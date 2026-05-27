import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function ContactPage() {
  return (
    <div>

      <Navbar />

      <section className="max-w-4xl mx-auto p-10">

        <h1 className="text-5xl font-bold mb-8">
          Contact Us
        </h1>

        <form className="space-y-6">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
         />

          <textarea
            placeholder="Your Message"
            rows={6}
            className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <button
            className="bg-green-500 hover:bg-green-600 transition text-white px-6 py-3 rounded-lg"
          >
            Send Message
          </button>

        </form>

      </section>

      <Footer />

    </div>
  )
}