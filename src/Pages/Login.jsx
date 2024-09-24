import React, { useContext, useState } from "react";
import { BiSolidHide } from "react-icons/bi";
import { IoEye } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { authProvider } from "../AuthProvider/AuthProvider";

const Login = () => {
    const {signIn} = useContext(authProvider);
    console.log(signIn)
  const [hide, sethide] = useState(false);
  const [error,setError] =useState('');

  const handleHide = () => {
    sethide(!hide);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError('')
    const form = e.target 
    const email = form.email.value 
    const password = form.password.value
    console.log(email,password);
    signIn(email,password)
    .then(result => {
      console.log(result);
      const newCreationTime = result.user.metadata.lastSignInTime
      const updateUser = {email,newCreationTime}
      console.log(updateUser)
      fetch('https://cha-insights-server.onrender.com/update',{
        method:"PATCH",
        header:{
          'content-type':'application/json'
        },
        body:JSON.stringify(updateUser)
      })
      .then(res => res.json())
      .then(result =>{
        console.log(result);
      })
    })
    .catch((e) => {
      setError(e.message);
    })
  }
  return (
    <div>
      <h2 className="text-center text-2xl font-bold mt-6">Login</h2>
      <div className="max-w-[300px] mt-4 mx-auto mb-6">
        <div className="rounded-xl shadow-2xl p-4">
          <form onSubmit={handleLogin}>
            <div>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full"
                name="email"
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
            {
              error&&<p className="text-red-600">{error}</p>
            }
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
