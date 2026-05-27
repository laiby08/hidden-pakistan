type Props = {
  title: string
  image: string
  description: string
}

export default function DestinationCard({
  title,
  image,
  description,
}: Props) {
  return (
    <div
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2"
    >

      <img
        src={image}
        alt={title}
        className="h-64 w-full object-cover"
      />

      <div className="p-6">

        <h2 className="text-3xl font-bold mb-3">
          {title}
        </h2>

        <p className="text-gray-600 mb-5 leading-7">
          {description}
        </p>

        <button
          className="bg-black hover:bg-green-500 transition text-white px-5 py-3 rounded-lg"
        >
          Explore More
        </button>

      </div>

    </div>
  )
}