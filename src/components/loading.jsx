import React from "react";

const Loading = ({mode,setData}) => {
  return (
    <div className={`flex justify-between gap-8  px-24 flex-wrap flex-row min-h-screen w-screen py-10  ${
        mode === "dark"
          ? "bg-[hsl(207,26%,17%)] text-white"
          : "bg-[hsl(0,0%,98%)] text-black"
      }`}>
      {Array.from({length:12}).map((el,i)=>{
        return <div key={i} className={` ${
              mode === "dark"
                ? "bg-[hsl(209,23%,22%)] text-white"
                : "bg-white text-black"
            }  w-[220px] h-[290px] rounded `}></div>
      })}

    </div>
  );
};

export default Loading;
