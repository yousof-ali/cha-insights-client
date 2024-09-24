import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Commonbutton from "../Components/Commonbutton";

const AddCha = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target
    const name = form.name.value
    const chef = form.chef.value
    const category = form.category.value
    const price = form.price.value
    const details = form.details.value
    const taste = form.taste.value
    const photo = form.photo.value
    const newCha = {name,chef,category,price,details,taste,photo}
    console.log(newCha);
    
    fetch('https://cha-insights-server.onrender.com/cha',{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(newCha)
    })
    .then(res => res.json())
    .then(result => {
      if(result.insertedId){
        Swal.fire({
          icon: "success",
          title: "New tea added!",
          showConfirmButton: false,
          timer: 1500
        });
        form.reset();
      }
      else{
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    })
  }
  return (
    <div className="px-2 md:px-4 bg-base-200 py-6 md:py-12">
      <Link to={'/'}><Commonbutton>Back to Home</Commonbutton></Link>
      <div className="max-w-[900px] mt-4 mx-auto  shadow-lg rounded-xl bg-orange-50  p-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-extrabold">ADD CHA</h2>
          <p className="font-light">Add a new cha for cha lovers..</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="md:flex justify-center gap-6">
          <div className="flex-1 space-y-4">
            <div className="space-y-2 ">
              <label className="font-bold" htmlFor="name">
                Name
              </label>
              <br />
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Name"
                className="p-2 rounded-xl outline-orange-300 w-full"
              />
            </div>
            <div className="space-y-2 ">
              <label className="font-bold" htmlFor="category">
                Category
              </label>
              <br />
              <input
                type="text"
                id="category"
                name="category"
                required
                placeholder="Category"
                className="p-2 rounded-xl outline-orange-300 w-full"
              />
            </div>
            <div className="space-y-2 ">
              <label className="font-bold" htmlFor="details">
                Details
              </label>
              <br />
              <input
                type="text"
                id="details"
                name="details"
                required
                placeholder="Details"
                className="p-2 rounded-xl outline-orange-300 w-full"
              />
            </div>
          </div>

          <div className="flex-1 mt-4 md:mt-0 space-y-4">
            <div className="space-y-2 w-2/1">
              <label className="font-bold" htmlFor="chef">
                Chef
              </label>
              <br />
              <input
                type="text"
                id="chef"
                name="chef"
                required
                placeholder="Chef"
                className="p-2 rounded-xl outline-orange-300 w-full"
              />
            </div>
            <div className="space-y-2 w-2/1">
              <label className="font-bold" htmlFor="price">
                Price
              </label>
              <br />
              <input
                type="number"
                id="price"
                name="price"
                required
                placeholder="Price"
                className="p-2 rounded-xl outline-orange-300 w-full"
              />
            </div>
            <div className="space-y-2 w-2/1">
              <label className="font-bold" htmlFor="taste">
                Taste
              </label>
              <br />
              <input
                type="text"
                id="taste"
                name="taste"
                required
                placeholder="Taste"
                className="p-2 rounded-xl outline-orange-300 w-full"
              />
            </div>
          </div>
          </div>
          <div className="space-y-2 w-2/1 my-4">
              <label className="font-bold" htmlFor="photo">
                Photo URL
              </label>
              <br />
              <input
                type="url"
                id="photo"
                name="photo"
                required
                placeholder="URL"
                className="p-2 rounded-xl outline-orange-300 w-full"
              />
            </div>
            <div className="flex justify-center">
            <input className='border-2 font-bold text-white border-orange-200 bg-orange-700 hover:bg-[#ffffff00] rounded-xl hover:text-orange-200 hover:border-orange-700 p-2' type="submit" value={"SUBMIT"} />
            </div>
        </form>
      </div>
    </div>
  );
};

export default AddCha;
