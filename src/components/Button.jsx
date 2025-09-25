import React, {useState, useEffect} from 'react'
import Counter from './Counter'

function Button() {
  useEffect(() => {
    console.log("Mounting...");
    return () => [
      console.log("Unmounting...")
    ]
  });

  let [state, setState] = useState(false)
  return (
    <div>
      <button onClick={ () => setState(!state) } >Show / Hide</button>
      {state && <Counter/>}
    </div>
  )
}

export default Button