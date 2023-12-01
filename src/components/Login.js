// import React from "react";
// import { Link } from "react-router-dom";

// const Login = () => {
//     function fun () {
//       alert("Login Successfull");
//     }
    
//       return (
//         <>
       
//           <div className="container my-3 py-3">
//           <br></br><br></br><br></br><br></br>
//           <h1 className="text-center">Login</h1>
//             <hr />
//             <div class="row my-4 h-100">
//               <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
//                 <form>
//                   <div class="my-3">
//                     <br></br>
//                     <label for="display-4">Email address :</label><br></br>
//                     <input
//                       type="email"
//                       class="form-control"
//                       id="floatingInput"
//                       placeholder =   "name@example.com"
//                     />
//                     </div>
                    
//                   <div class="my-3">
//                     <label for="floatingPassword display-4"> Password :</label><br></br>
//                     <input
//                       type="password"
//                       class="form-control"
//                       id="floatingPassword"
//                       placeholder  = "Password"
//                     />
//                   </div>
//                   <div className="my-3">
//                     <p>New Here?           <Link to="/register" className="text-decoration-underline text-info">  <button> Register </button>   </Link> </p>
//                   </div>
//                   <br></br>
//                   <div className="text-center">
//                     <button onClick={fun} class="my-2 mx-auto btn btn-dark" type="submit">
//                       Login
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
          
//         </>
//       );
//     };
    
    
//     export default Login;

import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userNames, setUserNames] = useState([]);

  const handlePost = () => {
    axios.post('http://localhost:5000/register', { name, email })
      .then((response) => {
        const result = response.data;
        if (result) {
          alert("Data saved successfully");
          setEmail("");
          setName("");
        }
      })
      .catch((error) => {
        console.error("POST request error:", error);
        alert("Something went wrong when saving data.");
      });
  }

  const handleGet = () => {
    axios.get('http://localhost:5000/')
      .then((response) => {
        const users = response.data;
        const names = users.map((user) => user.name);
        setUserNames(names);
      })
      .catch((error) => {
        console.error("GET request error:", error);
      });
  }

  return (
    <div className="container"><br/><br/><br/><br/>
      <h1>This is React WebApp</h1>
      <form>
      <label>Enter Name&nbsp;&nbsp;</label>
        <input
          type="text"
          className="input-field" 
          placeholder="ur name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br></br>
        <label>Enter Email:&nbsp;&nbsp;</label>
        <input
          type="email"
          className="input-field"
          placeholder="Enter ur email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br></br>
        <button type="button" onClick={handlePost}>Post</button>
        <button type="button" onClick={handleGet}>Get</button>
      </form>
      <p>Names: {userNames.join(", ")}</p>
    </div>
  );
}

export default App;