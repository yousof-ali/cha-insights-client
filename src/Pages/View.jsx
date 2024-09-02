import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Commonbutton from "../Components/Commonbutton";

const View = () => {
  const data = useLoaderData();
  const { _id, name, chef, taste, price, photo,category,details } = data;
  console.log(data);
  return (
    <div className="mx-3 pt-4">
        <Link to={'/'}><Commonbutton>Back to Home</Commonbutton></Link>
      <div className="card bg-base-100 mx-auto  max-w-[600px] my-6 shadow-xl">
        <figure>
          <img
            src={photo}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title"><span className="font-bold">Name:</span><span className="font-light">{name}</span></h2>
         <p>
         <span className="font-bold">Chef:</span>{" "}
         <span className="font-light">{chef}</span>
         </p>
         <p>
         <span className="font-bold">Price:</span>{" "}
         <span className="font-light">{price}</span>
         </p>
         <p>
         <span className="font-bold">Taste:</span>{" "}
         <span className="font-light">{taste}</span>
         </p>
         <p>
         <span className="font-bold">Category:</span>{" "}
         <span className="font-light">{category}</span>
         </p>
         <p>
         <span className="font-bold">Details:</span>{" "}
         <span className="font-light">{details}</span>
         </p>
          
        </div>
      </div>
    </div>
  );
};

export default View;
