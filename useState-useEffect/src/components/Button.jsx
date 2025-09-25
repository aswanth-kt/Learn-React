import React, {useState} from 'react'
import Counter from './Counter'

function Button() {
  // useEffect(() => {
  //   console.log("Mounting...");
  //   return () => {
  //     console.log("Unmounting...")
  //   }
  // });

  let [state, setState] = useState(false)
  return (
    <div>
      <button onClick={ () => setState(!state) } >Show / Hide</button>
      {state && <Counter/>}
      {state && <Counter/>}
    </div>
  )
}

export default Button