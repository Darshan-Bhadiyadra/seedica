import Image from "next/image";
import Link from "next/link";

export default function ProductsPage() {
  const products = [
    { 
      id: 1, 
      name: "SEEDICA POWER PLUS", 
      price: "₹1130", 
      desc: "​Power Plus is a treasure trove of the highest organic carbon and nutrients, produced with modern technology.", 
      category: "Nutrients", 
      image: "/images/1-POWRPLUS.png" 
    },
    { 
      id: 2, 
      name: "SEEDICA BIO DAP", 
      price: "₹850", 
      desc: "Essential phosphorus for healthy root development and crop yield.", 
      category: "Fertilizer", 
      image: "/images/2-Bio DAP.png" 
    },
    // Add your other 13 products here...
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-12 px-4 md:px-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our SEEDICA Products</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our range of high-quality agricultural products designed to increase yield and sustainability.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col"
          >
            {/* Image Section */}
            <div className="relative h-64 w-full overflow-hidden bg-white p-4 border-b border-gray-50">
              {product.image ? (
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-500"
                  priority={product.id <= 4}
                />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400">
                  No Image Found
                </div>
              )}
              
              <div className="absolute top-3 left-3">
                <span className="bg-emerald-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  {product.category}
                </span>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-emerald-700 transition-colors">
                {product.name}
              </h3>
              <p className="text-gray-500 text-sm mb-4 line-clamp-2 leading-relaxed">
                {product.desc}
              </p>
              
              <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-50">
                <div>
                  <span className="text-xs text-gray-400 block uppercase font-semibold tracking-tighter">Price</span>
                  <span className="text-2xl font-bold text-emerald-600">{product.price}</span>
                </div>

                {/* UPDATED: Link to the dynamic details page */}
                <Link href={`/products/${product.id}`}>
                  <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-lg shadow-emerald-100 transition-all hover:-translate-y-1 active:scale-95">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}`            `