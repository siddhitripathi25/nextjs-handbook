import React from 'react'
import ProductCard from '../ProductCard';

const LatestProduct = () => {
  return (
    <div>
      <section className="bg-pink-200 py-10">
        <h2 className="text-2xl font-bold text-black text-center">Latest Products</h2>
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          
        </div>
      </section>
    </div>
  )
}

export default LatestProduct
