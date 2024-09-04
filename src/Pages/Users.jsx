import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {

  const loaderdata = useLoaderData();
  const [alluser,setallUser] =useState(loaderdata)

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/userdelete/${id}`,{
        method:"DELETE"
    })
    .then(res => res.json())
    .then(result => {
        console.log(result);
        const newallUser = alluser.filter(user => user._id !== id);
        setallUser(newallUser);
    })
  }

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Email</th>
            <th>Creation Time</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        {
            alluser.map((user,indx) => <tbody key={user._id}>
                {/* row 1 */}
                <tr>
                  <th>{indx+1}</th>
                  <td>{user.email}</td>
                  <td>{user.creatAt}</td>
                  <button onClick={()=>handleDelete(user._id)} className="btn btn-primary">Delete</button>
                </tr>
              </tbody>)
        }
      </table>
    </div>
  );
};

export default Users;
