import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {decrement, increaseAmount, increment } from '../app/counterSlice'

const AddCounter = () => {

    let counter = useSelector((state)=>state.counter.value)
    console.log(counter);
    
    let trigger = useDispatch()
  return (
    <>
    <h5>Counter screen</h5>

    <section>
        <h2>{counter}</h2>
    
        <div style={{ display: 'flex', gap: '10px'}}>
        <button onClick={()=> trigger(increment())}>+</button>
        <button onClick={()=>trigger(decrement())}>-</button>
        <button onClick={()=>trigger(increaseAmount(8))}>increase amount</button>
        </div>
    </section>
    </>
  )
}

export default AddCounter