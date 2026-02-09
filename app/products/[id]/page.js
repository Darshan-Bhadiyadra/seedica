"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { PRODUCTS_DATA } from "../../data"; // Import your shared list

export default function ProductDetail() {
  const params = useParams();
  const product = PRODUCTS_DATA.find((p) => p.id === params.id);

  if (!product) return <div className="pt-40 text-center">Product Not Found</div>;

  return (
    <div className="min-h-screen bg-white pt-32 pb-12 px-6 md:px-16 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-16">
        
        {/* LEFT: Image Section (Like KTM Reference) */}
        <div className="flex-1">
          <div className="sticky top-32">
            <div className="relative h-[500px] w-full border border-gray-100 rounded-3xl overflow-hidden bg-gray-50 p-12">
              <Image src={product.image} alt={product.name} fill className="object-contain" />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-4 mt-6 justify-center">
               <div className="w-20 h-20 border-2 border-emerald-500 rounded-xl p-2 cursor-pointer">
                 <Image src={product.image} alt="thumb" width={80} height={80} className="object-contain"/>
               </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Product Info Section */}
        <div className="flex-1 space-y-8">
          <div>
            <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm">{product.category}</span>
            <h1 className="text-5xl font-extrabold text-gray-900 mt-2">{product.name}</h1>
          </div>
          
          <div className="flex items-baseline gap-4">
             <span className="text-4xl font-bold text-gray-900">{product.price}</span>
             <span className="text-gray-400 text-sm">( FCO સ્ટાન્ડર્ડ મુજબ પ્રમાણિત )</span>
          </div>

          <div className="space-y-4 border-y border-gray-100 py-8">
            <h3 className="text-lg font-bold text-gray-800">Product Description</h3>
            <p className="text-gray-600 leading-relaxed text-lg">{product.desc}</p>
          </div>

          {/* Action Buttons (Amazon Style) */}
          <div className="flex flex-col gap-4">
            <button className="w-full bg-[#FFD814] hover:bg-[#F7CA00] text-black font-semibold py-4 rounded-full shadow-sm transition-all">
              Add to Cart
            </button>
            <button className="w-full bg-[#FFA41C] hover:bg-[#FA8914] text-white font-semibold py-4 rounded-full shadow-sm transition-all">
              Buy Now
            </button>
          </div>

          {/* <div className="grid grid-cols-2 gap-4 pt-6">
             <div className="p-4 bg-gray-50 rounded-2xl text-center">
                <p className="text-xs text-gray-500 uppercase font-bold">Shipping</p>
                <p className="text-sm font-semibold">Free Delivery</p>
             </div>
             <div className="p-4 bg-gray-50 rounded-2xl text-center">
                <p className="text-xs text-gray-500 uppercase font-bold">Replacement</p>
                <p className="text-sm font-semibold">7 Days Return</p>
             </div>
          </div> */}
        </div>

      </div>
    </div>
  );
}