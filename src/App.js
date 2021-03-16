import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Teacher from "./Components/Teacher";
import Student from "./Components/Student";
import TeacherSignup from "./Components/TeacherSignup";
import TeacherLogin from "./Components/TeacherLogin";
import StudentSignup from "./Components/StudentSignup";
import StudentLogin from "./Components/StudentLogin";
import Navigation from "./Components/Navigation"
import Dashboards from "./Components/Dashboards"
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
        </Switch>
        <Switch>
          <Route path="/teacher" exact component={() => <Teacher />} />
        </Switch>
        <Switch>
          <Route path="/student" exact component={() => <Student />} />
        </Switch>
        <Switch>
          <Route
            path="/teachersignup"
            exact
            component={() => <TeacherSignup />}
          />
        </Switch>
        <Switch>
          <Route
            path="/teacherlogin"
            exact
            component={() => <TeacherLogin />}
          />
        </Switch>
        <Switch>
          <Route
            path="/studentsignup"
            exact
            component={() => <StudentSignup />}
          />
        </Switch>
        <Switch>
          <Route
            path="/studentlogin"
            exact
            component={() => <StudentLogin />}
          />
        </Switch>
        <Switch>
          <Route
            path="/dashboard"
            exact
            component={() => <Dashboards />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
