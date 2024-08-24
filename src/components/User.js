import { useEffect, useState } from "react";

const User = ({ name }) => {
  useEffect(()=> {
    const timer = setInterval(()=>{
      console.log("Hello");
    }, 1000)

    return () => {
      clearInterval(timer);
    }
  }, [])

  return (
    <div className="user-card">
      <h2>Name: {name}</h2>
      <h3>Location: Sunam</h3>
    </div>
  );
};

export default User;
