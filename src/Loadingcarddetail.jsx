import React from "react";

const Loadingcarddetail = ({ mode, setMode }) => {
  return (
    <div
      className={`${
        mode === "dark"
          ? "bg-[hsl(207,26%,17%)] text-white"
          : "bg-[hsl(0,0%,98%)] text-black"
      } flex  px-22 flex-col gap-10 py-10 min-h-screen`}
    >
      <div className="flex gap-5 w-full flex-col md:flex-row   lg:flex-row justify-around">
        <div
          className={`md:w-[450px] sm:max-w-[450px] lg:max-w-[480px] h-[350px]  md:h-[300px] md:max-w-[350px] ${
            mode === "dark"
              ? "bg-[hsl(209,23%,22%)] text-white"
              : "bg-green-300 text-black"
          } `}
        ></div>
        <div className={`flex gap-4 py-8 flex-col `}>
          <h1
            className={`text-2xl font-semibold md:w-[180px] sm:max-w-[180px] ${
              mode === "dark"
                ? "bg-[hsl(209,23%,22%)] text-white"
                : "bg-green-300 text-black"
            } h-[22px] mb-2 rounded-2xl `}
          ></h1>
          <div
            className={`flex lg:gap-15 flex-col md:flex-row gap-2 md:gap-6 w-full `}
          >
            <div className="gap-6 flex flex-col ">
              <p
                className={`md:w-[150px] sm:max-w-[150px]  h-[12px]  ${
                  mode === "dark"
                    ? "bg-[hsl(209,23%,22%)] text-white"
                    : "bg-green-300 text-black"
                } rounded-2xl`}
              ></p>
              <p
                className={`md:w-[150px] sm:max-w-[150px]  h-[12px]  ${
                  mode === "dark"
                    ? "bg-[hsl(209,23%,22%)] text-white"
                    : "bg-green-300 text-black"
                } rounded-2xl`}
              ></p>
              <p
                className={`md:w-[150px] sm:max-w-[150px]  h-[12px]  ${
                  mode === "dark"
                    ? "bg-[hsl(209,23%,22%)] text-white"
                    : "bg-green-300 text-black"
                } rounded-2xl`}
              ></p>
              <p
                className={`md:w-[150px] sm:max-w-[150px]  h-[12px]  ${
                  mode === "dark"
                    ? "bg-[hsl(209,23%,22%)] text-white"
                    : "bg-green-300 text-black"
                } rounded-2xl`}
              ></p>
              <p
                className={`md:w-[150px] sm:max-w-[150px]  h-[12px]  ${
                  mode === "dark"
                    ? "bg-[hsl(209,23%,22%)] text-white"
                    : "bg-green-300 text-black"
                } rounded-2xl`}
              ></p>
            </div>
            <div className="gap-6 flex flex-col ">
              <p
                className={`md:w-[150px] sm:max-w-[150px]  h-[12px]  ${
                  mode === "dark"
                    ? "bg-[hsl(209,23%,22%)] text-white"
                    : "bg-green-300 text-black"
                } rounded-2xl`}
              ></p>
              <p
                className={`md:w-[150px] sm:max-w-[150px]  h-[12px]  ${
                  mode === "dark"
                    ? "bg-[hsl(209,23%,22%)] text-white"
                    : "bg-green-300 text-black"
                } rounded-2xl`}
              ></p>
              <p
                className={`md:w-[150px] sm:max-w-[150px]  h-[12px]  ${
                  mode === "dark"
                    ? "bg-[hsl(209,23%,22%)] text-white"
                    : "bg-green-300 text-black"
                } rounded-2xl`}
              ></p>
            </div>
          </div>
          <div>
            <p
              className={`flex gap-1.5 items-center flex-wrap md:w-[150px] sm:max-w-[150px]  h-[12px]  ${
                mode === "dark"
                  ? "bg-[hsl(209,23%,22%)] text-white"
                  : "bg-green-300 text-black"
              } rounded-2xl`}
            ></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loadingcarddetail;
