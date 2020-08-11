import React from 'react';
import Form from './Form';
const Contact=()=>{
  return(
    <>
    <div className="my-5">
    <h1 className="text-center"> Contact Us</h1>
    </div>
    <div className="container contact-div">
      <div className="row">
        <div className="col-md-6 col-10 mx-auto">
            <Form/>

        </div>
      </div>
    </div>
    </>
  )
}

export default Contact;