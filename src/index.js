import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// function College(){
//   function clicking(){
//     alert("Button is clicked")
//   }
//    return <button onDoubleClick={clicking}>click here</button>
// }
// const root1=ReactDOM.createRoot(document.getElementById('root'))
//   root1.render(<College/>)

//   function Department(){
//     return(<div>
//       <College/>
//       <h2>ECE department</h2>
//     </div>)
//   }
//   const root2=ReactDOM.createRoot(document.getElementById('root'))
//   root2.render(<Department/>)

//   function Section(props){
// return(
//   <div>,
//     <College/>
//     <Department/>
//     <p>name is {props.sec.name}</p>
//   </div>
// )
// }
// function Student(){
//   const a={
//     name:"Harshitha",
//     roll: 40
//   }
//   return(
//     <div>
// <Section  sec={a}></Section>
//     </div>
//   )
// }
// const root4=ReactDOM.createRoot(document.getElementById('root'))
// root4.render(<Student/>)

reportWebVitals();
