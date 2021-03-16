import React from "react";
import { Link, withRouter } from "react-router-dom";
import pic1 from '../img/pic1.PNG'

function Dashboards(props) {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-5">
            <h1 class="font-weight-bold heading animate__animated animate__bounce">
              Welcome to TechoKids!
            </h1>
            <p>Select your role:</p>
            <div className="btn2">
              <button>
                <Link class="buttonlink" to="/teacher">
                  Teacher
                </Link>
              </button>
                <p>OR</p>
              <button>
                <Link class="buttonlink" to="/student">
                  Student
                </Link>
              </button>
            </div>
          </div>
          <div class="col-lg-7">
            <img class="imgabout animate__animated animate__fadeIn animate__delay-1s image" src={pic1} alt="logo" /> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboards;
