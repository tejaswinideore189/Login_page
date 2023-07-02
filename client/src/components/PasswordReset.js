import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import images from "../images/download.png";
import "./PasswordReset.css";

const PasswordReset = () => {
  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");

  const setVal = (e) => {
    setEmail(e.target.value);
  };

  const sendLink = async (e) => {
    e.preventDefault();

    if (email === "") {
      toast.error("email is required!", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.warning("includes @ in your email!", {
        position: "top-center",
      });
    } else {
      const res = await fetch("/sendpasswordlink", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (data.status === 200) {
        setEmail("");
        setMessage(true);
      } else {
        toast.error("Invalid User", {
          position: "top-center",
        });
      }
    }
  };

  return (
    <>
      <div class="container-fluid">
        <div class="row" style={{ height: "100vh" }}>
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
          <div className="col-md-6" style={{ backgroundColor: "white" }}>
            <div className="innerdiv">
              <div class="wrapper_forgot">
                {/* <div class="logo"></div> */}
                <div className="form_data">
                  <div className="form_heading">
                    <h1>Enter Your Email</h1>
                  </div>

                  {message ? (
                    <p style={{ color: "green", fontWeight: "bold" }}>
                      pasword reset link send Succsfully in Your Email
                    </p>
                  ) : (
                    ""
                  )}
                  <form>
                    <div className="form_input">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        value={email}
                        onChange={setVal}
                        name="email"
                        id="email"
                        placeholder="Enter Your Email Address"
                      />
                    </div>

                    <button className="btn" onClick={sendLink}>
                      Send
                    </button>
                  </form>
                  <ToastContainer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordReset;
