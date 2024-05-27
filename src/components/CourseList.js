import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import CourseItem from './CourseItem';
import {clearCart} from '../control/cardSlice'
export default function CourseList() {
    const dispatch =useDispatch()
    const {cartItems, quantity, total} = useSelector((store)=> store.cart)

  return (
    <>
     {quantity < 1 ? (
        <section className='cart'>
            <header>
                <h2>Sepetim</h2>
                <h4>bomboş</h4>
            </header>
        </section>
    ):(
        <section className='cart'>
        <header>
            <h2>Sepetim</h2>
        </header>
        <div>
            {cartItems.map((item, index)=>{
                return <CourseItem key={index} {...item}/>
            })}
        </div>
        <footer>
            <div>
                <h4>Toplam tutar <span>{total}</span> TL</h4>
            </div>
            <button onClick={()=>dispatch(clearCart())} className='cartClearBtn'>Temizle</button>
        </footer>
    </section>
    )
    }
    </>
   
  )
}
