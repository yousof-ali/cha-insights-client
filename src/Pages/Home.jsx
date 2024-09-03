import React, { useEffect, useState } from "react";
import Commonbutton from "../Components/Commonbutton";
import { FiCoffee } from "react-icons/fi";
import { Link } from "react-router-dom";
import SingleCha from "../Components/SingleCha";

const Home = () => {
  const [allcha ,setallcha] = useState([]);
  const [loader ,setloader] = useState(true)

  useEffect(() => {
    fetch('http://localhost:5000/allcha')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setallcha(data);
      setloader(false);
    })
    .catch((e) => {
      console.log(e.message);
    })
  },[])

  return (
    <div>
      <div className="max-w-[1400px]  mx-auto">
        <div className="relative">
          <img
            className="w-full md:max-h-[500px] lg:max-h-[600px]"
            src="/cover2.jpg"
            alt=""
          />
          <div className="absolute top-10 space-y-3  md:top-[20%] lg:top-28 left-[5%] text-white">
            <h1 className="md:text-3xl w-[70%] md:w-full text-xl font-bold">
              Discover Serenity in Every Sip of Premium Tea
            </h1>
            <p className="w-[90%] md:w-full ">
              Brew the Perfect Moment. Dive into a world where each tea leaf
              tells a story
            </p>
            <Commonbutton>Explore more</Commonbutton>
          </div>
        </div>
      </div>
      <div className="container mx-auto my-8">
        <div className="text-center mx-3">
          <h2 className="text-2xl font-bold">Find Your Perfect Blend</h2>
          <p className="font-light">
            Brew the Perfect Moment. Dive into a world where each tea leaf tells
            a story
          </p>
          <div className="flex justify-end mt-4">
            <Link to={'/add-cha'}>
              <Commonbutton>
                <span className="flex justify-center items-center gap-2">
                  Add CHA + <FiCoffee />
                </span>
              </Commonbutton>
            </Link>
          </div>
        </div>
        <div>
            <div>
              {loader&& <p className="text-center mt-6"><span className="loading loading-spinner text-error"></span></p>}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-4 justify-center mx-3 items-center gap-4">
              {
                allcha.map((singlecha,indx) => <SingleCha  key={indx} allcha={allcha} setallcha={setallcha} singleCha={singlecha}></SingleCha>)
              }
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
