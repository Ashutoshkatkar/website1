import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import web from "../src/images/image2.png";
import { NavLink } from 'react-router-dom';
import Coc from './Coc.jsx';
const Home=()=>{
  return(
    <>
      <Coc name='Grow your bussiness with' imgsrc={web} visit='/service' btname="Get Started"/>
      </>
  );
}

export default Home;