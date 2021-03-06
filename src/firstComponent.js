import React from "react";

function MyComponent(props) {
  return <h1>This Component was built by {props.name}!</h1>;
}

export function App() {
  return (
    <div>
      <MyComponent name="Rohit" />
      <MyComponent name="Steve" />
      <MyComponent name="Tony" />
      <MyComponent name="Shelby" />
    </div>
  );
}
