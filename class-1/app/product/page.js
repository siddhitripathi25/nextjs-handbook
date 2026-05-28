import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
        <Link href="/product/women">Women's Collection</Link>
      <h1 className='text-3xl underline'>This is Product section</h1>
    </div>
  )
}

export default page
