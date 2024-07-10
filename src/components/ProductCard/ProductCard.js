import React from 'react'
import './ProductCard.css'

function ProductCard(props) {
    return (
        <div className="eacharticle">
            <div className="card article1">
  <div className="card-body" >
      <div className="titlecov">
          <img src={props.a.image} className='image'/>
    <h5 className="card-title" style={{textDecoration: 'none'}}>{props.a.title}</h5>
    </div>
    <h3 className="card-text" style={{textDecoration: 'none'}}>{props.a.category}</h3>
    <div>
    </div>
    <h3 className="card-text" style={{textDecoration: 'none'}}>Rs.{props.a.price}</h3>
    <div>
    </div>
  </div>
</div>
        </div>
    )
}

export default ProductCard
