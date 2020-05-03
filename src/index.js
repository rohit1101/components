import React from "react";
import ReactDOM from "react-dom";
import { App } from "./firstComponent.js";
import "./index.css";

ReactDOM.render(<App />, document.querySelector("#root"));

// function MyComponent(props) {
//   return <h1>Welcome {props.name}</h1>;
// }

// function Welcome(props) {
//   return (
//     <h1 className="head">Welcome {props.name} this is your first Component</h1>
//   );
// }

// function MyComponent(props) {
//   return <h1>This Component was built by {props.name}</h1>;
// }

// ReactDOM.render(Welcome({ name: "Rohit" }), document.querySelector("#root"));

// import App from './App';
// import * as serviceWorker from './serviceWorker';

// function rend() {
//   return <h1>{new Date().toLocaleTimeString()}</h1>;
// }

// setInterval(() => {
//   ReactDOM.render(rend(), document.querySelector("#root"));
// }, 1000);

// function format({ firstName, lastName }) {
//   return `${firstName} ${lastName}`;
// }

// const user = {
//   firstName: "Rohit",
//   lastName: "S",
// };

// function greeting(user) {
//   if (user) {
//     return (
//       <div>
//         <h1 className="head">I am {format(user)} and excited to learn React</h1>
//         <h1 className="head">React Docs are awesome!</h1>
//       </div>
//     );
//   } else {
//     return <h1>Hi Stalker!</h1>;
//   }
// }

// const name = "Rohit";
// const element = <h1>I am {format(user)}</h1>;
// ReactDOM.render(greeting(user), document.getElementById("root"));

// timer
// function rend() {
//   const el = <h1>{new Date().toLocaleTimeString()}</h1>;
//   ReactDOM.render(el, document.querySelector("#root"));
// }

// setInterval(rend, 1000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
