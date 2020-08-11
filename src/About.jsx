import React from 'react';
import Coc from './Coc';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import web from "../src/images/soft1.png";
import { NavLink } from 'react-router-dom';
const About=()=>{
  return(
    <>
    <Coc name='Welcome to About page' imgsrc={web} visit='/contact' btname="contact now"/>
    </>
  );
}

export default About;