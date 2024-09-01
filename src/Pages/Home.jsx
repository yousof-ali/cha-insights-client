import React from "react";
import Commonbutton from "../Components/Commonbutton";
import { FiCoffee } from "react-icons/fi";
import { Link } from "react-router-dom";

const Home = () => {
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
      <div className="container mx-auto my-6">
        <div className="text-center">
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
      </div>
    </div>
  );
};

export default Home;
