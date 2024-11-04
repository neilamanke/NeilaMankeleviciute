import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";


export const HomePage = () => {
    const [postHome, setHomePage] =useState();

    const {id} = useParams();

    useEffect(() =>{
        axios.get(`https://mondayexam.onrender.com/api-docs/#/${id}`)
        .then(response => setHomePage(response.data))
        .catch(error => console.log(error));
    },[]);
  return (
    <>
      <div >
      <h5>{postHome?.title}</h5>
      <p>{postHome?.cover}</p>
      </div>
<Outlet/>
    </>
  );
};


