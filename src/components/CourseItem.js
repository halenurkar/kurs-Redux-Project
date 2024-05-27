import React from 'react'
import { BsChevronUp } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import {removeItem, increase, decrease} from '../control/cardSlice'
import {useDispatch} from 'react-redux';

export default function CourseItem({id, title, price, img, quantity}) {
const dispatch =useDispatch()


  return (
    <div>
    <div className='cartItem'>
        <img className='img' src={img} alt=''/>
        <div className='cartInfo'>
            <h4>{title}</h4>
            <h4>{price}</h4>
            <div className='cartBtn'>
                <button onClick={()=> dispatch(increase(id))} className='cartQuantityBtn'><BsChevronUp /></button>
                <p>{quantity}</p>
                <button onClick={()=> dispatch(decrease(id))} className='cartQuantityBtn'><BsChevronDown /></button>
            </div>
            <button onClick={()=>{dispatch(removeItem(id))}} className="cartDeleteBtn">Sil</button>
        </div>   
    </div>
    <hr/>
    </div>
  )
}
