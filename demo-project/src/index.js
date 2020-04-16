import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const h1Element=<h1 className="demoClass">Demo for H1</h1>;

ReactDOM.render(h1Element,document.getElementById("root"));

const demo=React.createElement("h2",null,"demo for react without jsx");
ReactDOM.render(demo,document.getElementById("root2"));

const root2=(<div>
  <h3></h3>
</div>);//redex