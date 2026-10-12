const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "this is h1 inside the children1 div tag"),
    React.createElement("h2", {}, "this is h2 inside the children1 div tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "this is h1 inside the children2 div tag"),
    React.createElement("h2", {}, "this is h2 inside the children2 div tag"),
  ])
]);

const h1 = React.createElement(
  "h1",
  { id: "heading" },
  "hello world from react js"
);
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
