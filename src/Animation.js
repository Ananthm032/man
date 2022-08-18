import React from "react";
import { motion } from "framer-motion";
import "./Animation.css"

export default function App() {
  const [isActive, setIsActive] = React.useState(false);
  const HandleClick =()=>{
    setIsActive(!isActive)
  }
  return (
   
    <motion.div
    animate={{rotateY:[0,360,360,0]}}
    transition={{duration:0.1,repeat:Infinity}}
    > <p className="rotate"></p>
    </motion.div>
    
  );
}