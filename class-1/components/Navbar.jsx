import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 bg-pink-200 text-pink-800 text-3xl'>
      <h3>Siddhi</h3>
      <div className='flex items-center gap-9'>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/product">Product</a>
      </div>

    </div>
  )
}

export default Navbar
