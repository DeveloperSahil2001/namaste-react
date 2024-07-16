import React from "react"
import ReactDOM from "react-dom/client"

{/*
    <div id="parent">
        <div id="child">
            <h1>Hi H1</h1>
            <h2>Hi H2</h1>
        </div>
        <div id="child2">
            <h1>Hi H1</h1>
            <h2>Hi H2</h1>
        </div>
    </div>
*/}


// const header = React.createElement("h1", {id: "heading"}, "Hello world from react!")

const parent = React.createElement(
    "div", { id: "parent" },
    [React.createElement(
        "div", { id: "child" },
        [React.createElement("h1", {}, "Hi H1"), React.createElement("h2", {}, "Hi H2")]
    ),
    React.createElement(
        "div", { id: "child2" },
        [React.createElement("h1", {}, "Hi H1"), React.createElement("h2", {}, "Hi H2")]
    )]
)

console.log(parent)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(parent)