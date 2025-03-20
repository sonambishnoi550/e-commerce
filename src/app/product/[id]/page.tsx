'use client';
import Reviews from '@/components/Review'
import React from 'react'
import Like from '@/components/Like'
import Footer from '@/components/Footer'
import Product from '@/components/Product'
import Header from '@/components/common/Header'
const page = () => {
  return (
    <div>
      <Header/>
      <Product />
      <Reviews />
      <Like />
      <Footer />
    </div>
  )
}

export default page