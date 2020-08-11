import React, { useState } from 'react';

const Form=()=>{

const [data,setdata]=useState({
    name:"",
    email:"",
    phone:"",
    msg:"",
});

const InputEvent=(event)=>{
    const{name,value}=event.target;

    setdata((preval)=>{
        return{
            ...preval,
            [name]:value
        }
    })
}

const fsubmit=(e)=>{

    e.preventDefault();
    alert(
        `Name is ${data.name}. Mobile number is ${data.phone} My email is ${data.email}  `
    )
}
    return(
    
        <>

<form onSubmit={fsubmit}>
  
  <div class="form-group">
    <label for="exampleInputPassword1">Enter Name</label>
    <input type="text"   name="name" value={data.name} onChange={InputEvent}      class="form-control" placeholder="Enter your name" id="exampleInputName"/>
  </div>

  <div class="form-group">
    <label for="exampleInputEmail1">Enter Email</label>
    <input type="email"  name="email" value={data.email} onChange={InputEvent}  placeholder="Enter your Email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>

  <div class="form-group">
    <label for="exampleInputPassword1">Phone</label>
    <input type="number"   name="phone" value={data.phone} onChange={InputEvent}   class="form-control" placeholder="Enter your mobile number" id="exampleInputPassword1"/>
  </div>

  <div class="form-group">
    <label for="exampleInputPassword1"  name="message" value={data.msg} onChange={InputEvent}  class="form-control" id="exampleInputPassword1" >Message</label>
    <textarea 
            class="form-control"
            rows="3"
    >

    </textarea>
  </div>
 
  <button type="submit" class="btn btn-primary">Submit</button>
</form>


        </>
    )

}

export default Form;