export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        <h1 className="text-2xl font-bold">
          Hidden Pakistan
        </h1>

        <ul className="flex gap-6">
          <li><a href="/">Home</a></li>
          <li><a href="/destinations">Destinations</a></li>
          <li><a href="/tips">Travel Tips</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>

      </div>
    </nav>
  )
}