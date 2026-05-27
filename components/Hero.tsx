export default function Hero() {
  return (
    <section
      className="h-screen bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1605640840605-14ac1855827b')",
      }}
    >

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 flex items-center justify-center h-full">

        <div className="text-center text-white px-6">

          <h1 className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight">
            Discover Hidden <br />
            Beauty of Pakistan
          </h1>

          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Explore mountains, lakes, valleys, deserts,
            and hidden gems across Pakistan.
          </p>

        <a         
        href="/destinations"         
        className="bg-green-500 hover:bg-green-600 transition px-8 py-4 rounded-full text-lg font-semibold shadow-lg inline-block" 
        >         
        Explore Destinations         
        </a>
        </div>

      </div>

    </section>
  )
}