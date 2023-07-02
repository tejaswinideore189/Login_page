import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import images from "../images/download.png";
import images1 from "../images/images1.png";
import "./mix.css";

const Login = () => {
  const [passShow, setPassShow] = useState(false);

  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });

  const history = useNavigate();

  const setVal = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const loginuser = async (e) => {
    e.preventDefault();

    const { email, password } = inpval;

    if (email === "") {
      toast.error("email is required!", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.warning("includes @ in your email!", {
        position: "top-center",
      });
    } else if (password === "") {
      toast.error("password is required!", {
        position: "top-center",
      });
    } else if (password.length < 6) {
      toast.error("password must be 6 char!", {
        position: "top-center",
      });
    } else {
      // console.log("user login succesfully done");

      const data = await fetch("http://localhost:8010/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const res = await data.json();
      //  console.log(res);

      if (res.status === 200) {
        localStorage.setItem("usersdatatoken", res.result.token);
        history("/dash");
        setInpval({ ...inpval, email: "", password: "" });
      } else {
        toast.error("Invalid Credentials", {
          position: "top-center",
        });
      }
    }
  };

  return (
    <>
      {/* <div class="container">
            <div class="row" style={{ height: "100vh" }}>
            <div className='col-md-6'>
            <div
            className="col-md-6"
            style={{ backgroundColor: "#f6f7fa", textAlign: "center" }}
          >
            <img
              src={images}
              alt=""
              style={{
                borderRadius: "5%",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                marginTop: "15%",
              }}
            />
            <h1 style={{ marginTop: "10%" }}>Welcome To</h1>
            <br />
            <h1>
              <b>Mahesh Gyanpeeth</b>
            </h1>
            <br />
            <p>Powered by Stulyfe</p>
          </div>
            </div>
            
                 <section className='col-md-6' >
                <div className="form_data">
                    <div className="form_heading">
                        <h1>Welcome Back, Log In</h1>
                        <p>Hi, we are you glad you are back. Please login.</p>
                    </div>

                    <form>
                        <div className="form_input">
                            <label htmlFor="email">Email</label>
                            <input type="email" value={inpval.email} onChange={setVal} name="email" id="email" placeholder='Enter Your Email Address' />
                        </div>
                        <div className="form_input">
                            <label htmlFor="password">Password</label>
                            <div className="two">
                                <input type={!passShow ? "password" : "text"} onChange={setVal} value={inpval.password} name="password" id="password" placeholder='Enter Your password' />
                                <div className="showpass" onClick={() => setPassShow(!passShow)}>
                                    {!passShow ? "Show" : "Hide"}
                                </div>
                            </div>
                        </div>

                        <button className='btn' to="//register" onClick={loginuser}>Login</button>
                        <p>Don't have an Account? <NavLink to="/register">Sign Up</NavLink> </p>
                        <p style={{color:"black",fontWeight:"bold"}}>Forgot Password  <NavLink to="/password-reset">Click Here</NavLink> </p>
                    </form>
                    <ToastContainer />
                </div>
            </section>
           
            </div>
        </div> */}
      <div>
        <div className="container-fluid">
          <div className="row" style={{ height: "60vh" }}>
            <div
              className="col-md-6"
              style={{ backgroundColor: "#f6f7fa", textAlign: "center" }}
            >
              <img
                src={images}
                alt=""
                style={{
                  borderRadius: "5%",
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  marginTop: "15%",
                }}
              />
              <h1 style={{ marginTop: "20%" }}>Welcome To</h1>
              <br />
              <h1>
                <b>Mahesh Gyanpeeth</b>
              </h1>
              <br />
              <p>Powered by Stulyfe</p>
            </div>
            <div className="col-md-6" style={{ backgroundColor: "white" }}>
              {/* <section> */}
              <div className="form_data">
                <div className="form_heading"></div>
                <div className="innerdiv">
                  <div class="wrapper">
                    <div class="logo">
                      {/* <img className="logo1" src={logo} alt="" /> */}
                    </div>
                    <img
                      src={images1}
                      className="col-md-12"
                      alt=""
                      style={{ borderRadius: "5%", marginTop: "-2%" }}
                    />
                    <div class="text-left mt-4 name">
                      <h1>Login</h1>
                    </div>
                    <form>
                      <div className="form_input">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          value={inpval.email}
                          onChange={setVal}
                          name="email"
                          id="email"
                          placeholder="Enter Your Email Address"
                        />
                      </div>
                      <div className="form_input">
                        <label htmlFor="password">Password</label>
                        <div className="two">
                          <input
                            type={!passShow ? "password" : "text"}
                            onChange={setVal}
                            value={inpval.password}
                            name="password"
                            id="password"
                            placeholder="Enter Your password"
                          />
                          <div
                            className="showpass"
                            onClick={() => setPassShow(!passShow)}
                          >
                            {!passShow ? "Show" : "Hide"}
                          </div>
                        </div>
                      </div>

                      <button
                        className="btn"
                        to="//register"
                        onClick={loginuser}
                      >
                        Login
                      </button>
                      <p>
                        Don't have an Account?{" "}
                        <NavLink to="/register">Sign Up</NavLink>{" "}
                      </p>
                      <p style={{ color: "black", fontWeight: "bold" }}>
                        Forgot Password{" "}
                        <NavLink to="/password-reset">Click Here</NavLink>{" "}
                      </p>
                    </form>
                  </div>
                </div>
                <ToastContainer />
              </div>
              {/* </section> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
