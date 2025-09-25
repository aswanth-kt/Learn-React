import React, { useState, useEffect } from 'react'

function Counter() {
  let [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Mounting...");
    console.log("Updating...", count);
    // return () => {
    //   console.log("CleanUp...", count)
    // }
  }, [count])

  return (
    <div>
      <h2>Counter: {count} </h2>
      <button onClick={() => { setCount(count+1) }} >Increment</button>
    </div>
  )
}

export default Counter