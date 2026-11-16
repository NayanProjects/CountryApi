import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ArrowLeft } from "lucide-react";
import Loadingcarddetail from "./Loadingcarddetail";
const Newpage = ({ data, setData, mode, setMode }) => {
  let param = useParams();
  let cardname = param.id;
  // console.log("from newpage", data);
  // let [ncard,setNcard]=useState();
  // let ncard = data.filter((el) => {
  //   return el.names.common == param.id;
  // });
  // console.log(ncard);
  // // console.log(ncard[0].names.common)
  // let detail=ncard[0];
  let [cardload, setCardload] = useState(null);

  useEffect(() => {
    async function searchcard(cardname) {
      const responses = await fetch(
        `https://api.restcountries.com/countries/v5?q=${cardname}`,
        {
          headers: {
            Authorization: "Bearer rc_live_35e5a3b50dd840cc9a4d407d3700112a",
          },
        },
      );
      const carddata = await responses.json();
      const detail = carddata.data.objects.find(
        (el) => el.names.common === cardname,
      );

      setCardload(detail);
    }
    searchcard(cardname);
  }, [cardname]);

  // console.log(cardload);

  // console.log(cardload?.tlds?.[0])
  // console.log(cardload?.currencies?.[0]?.name)

  const nativeName = Object.values(cardload?.names?.native || {})[0]?.common;
  return (
    <div className={`flex flex-col min-h-screen w-screen `}>
      <div>
        <Navbar mode={mode} setMode={setMode} />
      </div>
   {(cardload==null)?(   <Loadingcarddetail mode={mode} setMode={setMode}/>):    <div
        className={`${
          mode === "dark"
            ? "bg-[hsl(207,26%,17%)] text-white"
            : "bg-[hsl(0,0%,98%)] text-black"
        } flex  px-22 flex-col gap-10 py-10 min-h-screen`}
      >
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
        <div className="flex gap-5 w-full flex-col md:flex-row   lg:flex-row justify-around">
          <div className="max-w-[450px] lg:max-w-[480px] h-[350px]  md:h-[300px] md:max-w-[350px]">
            <img
              className="object-cover h-full w-full"
              src={cardload?.flag?.url_svg || cardload?.flag?.url_png}
              alt="img"
            />
          </div>
          <div className="flex gap-4 py-5 flex-col">
            <h1 className="text-2xl font-semibold">
              {cardload?.names?.common}
            </h1>
            <div className="flex lg:gap-15 flex-col md:flex-row gap-2 md:gap-6 w-full ">
              <div>
                <p>
                  <b>Native Name: </b>
                  {nativeName}
                </p>
                <p>
                  <b>Population: </b>
                  {cardload?.population}
                </p>
                <p>
                  <b>Region: </b>
                  {cardload?.region}
                </p>
                <p>
                  <b>Sub Region: </b>
                  {cardload?.subregion}
                </p>
                <p>
                  <b>Capital: </b>
                  {cardload?.capitals?.[0]?.name}
                </p>
              </div>
              <div>
                <p>
                  <b>Top Level Domain: </b>
                  {cardload?.tlds?.[0]}
                </p>
                <p>
                  <b>Currencies: </b>
                  {cardload?.currencies?.[0]?.name}
                </p>
                <p>
                  <b>Languages: </b>
                  {cardload?.languages
                    ?.map((el) => {
                      // console.log(el.name);
                      return el.name;
                    })
                    .join(",")}
                </p>
              </div>
            </div>
            <div>
              <p className="flex gap-1.5 items-center flex-wrap">
                <b>Border Countries: </b>
                {cardload?.borders?.length
                  ? cardload?.borders?.map((el, idx) => {
                      return (
                        <Link
                          to={`/Bordercountry/${el}`}
                          key={idx}
                          className={` px-3 py-0.5 ${
                            mode === "dark"
                              ? "bg-[hsl(209,23%,22%)] text-white"
                              : "bg-green-300 text-black"
                          }`}
                        >
                          {el}
                        </Link>
                      );
                    })
                  : "NO BORDER COUNTRIES"}
              </p>
            </div>
          </div>
        </div>
      </div>}








  
    </div>
  );
};

export default Newpage;
