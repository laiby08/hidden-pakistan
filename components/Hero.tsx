export default function Hero() {
  return (
    <section className="h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1605640840605-14ac1855827b')",
      }}
    >

      <div className="text-center bg-black/50 p-10 rounded-xl">
        
        <h1 className="text-6xl font-bold mb-4">
          Discover Hidden Pakistan
        </h1>

        <p className="text-xl mb-6">
          Explore the unseen beauty of Pakistan
        </p>

        <button className="bg-green-500 px-6 py-3 rounded-lg hover:bg-green-600">
          Explore Now
        </button>

      </div>
    </section>
  )
}