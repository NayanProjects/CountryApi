import React, { useState } from "react";
import Section from "./Section1";

// import { Route } from "lucide-react";
import { Route, Routes } from "react-router-dom";
import Newpage from "./Newpage";
import Section1 from "./Section1";
import Bordercountry from "./Bordercountry";

const App = () => {
  let [mode,setMode]=useState("dark");
  const [data, setData] = useState([]);
  return (
    <div className="min-h-full min-w-full">
    <Routes>
      <Route path="/" element={<Section1 mode={mode} setMode={setMode} data={data} setData={setData} />}/>
      <Route path="/Newpage/:id" element={<Newpage data={data} setData={setData} mode={mode} setMode={setMode} />} />
      <Route path='/Bordercountry/:code' element={<Bordercountry mode={mode} setMode={setMode}/>}/>
    </Routes>

    </div>
  );
};

export default App;
