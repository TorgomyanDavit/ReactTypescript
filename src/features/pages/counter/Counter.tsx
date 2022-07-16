import React, { useState } from 'react';
import "../../assets/style/counter.scss"
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import {
  increment
} from './counterSlice';
import { incrementAsync } from '../../api/increment';


export function Counter() {
  const {value,text} = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  




  return (
    <div className='counterContainer'>
      <header className='header'>
        <button className='button' onClick={() => {
          dispatch(increment())
        }} >click to increment</button>
        <button className='button' onClick={() => {
          dispatch(incrementAsync(2))
        }}>click to fetch Data</button>
      </header> 
      <main className='home'>
          <span>{value}</span>
          <span>{JSON.stringify(text)}</span>

      </main>

    </div>
  );
}