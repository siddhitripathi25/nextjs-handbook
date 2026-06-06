import React from 'react'

const ProductCard = () => {
  return (
    <div>
      <figure className="bg-white rounded-lg shadow-md p-4">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeAH-psV8wge8-bmyGgrPupWM5R-4s7M4eoA&s"
          alt="Product"
          className="w-full h-auto rounded-lg"
        />
        <figcaption className="mt-4">
          <h3 className="text-lg font-bold text-black">Product Name</h3>
          <p className="text-gray-600">Product description goes here.</p>
          <p className="text-xl font-bold text-blue-500">$99.99</p>
        </figcaption>
      </figure>
    </div>
  )
}

export default ProductCard
