import React from "react";

class ProfileC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count1: 0,
      count2: 0,
    };
    console.log("child constructor");
  }
componentDidMount() {
    // console.log(" child componentDidMount");
    // ftch data from server 
}


  render() {
    console.log(" child render");
    return (
      <>
        <h1> profile class component</h1>
        <h2>Name:{this.props.name}</h2>
        <h2>
          Count:{this.state.count1},{this.state.count2}
        </h2>
        <button
          onClick={() =>
            this.setState({
              count1: 1,
              count2: 2,
            })
          }
        >
          setcount
        </button>
      </>
    );
  }
}

export default ProfileC;
