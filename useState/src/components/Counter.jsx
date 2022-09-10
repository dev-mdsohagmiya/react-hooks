import { useState } from "react"

export const Counter = ()=>{

    const [count,setCount] = useState(0)

    const PlusNumber = ()=>{
        setCount(count+1)
    }

    const MinusNumber = ()=>{
        setCount(count-1)
        
    }
    const ResetCountNumber = ()=>{
        setCount(0)
         

    }
  



    const counterContainer = {
        display:"flex",
        justifyContent:"center",
        marginTop:"100px"
    }
    const buttonStyle = {
        width:"5rem",
        height:"5rem",
        fontSize:"60px",
    }

    const spanStyle = {
        fontSize:"60px",
        padding:"0 20px"
    }
    const resetContainer = {
        display:"flex",
        justifyContent:"center",
    }
    const resetBtn = {
        width:"230px",
        padding:"5px 10px",
        fontSize:"30px",
        marginTop:"10px"
    }
 return(
  <div>
     {/* Counter Container */}
      <div style={counterContainer}>
      <button onClick={()=>MinusNumber()} style={buttonStyle}>-</button>  <span style ={spanStyle}>{count}</span>  <button onClick={()=>PlusNumber()} style={buttonStyle}>+</button>
    </div>
    <div style={resetContainer}><button onClick={()=>ResetCountNumber()} style={resetBtn}>RESET</button></div>
  </div>
 )
}