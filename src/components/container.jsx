import React, { useEffect, useRef, useState } from "react";
// import Searchs from "../components/Searchs";
import { Search } from "lucide-react";
// import Filters from "../components/Filters";
import Card from "../components/card";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import Loading from "./loading";
const Container = ({ mode,data,setData }) => {
  // console.log("Container mode:", mode);
  // const [data, setData] = useState([]);
  const [count, setCount] = useState(1);
  const [count1, setCount1] = useState(0);
  const [load, setLoad] = useState([]);
  const [loadf, setLoadf] = useState([]);
  const [filters, setFilters] = useState(false);
  const [indata, setIndata] = useState(false);
  const [nordata, setNordata] = useState(true);
  let inputref = useRef(null);
  console.log( "from container",data);

  // console.log(data);
  useEffect(() => {
    async function getCountries() {
      try {
        const response = await fetch(
          // "https://api.restcountries.com/countries/v5",
          `https://api.restcountries.com/countries/v5?offset=${count1}`,

          {
            headers: {
              Authorization: "Bearer rc_live_35e5a3b50dd840cc9a4d407d3700112a",
            },
          },
        );

        const result = await response.json();
        // console.log(result.data);
        setData(result.data.objects);
      } catch (error) {
        console.log(error);
      }
    }

    getCountries();
  }, [count]);
  // console.log(data);

  async function searching(e) {
    const responses = await fetch(
      `https://api.restcountries.com/countries/v5?q=${e}`,
      {
        headers: {
          Authorization: "Bearer rc_live_35e5a3b50dd840cc9a4d407d3700112a",
        },
      },
    );
    const datas = await responses.json();
    setLoad(datas.data.objects);
    console.log(load);
    // console.log(datas.data.objects);
  }

  function searchcall() {
    return load.map((e, idxs) => {
      return (
        <Card
        // data={e}
          mode={mode}
          key={idxs}
          image={e.flag.url_png}
          name={e.names.common}
          population={e.population}
          region={e.region}
          capital={e.capitals?.[0]?.name || "No Capital"}
        />
      );
    });
  }
  function normalcall() {
    return data.map((el, idx) => {
      //  console.log(el.names.common,el.population,el.region,el.capitals?.[0]?.name || "No Capital")
      return (
        <Card
          // data={el}
          mode={mode}
          key={idx}
          image={el.flag.url_png}
          name={el.names.common}
          population={el.population}
          region={el.region}
          capital={el.capitals?.[0]?.name || "No Capital"}
        />
      );
    });
  }
  function loadcall() {
    return loadf.map((el, idx) => {
      //  console.log(el.names.common,el.population,el.region,el.capitals?.[0]?.name || "No Capital")
      return (
        <Card
          // data={el}
          mode={mode}
          key={idx}
          image={el.flag.url_png}
          name={el.names.common}
          population={el.population}
          region={el.region}
          capital={el.capitals?.[0]?.name || "No Capital"}
        />
      );
    });
  }
  //     async function filtersearch(e) {
  //       console.log(e);
  // const response1 = await fetch(
  //   `https://api.restcountries.com/countries/v5?region=${e}&limit=5`,
  //   { headers: { 'Authorization': 'Bearer rc_live_4d69ee0ce5c2452e82f10bfe9f28515b' } }
  // );
  // const datas1 = await response1.json();
  //     setLoadf(datas1.data.objects);
  //     console.log(loadf);
  //     console.log(datas1.data.objects);
  //   }
  function filter(e) {
    const region = e.target.value;
    if (region === "") {
      setLoadf([]);
      setFilters(false); // Show all countries again
      // setNordata(true);
      return;
    }

    const filtered = data.filter((country) => country.region === region);

    setLoadf(filtered);
    setFilters(true);
    // setNordata(false);
  }
    if(data.length==0){
    return <Loading mode={mode} setData={setData}/>;
  }
  // console.log(loadf);
  return (
    <div
      className={`container min-h-screen px-24 py-10 min-w-full  ${
        mode === "dark"
          ? "bg-[hsl(207,26%,17%)] text-white"
          : "bg-[hsl(0,0%,98%)] text-black"
      }`}
    >
      <div className="flex justify-between pb-8 md:flex-row flex-col gap-2 w-auto ">
        {/* <Searchs /> */}
        <div>
          {/* {//search bar} */}
          <div
            className={`flex px-4 py-2 items-center gap-3  ${
              mode === "dark"
                ? "bg-[hsl(209,23%,22%)] text-white"
                : "bg-white text-black"
            } `}
          >
            <div>
              <Search strokeWidth={1.5} />
            </div>
            <input
              type="text"
              ref={inputref}
              onChange={(e) => {
                inputref.current.value = e.target.value;
                searching(e.target.value);
                setIndata(true);
                setNordata(false);
                setFilters(false);
              }}
              placeholder="Search for a country"
              className={`outline-none bg-transparent ${
                mode === "dark"
                  ? "placeholder:text-gray-300"
                  : "placeholder:text-gray-500"
              }`}
            />
          </div>
        </div>

        {/* {filter} */}
        {/* <Filters /> */}
        <div>
          <select
            defaultValue=""
            className={`box w-[180px] px-2 text-[18px] py-3 outline-none border-none  ${
              mode === "dark"
                ? "bg-[hsl(209,23%,22%)] text-white"
                : "bg-white text-black"
            } `}
            name=""
            id=""
            onChange={(e) => {
              filter(e);
              inputref.current.value = "";
            }}
          >
            <option value="">Filter</option>
            <option value="Asia">Asia </option>
            <option value="Europe">Europe</option>
            <option value="Africa">Africa</option>
            <option value="Oceania">Oceania</option>
            <option value="Americas">Americas</option>
            <option value="Antarctic">Antarctic</option>
          </select>
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-8">
        {/* <Card/> */}
        {filters ? loadcall() : nordata ? normalcall() : searchcall()}
      </div>

      <div className="flex justify-center  gap-2 items-center pt-4">
        <button
          onClick={() => {
            setCount(count - 1);
            setCount1(count1 - 25);
            setIndata(false);
            setNordata(true);
            setFilters(false);
            inputref.current.value = "";
          }}
          className="bg-green-400 p-1"
        >
          <ChevronLeft />
        </button>
        <h1 className="bg-black text-white p-1 px-4">{count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
            setCount1(count1 + 25);
            setIndata(false);
            setNordata(true);
            setFilters(false);
            inputref.current.value = "";
            // console.log(inputref.current.value);
          }}
          className="bg-green-400 p-1"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Container;





