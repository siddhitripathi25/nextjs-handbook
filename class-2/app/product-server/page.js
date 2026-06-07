import React from 'react'
import { getProducts } from '../apiservices/productApi'  ///WE HAD CREATED A FOLDER NAMED APISERVICES AND INSIDE THAT WE HAD CREATED A FILE NAMED PRODUCTAPI.JS AND INSIDE THAT WE HAD CREATED A FUNCTION NAMED GETPRODUCTS TO FETCH THE DATA FROM THE API AND THEN RETURN IT. AND THEN WE HAD EXPORTED THE FUNCTION SO THAT WE CAN USE IT IN OTHER FILES.

export default async function ProductServer() {
    let data = await getProducts()   ///WE CAN USE ASYNC AWAIT TO GET THE DATA FROM THE API AND THEN RETURN IT.
    console.log(data)
    return (
        <div>
            <h1 className="text-4xl font-bold text-black text-center mt-15">Product</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
                {
                    data.map((item) => {
                        return (
                            <div key={item.id} className="border p-4 rounded">
                                <div ><img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover" /></div>
                                <h2 className="text-2xl font-bold text-black">{item.title}</h2>
                                <p className="text-gray-600">{item.description}</p>
                                <p className="text-gray-800 font-bold">${item.price}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}



///IN THIS PAGE WE WILL DO API FETCHING ON SERVER SIDE WITHOUT USING 'USE CLIENT', BECAUSE WHEN WE DO THAT IT BECAME CLIENT SIDE RENDERING 
// AND WHEN WE DO API FETCHING ON SERVER SIDE THEN IT BECOMES SERVER SIDE RENDERING AND IT IS BETTER FOR SEO AND PERFORMANCE.
