const heading = React.createElement("h1",
    {
        id : "heading"
    }
    , "Hello, World form React");

const parent = React.createElement("div", {}, [
  React.createElement("div", {}, [
    React.createElement("h1", {}, "This is h1 from react element"),
    React.createElement("h2", {}, "This is h2 from react element"),
  ]),
  ,
  React.createElement("div", {}, [
    React.createElement("h1", {}, "This is h1 from react element"),
    React.createElement("h2", {}, "This is h2 from react element"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

console.log(parent);
