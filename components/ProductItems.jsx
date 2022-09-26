import React from 'react'
import ShopProduct from './ShopProduct'

const ProductItems= () => {
  return (
    <section class="py-12 bg-white sm:py-16 lg:py-20">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div class="max-w-md mx-auto text-center">
                <h2 class="text-2xl font-bold text-gray-900 sm:text-3xl">Our featured items</h2>
                <p class="mt-4 text-base font-normal leading-7 text-gray-600">We originate from nature hence we use 100% natural products. Your skin care is our top priority</p>
            </div>

            <ShopProduct/>
        </div>
    </section>

  )
}

export default ProductItems