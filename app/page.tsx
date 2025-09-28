import Link from "next/link";

export const metadata = {
  title: "SpareCircle  Buy & Sell Cars, Bikes & Spare Parts",
  description:
    "SpareCircle is your local marketplace to buy and sell cars, bikes, and spare parts easily and safely.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Buy & Sell Cars, Bikes & Spare Parts
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Connect with local buyers and sellers easily and safely.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/listings">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition">
                Browse Listings
              </button>
            </Link>
            <Link href="/post-ad">
              <button className="border border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600 transition">
                Post Your Ad
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Browse by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              href="/listings?category=Cars"
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center"
            >
              <h3 className="text-xl font-semibold mb-2">Cars</h3>
              <p className="text-gray-600">Find your dream car or sell your own.</p>
            </Link>
            <Link
              href="/listings?category=Bikes"
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center"
            >
              <h3 className="text-xl font-semibold mb-2">Bikes</h3>
              <p className="text-gray-600">Buy or sell motorcycles quickly.</p>
            </Link>
            <Link
              href="/listings?category=SpareParts"
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center"
            >
              <h3 className="text-xl font-semibold mb-2">Spare Parts</h3>
              <p className="text-gray-600">Find parts for your vehicle easily.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Post Your Ad</h3>
              <p className="text-gray-600">Quickly list your vehicle or spare part.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Connect Locally</h3>
              <p className="text-gray-600">Reach local buyers and sellers easily.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Safe & Secure</h3>
              <p className="text-gray-600">Communicate and trade with confidence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Start Selling or Buying Today</h2>
        <Link href="/post-ad">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition">
            Post Your Ad
          </button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} SpareCircle. All rights reserved.</p>
      </footer>
    </main>
  );
}
