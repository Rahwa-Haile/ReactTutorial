import React from "react";
import ReactDOM from "react-dom";

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h1>Rahwa Yohannes</h1>;
const Message = () => <p>This is my message</p>;
// const Greeting = ()=>{
//   return React.createElement('h1', {}, 'Hello World')
// }
// const Greeting = () => {
//   return React.createElement("div", {}, React.createElement('h1', {}, 'Hello World'));
// };
ReactDOM.render(<Greeting />, document.getElementById("root"));
