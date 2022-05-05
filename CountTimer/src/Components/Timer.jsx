import { useEffect, useState } from 'react';
import './Timer.css';
import React from 'react';

export const Timer = () => {
const [second,setSecond] = useState(0);
const [minute , setMinute] = useState(0);
 const[hour,setHour] = useState(0);

var timer;
useEffect(()=>{
    timer = setInterval(() => {
        setSecond(second+1);
        if(second ===59){
            setMinute(minute+1);
            setSecond(0);
            if(min ===59){
               

                setHour(hour+1)
                setMin(0)
            }
        }
    },1000)

    return () => clearInterval(timer);
});

const reset = () => {
  setSecond(0)
  setMinute(0)
  setHour(0)
}

const stoped = () => {
    clearInterval(timer)
}




    return (
        <div>
            <div className="block">
            <div className="main">
           {hour<10? "0"+hour : hour}: {minute <10? "0"+minute:minute} : {second}



          <div className="Timer">
              <button className='reset' onClick={reset}>Reset</button>
              <button className='stop' onClick={stoped}>stop</button>
              {/* <button className='pause' onClick={pause}>Pause</button> */}
              </div>
            </div>
        </div>
        </div>
    )
}