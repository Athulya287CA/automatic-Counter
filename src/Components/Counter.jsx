import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'


function Counter() {

    const[counter,setCounter]=useState(0)
    const[running,setrunning]=useState(true)

    

    useEffect(()=>{
        let interval
        if (running){
            interval=setInterval(()=>{
                setCounter((prevCounter) => prevCounter + 1);
              }, 1000);
            
        }
        
        return()=>clearInterval(interval)

    },[running])

    function stop(){
           setrunning(false)
    }

    function reset(){
        setCounter(0)
        setrunning(true)

    }



  return (
    <div className='counter text-center'>
      <h1>Automatic Counter</h1>
      <p>Let the counter do the work for you.</p>

      <div className="counternum">
        <h1>{counter}</h1>
      </div>

      <Button variant="danger" onClick={stop}>STOP</Button>{' '}
      <Button variant="warning" onClick={reset}>RESET</Button>{' '}


    </div>
  )
}

export default Counter
