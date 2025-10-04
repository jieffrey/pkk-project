import Image from "next/image"

export default function Hero() {
    return(
        <div className="w-full h-full flex items-center justify-between px-12 bg-gradient-to-r from-purple-100 to-blue-100">
            {/* left section */}
            <div className="max-w-lg">
                <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
                    Unieash your Creativity!
                </h1>
                <p className="text-gray-600 mb-6">
                    Turn the smallest beads into wonders that shine brighter than you ever imagined.
                </p>
                <div className="flex gap-4">
                    <button className="px-6 py-3 bg-blue-900 text-white rounded-lg shadow">
                    Explore DIY
                    </button>
                    <button className="px-6 py-3 border border-gray-400 rounded-lg">
                    Learn More
                    </button>
                </div>
            </div>
        </div>
    )
}