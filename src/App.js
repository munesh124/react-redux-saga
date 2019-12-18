import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { anotherName } from "./actions/myaction";

function App(props) {
  return (
    <div className="App">
      <h1>I am App Component</h1>
      <h1>My name is {props.myName}</h1>
      <button onClick={() => props.changeName("Mannu")}>Change Name</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    myName: state.name
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeName: name => {
      dispatch(anotherName(name));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
