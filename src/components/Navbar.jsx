import React, { useRef, useState } from 'react'
import {Moon} from 'lucide-react'
import {Sun} from 'lucide-react'
const Navbar = ({mode,setMode}) => {
  let moderef=useRef(null);
 
  return (
    <div className={`navbar flex justify-between md:px-24 py-5 px-10 items-center  ${
        mode === "dark"
          ? "bg-[hsl(209,23%,22%)] text-white"
          : "bg-white text-black"}`}>
     <h1 className='text-[20px]'>
      Where in the World?
     </h1>
     <div className='flex items-center gap-2 '>
      <span>{mode=="dark"?<Sun size={16} strokeWidth={1.5} />:<Moon size={16} strokeWidth={1.5} />}</span>
      <h1 onClick={()=>[
        mode=="dark"?setMode("light"):setMode("dark")
      ]}>{mode=="dark"?"Light ":"Dark "}</h1>
     </div>
    </div>
  )
}

export default Navbar
