import React from 'react'
import Hero from '@/components/Hero'
import Logo from '@/components/Logo'
import Arrivals from '@/components/Arrivals'
import Selling from '@/components/Selling'
import Style from '@/components/Style'
import Customers from '@/components/Customers'
import Footer from '@/components/Footer'
import Cart from '@/components/Cart'
import Product from '@/components/Product'
const page = () => {
  return (
    <div>
      <Hero />
      <Logo />
      <Arrivals />
      <Selling />
      <Style />
      <Customers />
      <Footer />
      <Cart />
      <Product/>
    </div>
  )
}

export default page