import { Link } from "react-router-dom";
import React from "react";

const Card = ({ mode, image, name, population, region, capital,data }) => {
  // console.log(props.image);
  // console.log("Mode:", mode);
  // console.log("data from card",data);
  return (
<Link to={`/Newpage/${name}`}  >
    <div
      className={`max-w-[220px] h-[290px] rounded overflow-hidden `}
      style={{
        backgroundColor: mode === "dark" ? "hsl(209,23%,22%)" : "white",
        color: mode === "dark" ? "white" : "black",
      }}
    >
      <div className="h-1/2 min-w-[220px]">
        <img
          src={image}
          alt="no image"
          className=" object-cover h-full w-full"
        />
      </div>
      <div className="p-3 flex gap-0.5 flex-col">
        <h1 className="text-[20px]">{name}</h1>
        <div>
          <p className="text-[16px]">
            Population: <span className="text-[15px]">{population}</span>
          </p>
        </div>
        <div>
          <p className="text-[16px]">
            Region: <span className="text-[15px]">{region}</span>
          </p>
        </div>
        <div>
          <p className="text-[16px]">
            Capital: <span className="text-[15px]">{capital}</span>
          </p>
        </div>
      </div>
    </div>
</Link>
  );
};

export default Card;
