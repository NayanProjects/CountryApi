import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Container from "./components/container";
import {Outlet, Route, Routes } from "react-router-dom";
import Loading from "./components/loading";

const Section1 = (props) => {
    console.log(props);
  return (
<>

   <Navbar mode={props.mode} setMode={props.setMode}/>
     <Container data={props.data} setData={props.setData}  mode={props.mode} setMode={props.setMode}/>
  
</>
  )
}

export default Section1
