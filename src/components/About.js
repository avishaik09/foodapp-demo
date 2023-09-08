import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import Profile from "./Profile";

import UserContext from "../utils/UserContext";
import { Component } from "react";


class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
  return (
    <div>
      <h1>About</h1>
      <UserContext.Consumer>
        {({user})=><h4 className=" p-10 font-bold text-xl text-black">{user.name}-({user.email})</h4>}
      </UserContext.Consumer>
      <ProfileClass name={"Abhi"}/>
      <Profile name={"abhi"}/>
    </div>
  );
}
}
export default About;

/*
parent constructor
parent render
    1st child constructor
    1st child render
    2nd childConstructor
    2nd child render
    1st child componentdidmount
    2nd child componentdidmount
  parent componentDidMount  
*/