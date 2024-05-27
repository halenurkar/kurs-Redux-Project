import React from 'react'
import { BsFillBasketFill } from "react-icons/bs";
import {useSelector} from 'react-redux';

export default function Navbar() {
    const {quantity} = useSelector((store)=> store.cart)
    console.log(useSelector((store)=> store.cart))
  return (
    <nav>
        <div className='navBar'>
            <h3>Kurs uygulaması</h3>
            <div className='navDiv'>
                <div className='itemDiv'>
                <p>{quantity}</p>
                </div>
                
                <BsFillBasketFill className='itemsIcon'/>
            </div>
        </div>
    </nav>
  )
}
