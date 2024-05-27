import './App.css';
import CourseList from './components/CourseList';
import Navbar from './components/Navbar';
import { useEffect } from 'react';
import { calculate } from './control/cardSlice';
import { useSelector, useDispatch } from 'react-redux';
function App() {
  const dispatch =useDispatch()
  const {cartItems} = useSelector((store)=> store.cart)

   useEffect(()=>{
    dispatch(calculate())
  },[cartItems])

  return (
    <div className="App">
      <Navbar/>
      <CourseList/>
    </div>
  );
}

export default App;
