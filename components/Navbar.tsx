import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-black text-white shadow-md">

      <div className="max-w-7xl mx-auto flex justify-between items-center p-5">

        <h1 className="text-3xl font-bold text-green-400">
          Hidden Pakistan
        </h1>

        <ul className="flex gap-6 text-lg">

          <li>
            <Link
              href="/"
              className="hover:text-green-400 transition"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/destinations"
              className="hover:text-green-400 transition"
            >
              Destinations
            </Link>
          </li>

          <li>
            <Link
              href="/tips"
              className="hover:text-green-400 transition"
            >
              Travel Tips
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              className="hover:text-green-400 transition"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className="hover:text-green-400 transition"
            >
              Contact
            </Link>
          </li>

        </ul>

      </div>

    </nav>
  )
}