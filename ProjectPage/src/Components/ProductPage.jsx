import React from 'react'
import styles from './Header.module.css'
import Header from './Header'
import ProductDetails from './ProductDetails'

const ProductPage = () => {
  return (
    <div className={styles.ProductPage}>
      <Header />
      <ProductDetails />
    </div>
  )
}

export default ProductPage
