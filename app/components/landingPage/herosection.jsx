export default function Hero() {
    return (
    <section className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-10 bg-gradient-to-r from-purple-100 to-blue-100">
      {/* left section */}
        <div className="max-w-lg text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-snug">
            Unleash your Creativity!
        </h1>
        <p className="text-gray-600 mb-6 text-sm md:text-base">
            Turn the smallest beads into wonders that shine brighter than you ever imagined.
        </p>
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 sm:gap-4">
            <button className="px-6 py-3 bg-blue-900 text-white rounded-full shadow text-sm md:text-base">
            Explore DIY
            </button>
            <button className="px-6 py-3 border text-blue-900 border-blue-900 rounded-full text-sm md:text-base">
            Learn More
            </button>
        </div>
        </div>

      {/* right section */}
        <div className="relative w-64 h-80 md:w-80 md:h-[420px] flex items-center justify-center">
        <div className="absolute w-40 h-64 md:w-52 md:h-80 bg-[#9F9CCA] rounded-full shadow-lg"></div>
        </div>
    </section>
    );
}
