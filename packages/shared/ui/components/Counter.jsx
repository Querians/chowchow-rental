import React, { useState } from 'react';
import { Button } from './Button';

export const Counter = () => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(1);
  // query max from stock
  const max=31
  console.log(typeof(max))
  const add = () => {
    // setCount(count + 1)
    if (count+1 <= max) {
      setCount(count + 1)
    };
  };
  const add10 = () => {
    if (count+10 <= max) {
      setCount(count + 10)
    }
    else{
      setCount(max)
    };
  };
  const sub = () => {
    if (count > 1) {
      setCount(count - 1)
    };
  };
  const sub10 = () => {
    if (count > 10) {
      setCount(count - 10)
    }
    else{
      setCount(1)
    };
  };

  return (
    <>
      <div className="">
        <div className="grid grid-cols-5 gap-2 justify-items-center w-full px-4">
          
        <Button type="count" logo="/minus.svg" text="10" onClick={sub10} />
        <Button type="count" logo="/minus.svg" onClick={sub} />
        <div className="text-center w-10">
          <p className="align-center text-xl font-semibold">{count}</p>
        </div>
        <Button type="count" logo="/add.svg" onClick={add} />
        <Button type="count" logo="/add.svg" text="10" onClick={add10} />
      </div>
      <p className="text-center text-sm text-red-600 font-medium pt-1">คงเหลือ {max} ชิ้น</p>
      </div>
      
    </>

  );
}