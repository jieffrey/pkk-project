export default function CategorySection() {
    return (
        <section className="py-10 text-center bg-white">
            <h2 className="text-2xl font-bold text-black">Choose your Category</h2>
            <p className="text-gray-500">
                Each creation is a piece of someone’s passion.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                {/* Card 1 */}
                <div className="min-w-[200px] max-w-[250px] mx-auto rounded-lg overflow-hidden shadow hover:scale-105 transition bg-gradient-to-r from-purple-100 to-blue-100">
                    <img
                        src="/images/aksesori1.jpg"
                        alt="Icon"
                        className="w-full h-40 object-cover"
                    />
                    <h3 className="py-2 font-bold text-black">Aksesoris</h3>
                </div>

                {/* Card 2 */}
                <div className="min-w-[200px] max-w-[250px] mx-auto rounded-lg overflow-hidden shadow hover:scale-105 transition bg-gradient-to-r from-purple-100 to-blue-100">
                    <img
                        src="/images/aksesori2.jpg"
                        alt="Icon2"
                        className="w-full h-40 object-cover"
                    />
                    <h3 className="py-2 font-bold text-black">Aksesoris</h3>
                </div>

                {/* Card 3 */}
                <div className="w-115 md:min-w-[200px] md:max-w-[200px] mx-auto col-span-2 md:col-span-1 rounded-lg overflow-hidden shadow hover:scale-105 transition bg-gradient-to-r from-purple-100 to-blue-100">
                    <img
                        src="/images/placeholder.jpg"
                        alt="Icon3"
                        className="w-full h-40 object-cover"
                    />
                    <h3 className="py-2 font-bold text-black">Coming Soon</h3>
                </div>
            </div>
        </section>
    );
}
