import React ,{useState} from 'react'

const Header = () => {
    const[name,setName]=useState("Harshitha")
  return (
    <div>
      <h1> My name is{name}</h1>
      <button onClick={()=>setName("anu")}>click here</button>
    </div>
  )
}

export default Header
