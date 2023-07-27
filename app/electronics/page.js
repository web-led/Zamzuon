"use client"
import { useState, useEffect } from "react";
const electronics = () => {
    const api_url = 'https://fakestoreapi.com/products'
    const [data, setdata] = useState([])
    useEffect(() => {
        fetch(api_url)
            .then(response => response.json())
            .then(data => setdata(data))
    }, [])
    const [readMore, setReadMore] = useState(false);
    const proudects = data.map((data) => {
        const extraContent = <>
            {data.description}
        </>
        const linkName = readMore ? 'Read Less << ' : 'See Proudect Description >> '
        if (data.category === "electronics") {
            return (
                <div class="p-4" key={data.id}>
                <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                    <div class="md:flex">
                        <div class="md:flex-shrink-0">
                            <img class="h-56 w-full object-cover md:w-48" src={data.image} alt="Product Image" />
                        </div>
                        <div class="p-4">
                            <div class="uppercase tracking-wide text-sm text-teal-500 font-semibold">{data.title}</div>
                            <a className="read-more-link" onClick={() => { setReadMore(!readMore) }}><h2>{linkName}</h2></a>
                            {readMore && extraContent}
                            <div class="mt-2 text-gray-700 font-bold">Price: ${data.price}</div>
                            <div class="mt-2 flex items-center text-sm text-gray-600">
                                <svg class="h-4 w-4 fill-current text-gray-500 mr-2" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8-8-3.589-8-8zm14 0c0-3.309-2.691-6-6-6s-6 2.691-6 6 2.691 6 6 6 6-2.691 6-6z" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9 13h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1h-2v-2c0-.55-.45-1-1-1s-1 .45-1 1v2h-2c-.55 0-1 .45-1 1s.45 1 1 1z" />
                                </svg>
                                Free Shipping
                            </div>
                            <div class="mt-2">
                                <button class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
        }
    })
    return (
        <div class="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4">
            {proudects}
        </div>
    )
}
export default electronics;