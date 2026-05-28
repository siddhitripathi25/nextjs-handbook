import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 bg-pink-200 text-pink-800 text-3xl mb-4'>
      <h3>Siddhi</h3>
      <div className='flex items-center gap-9'>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/product">Product</Link>
      </div>

    </div>
  )
}
export default Navbar
