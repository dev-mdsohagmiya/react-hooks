import { useState } from 'react'
import './App.css'

function App() {
  const [resourceType, setResourceType] = useState("posts")



  const buttonStyle = {
    borderRadius:"0px",
    border:"1px solid black",
    padding:"5px 20px",
    fontSize:"25px"
  }
  return (
    <div>
     <nav>
      <button onClick={()=>setResourceType("posts")} style={buttonStyle}>Posts</button>
      <button onClick={()=>setResourceType("users")} style={buttonStyle}>Users</button>
      <button onClick={()=>setResourceType("comments")} style={buttonStyle}>Comments</button>
     </nav>

     <div>
      <h1>
        {resourceType}
      </h1>
     </div>

    </div>
  )
}

export default App
