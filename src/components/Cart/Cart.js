import React from 'react'
import ProductCard from '../ProductCard/ProductCard'

function Cart() {
    let products = [
        {
            title:'Shirt',
            category:'Clothing',
            price:1000,
            image:'https://m.media-amazon.com/images/I/81ZUL5rCfmL._AC_UY1100_.jpg'
        },
        {
            title:'Google pixel',
            category:'Technology',
            price:60000,
            image:'https://images-cdn.ubuy.co.in/651e1cdf997a536aed735f24-google-pixel-8-pro-unlocked-android.jpg'
        }
        
    ]
    return (
        <div className="mt-4">
            <h1>Your Cart</h1>
            <div className="mt-5">
            <div className="row gy-5 gx-3">
            {products.map((a)=><div className="col-sm-12 col-md-6 col-lg-6 mb-2"><ProductCard a={a}/></div>)}
            </div>

            </div>
            <div>
            <button className="btn button-reg  mx-auto d-block" style={{backgroundColor:'rgb(255, 255, 204)'}}>Checkout</button>
            </div>
        </div>
    )
}

export default Cart
