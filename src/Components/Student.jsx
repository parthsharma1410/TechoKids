import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import pic1 from '../img/pic1.PNG'

function Student(props) {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-5">
            <h1 class="font-weight-bold heading animate__animated animate__bounce">
              Student:
            </h1>
            <p>Do you want to:</p>
            <div className="btn2">
              <button>
                <Link class="buttonlink" to="/studentlogin">
                  Login
                </Link>
              </button>
              </div>
              <br />
                {/*<p>OR</p>*/}
                <div className="btn2">
              <button>
                <Link class="buttonlink" to="/studentsignup">
                  SignUp
                </Link>
              </button>
            </div>
          </div>
          <div class="pic">
             <img class="imgabout animate__animated animate__fadeIn animate__delay-1s image" src={pic1} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Student;
