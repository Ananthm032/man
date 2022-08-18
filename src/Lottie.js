import React,{useState} from 'react'
import Lottie from "react-lottie";
import data from "./data.json"
function Lott() {
  const [click,onclick]=useState(false)
const HandleChange=()=>{
  onclick(!click)
}
const defaultOptions = {
  loop: true,
  autoplay: true, 
  animationData: data,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};
  return (
     <div>
     <button style={{marginLeft:"540px",padding:"8px 24px",background:"darkblue",color:"azure",marginTop:"20px"}} onClick={HandleChange }>
    
       {
        click ? "Show button" :"Hide Button"
       }
    
     </button>
     <div>
    {click &&   <Lottie options={defaultOptions} height={400}  width={400}/>}
           
     </div>
    </div>
  )
}

export default Lott