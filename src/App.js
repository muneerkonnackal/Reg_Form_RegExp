import "./App.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React, { useRef, useState } from "react";


function Register() {
  //js
  const [regData, setRegData] = useState({
    uname: "",
    email: "",
    dob: "",
    password: "",
    confirmpswd: "",
  });

  const [booleanData, setBooleanData] = useState({
    isUnameValid: true,
    isEmailValid: true,
    isDobValid: true,
    isPasswordValid: true,
    isConfirmpswdValid: true,
  });
 

  const getRegData = (e) => {
    const { name, value } = e.target;
    setRegData({ ...regData, [name]: value });

    if (name === "uname" ){
    
      if (value.match(/^[A-Za-z0-9]{3,16}$/)) {
        setBooleanData({ ...booleanData, isUnameValid: true });
        
      } else {
        setBooleanData({ ...booleanData, isUnameValid: false });
      }
    } 

    else if (name === "email") {
      if (value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        setBooleanData({ ...booleanData, isEmailValid: true });
        
      } else {
        setBooleanData({ ...booleanData, isEmailValid: false });
      }
    }

    else if (name === "password") {
      if (
        value.match(
          /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/
        )
      ) {
        setBooleanData({ ...booleanData, isPasswordValid: true });
      } else {
        setBooleanData({ ...booleanData, isPasswordValid: false });
      }
    }

   else  if (name === "confirmpswd") {
      if (value === regData.password) {
        setBooleanData({ ...booleanData, isConfirmpswdValid: true });
      } else {
        setBooleanData({ ...booleanData, isConfirmpswdValid: false });
      }
    }
  };
  console.log(regData);
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!regData.uname||!regData.email||!regData.password||!regData.confirmpswd){
      alert("Please fill carefully")
    }
    else{
      alert("Successfully Registered");
    }
  };

  return (
   <div className="container-fluid " style={{backgroundImage:`url("https://educationcloset.com/wp-content/uploads/2017/09/moore1.jpg")`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
      <div className="row">
        <div className="col-lg-6 p-5">
          <h1 className="text-dark  fw-bolder " style={{fontFamily:'Grechen Fuemen, cursive',fontSize:"50px"}}>Welcome to Kids School</h1>
          <i style={{fontFamily:'Lexend, sans-serif',fontSize:"30px"}}>The world is their playground, and imagination is their guide. Kids School: where the magic begins.</i>
        </div>
        <div className="col-lg-6">
          <div
            style={{ height: "100vh" }}
            className="d-flex justify-content-center align-items-center w-100 "
          >
            <div className="  p-5  rounded-3 shadow-5" style={{ width: "480px",backgroundColor:"rgba(255, 255, 255, 0.75)", WebkitBackdropFilter:" blur(16px) saturate(180%)",backdropFilter:"blur(16px) saturate(180%)",border:"1px solid rgba(20, 13, 19, 0.3)"  }}>
              <div>
                <h3
                  className="text-center fw-bolder"
                  style={{ color: "rgb(77, 1, 77)", marginTop: "-20px" }}
                >
                 Student Register
                </h3>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="d-flex flex-column">
                  <label htmlFor="username">Username</label>
                  <TextField
                    name="uname"
                                  onChange={(e) => getRegData(e)}
                    className=""
                    id="outlined-basic"
                    label="Username"
                    variant="outlined"
                    required
                   
                  />
                </div>
                {!booleanData.isUnameValid && (
                  <div>
                    <p className="text-danger fw-bolder" style={{ fontSize: "12px" }}>
                      *Username should be 3-16 characters and shouldn't include any
                      special character!
                    </p>
                  </div>
                )}
      
                <div className="d-flex mt-2 flex-column">
                  <label htmlFor="Email">Email</label>
                  <TextField
                    name="email"
                   
                    onChange={(e) => getRegData(e)}
                    className=""
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                  />
                </div>
                {!booleanData.isEmailValid && (
                  <div>
                    <p className="text-danger fw-bolder" style={{ fontSize: "12px" }}>
                      *Please enter a valid email!
                    </p>
                  </div>
                )}
      
                <div className="d-flex mt-2  flex-column">
                  <label htmlFor="DOB">Date of birth</label>
                  <TextField
                    name="dob"
                    
                    onChange={(e) => getRegData(e)}
                    className="mt-"
                    type="date"
                    id="outlined-basic"
                    label=""
                    variant="outlined"
                    required
                  />
                </div>
                {!booleanData.isDobValid && (
                  <div>
                    <p className="text-danger fw-bolder" style={{ fontSize: "12px" }}>
                      *Required field!
                    </p>
                  </div>
                )}
      
                <div className="d-flex mt-2  flex-column">
                  <label htmlFor="Password">Password</label>
                  <TextField
                    name="password"
                    
                    onChange={(e) => getRegData(e)}
                    className="mt-"
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                  />
                </div>
                {!booleanData.isPasswordValid && (
                  <div>
                    <p className="text-danger fw-bolder" style={{ fontSize: "12px" }}>
                      *Password should be 8-20 characters and include at least 1
                      letter, 1 number and 1 special character!
                    </p>
                  </div>
                )}
      
                <div className="d-flex mt-2  flex-column">
                  <label htmlFor="Re-Password">Confirm Password</label>
                  <TextField
                    name="confirmpswd"
                    
                    onChange={(e) => getRegData(e)}
                    className="mt-"
                    id="outlined-basic"
                    label="Confirm Password"
                    variant="outlined"
                  />
                </div>
                {!booleanData.isConfirmpswdValid && (
                  <div>
                    <p className="text-danger fw-bolder" style={{ fontSize: "12px" }}>
                      *Passwords doesn't match!
                    </p>
                  </div>
                )}
      
                <div className="d-flex mt-2  flex-column">
                  <Button
                 disabled={!booleanData.isUnameValid || !booleanData.isEmailValid || !booleanData.isDobValid || !booleanData.isPasswordValid || !booleanData.isConfirmpswdValid}
                  type="submit"
                    className="text-light p-3 mt-3"
                    style={{ background: "rebeccapurple" }}
                  >
                    Register
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
   </div>
  );
}

export default Register;
