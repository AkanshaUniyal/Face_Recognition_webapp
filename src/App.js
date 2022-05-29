// import React,{Component}from 'react';
// import WebcamCapture from './components/webcam.js';

// class App extends Component{
//   render(){
//     return(
//       <div>
//         <div className='head'>
//           <h2>Live Face Recognition</h2>
//         <WebcamCapture/>
//         </div>
//       </div>
//     );
//   }
// };
// export default App;


import React from 'react'
import WebcamCapture from './components/webcam.js';

function App() {
  return (
    <div>
        <div className='head'>
         <WebcamCapture/>
         </div>
       </div>
    );
}

export default App;