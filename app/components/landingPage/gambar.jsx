export default function GallerySection() {
    return (
        <section className="py-10 bg-white">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 px-4">

                {/* Kiri besar */}
                <div className="col-span-2 md:col-span-1 row-span-2 bg-gray-300 rounded-lg h-64 md:h-96 shadow"></div>

                {/* Kanan atas */}
                <div className="bg-gray-300 rounded-lg h-28 md:h-40 shadow"></div>
                <div className="bg-gray-300 rounded-lg h-28 md:h-40 shadow"></div>

                {/* Kanan bawah */}
                <div className="col-span-2 md:col-span-2 bg-gray-300 rounded-lg h-32 md:h-48 shadow"></div>
            </div>
        </section>
    );
}
