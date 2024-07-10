import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import './Catalog.css'

function Catalog() {
    let products = [
        {
            title:'Shirt',
            category:'Clothing',
            price:1000,
            image:'https://m.media-amazon.com/images/I/61LYRZ-uH6L._AC_UY1100_.jpg'
        },
        {
            title:'Necklace',
            category:'Jwellery',
            price:60000,
            image:'https://www.orra.co.in/media/catalog/product/cache/a062e776095ada03f265202079309f18/o/s/osn23050.jpg'
        },
        {
            title:'Jeans',
            category:'Clothing',
            price:1000,
            image:'https://assets.ajio.com/medias/sys_master/root/20240429/rKTE/662ecbb816fd2c6e6ad98329/-473Wx593H-467162954-blue-MODEL2.jpg'
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
            <h1>Our Products</h1>
            <div className="textfield">
            <input type="text" className="textfieldbar" placeholder="Search Products"/>
            <div className="input-group-append">
                <button className="btn but" type="button">Search</button>
            </div>
            </div>
            
            <div className="mt-5">
            <div className="row gy-5 gx-3">
            {products.map((a)=><div className="col-sm-12 col-md-6 col-lg-6 mb-2"><ProductCard a={a}/></div>)}
            </div>

            </div>
        </div>
    )
}

export default Catalog
