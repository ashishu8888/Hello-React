import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1",
    {
        id : "heading"
    }
    , "Hello, World form React");

// const parent = React.createElement("div", {}, [
//   React.createElement("div", {}, [
//     React.createElement("h1", {}, "This is h1 from react element"),
//     React.createElement("h2", {}, "This is h2 from react element"),
//   ]),
//   ,
//   React.createElement("div", {}, [
//     React.createElement("h1", {}, "This is h1 from react element"),
//     React.createElement("h2", {}, "This is h2 from react element"),
//   ]),
// ]);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
// console.log(parent);

// const jsxheading = <h1 id="heading">Hello, World from JSX</h1>;
 const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxheading);

const Title = () => (
  <h1 >
    Hello, World from JSX
  </h1>
);
const title =  (
  <h1>
    this is jsx in react
  </h1>
);

const HeadingComponent = () => (
  <div>
    <Title />
     {/* {Title()}
    <Title></Title> */}
    {title}
    <h1>
      Hello, functional component.
    </h1>
  </div>
)

root.render(<HeadingComponent/>); 
