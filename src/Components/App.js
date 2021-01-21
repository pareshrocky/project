import React from "react";
import Form from "./Form";
export default function App() {
  return (
    <div className="App">
      <img
        className="bg-img-class"
        src="images/bg-intro-desktop.png"
        alt="bg-img"
      />
      <img
        className="sm-img-class"
        src="images/bg-intro-mobile.png"
        alt="sm-img"
      />
      <div className="row container">
        <div className="left-div col-lg-6">
          <h1 className="heading-1">Learn to Code by watching others</h1>
          <p className="para-1">
            See how experienced developers solve problems in real time. watching
            scripted tutorials is great, but understanding how developers think
            is invaluable
          </p>
        </div>
        <div className="right-div col-lg-6">
          <div className="right-top-div">
            <p style={{ marginBottom: 0 }}>
              <b>Try it free 7 days</b> then $20/mo. thereafter
            </p>
          </div>
          <Form />
        </div>
      </div>
    </div>
  );
}
