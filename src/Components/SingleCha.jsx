import React from "react";
import { MdEdit } from "react-icons/md";
import { IoEyeSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const SingleCha = ({ singleCha,setallcha,allcha }) => {
  const { _id, name, chef, taste, price, photo } = singleCha;
  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        
        fetch(`http://localhost:5000/delete/${id}`,{
          method:"DELETE"
        })
        .then(res => res.json())
        .then(result => {
          console.log(result)
          if(result.deletedCount>0){
            Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        const newAllData = allcha.filter(cha => cha._id !== _id);
        setallcha(newAllData);
          }

        })
      }
    });
  };
  return (
    <div className="flex justify-centern border-2 p-4 border-orange-400 rounded-md shadow-md items-center ">
      <div className="flex-1">
        <img src={photo} alt="" />
      </div>
      <div className="flex-2 ml-4">
        <p>
          <span className="font-bold">Name:</span>{" "}
          <span className="font-light">{name}</span>
        </p>
        <p>
          <span className="font-bold">Taste:</span>{" "}
          <span className="font-light">{taste}</span>
        </p>
        <p>
          <span className="font-bold">Price:</span>{" "}
          <span className="font-light">{price} tk</span>
        </p>
      </div>
      <div className="text-2xl grid justify-end text-white  flex-1">
        <Link to={`/edit/${_id}`}>
          <div className="bg-lime-200 rounded p-1">
            <MdEdit />
          </div>
        </Link>
        <Link to={`/details/${_id}`}>
          <div className="my-2 bg-orange-300 rounded p-1">
            <IoEyeSharp />
          </div>
        </Link>
        <div
          onClick={() => handleDelete(_id)}
          className="bg-red-600 rounded p-1"
        >
          <MdDelete />
        </div>
      </div>
    </div>
  );
};

export default SingleCha;
