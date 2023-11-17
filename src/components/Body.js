import React ,{useState} from 'react'

const Body = () => {
    const [count,setCount]=useState(0)
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>Like</button>
    </div>
  )
}

export default Body
