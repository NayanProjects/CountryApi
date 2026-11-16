import React from "react";
import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
const Bordercountry = ({ mode, setMode }) => {
  return (
    <div>
      <div>
        <Navbar mode={mode} setMode={setMode} />
      </div>
      <div className="py-8 px-24">
        <Link
          to="/"
          className={`${
            mode === "dark"
              ? "bg-[hsl(209,23%,22%)] text-white"
              : "bg-green-300 text-black"
          } px-4 py-2  rounded flex  justify-start w-fit gap-2`}
        >
          <ArrowLeft size={24} strokeWidth={1.8} /> Back
        </Link>
      </div>
    </div>
  );
};

export default Bordercountry;
