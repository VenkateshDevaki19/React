// import * as React from 'react'

// const App = () => {

//   // Creating textInputRef variable
//   // const textInput = React.createRef();

//   // Creating textInput Ref variable with initialValue "null"
//   const textInput = React.useRef(null);

//   const textFocusHandler = () =>{
//     textInput.current.focus();
//   }

//   return (
//     <div>

//         <input ref={textInput} type="text" placeholder='Enter Something' />

//         <button onClick={textFocusHandler}>Click me to focus input</button>
//     </div>
//   )
// }

// export default App

import React from 'react'
import { useState } from 'react'

const App = () => {
  const [change, setChange] = useState(true);

  return (
    <div>
      <button onClick={() => setChange(!change)}>Login</button>
      {change ? (<h1>Please login!</h1>) : (<h1>Welcome User!</h1>)}
    </div>
  );
};

export default App

