import React, { useContext, useState } from "react";
import { BiSolidHide } from "react-icons/bi";
import { IoEye } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { authProvider } from "../AuthProvider/AuthProvider";

const Login = () => {
    const {name} = useContext(authProvider);
    console.log(name);
    console.log(import.meta.env.my_name)
  const [hide, sethide] = useState(false);

  const handleHide = () => {
    sethide(!hide);
  };
  return (
    <div>
      <h2 className="text-center text-2xl font-bold mt-6">Login</h2>
      <div className="max-w-[300px] mt-4 mx-auto mb-6">
        <div className="rounded-xl shadow-2xl p-4">
          <form>
            <div>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full"
                name="Email"
                required
              />
            </div>
            <div>
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
                Login
              </button>
            </div>
          </form>
          <p>
            No account?
            <Link to={"/register"} className="btn btn-link">
              register
            </Link>
          </p>
          <div className="divider">or</div>
          <div className="flex items-center justify-center text-2xl gap-4">
            <div className="cursor-pointer">
              <FaGoogle />
            </div>
            <div className="cursor-pointer">
              <FaGithub />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
