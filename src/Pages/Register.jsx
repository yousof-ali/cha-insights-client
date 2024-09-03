import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiSolidHide } from "react-icons/bi";
import { IoEye } from "react-icons/io5";

const Register = () => {
  const [hide, setHide] = useState(false);

  const handleHide = () => {
    setHide(!hide);
  };

  return (
    <div>
      <h2 className="text-2xl text-center font-bold mt-6">Register</h2>
      <div className="max-w-[300px]  mx-auto my-6">
        <div className="rounded-xl shadow-2xl p-4">
          <form>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                name="name"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="url"
                placeholder="photo url"
                className="input input-bordered"
                name="photo"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="flex items-center gap-2">
                <input
                  type={hide ? "text" : "password"}
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <div className="text-2xl" onClick={handleHide}>
                  {hide ? <BiSolidHide /> : <IoEye />}
                </div>
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-orange-300 text-white hover:bg-orange-100 hover:text-amber-800">
                Register
              </button>
            </div>
          </form>
          <p>
            Already register?{" "}
            <Link to={"/login"} className="btn btn-link">
              login
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
