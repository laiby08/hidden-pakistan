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
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      
      <img
        src={image}
        alt={title}
        className="h-56 w-full object-cover"
      />

      <div className="p-5">

        <h2 className="text-2xl font-bold mb-2">
          {title}
        </h2>

        <p className="text-gray-600 mb-4">
          {description}
        </p>

        <button className="bg-black text-white px-4 py-2 rounded-lg">
          Explore
        </button>

      </div>
    </div>
  )
}