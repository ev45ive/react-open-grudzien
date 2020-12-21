import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


window.React = React;
window.ReactDOM = ReactDOM;

type Props = {
  name: string;
  color: string;
};

const PersonElem = (props: Props) => React.createElement('div', {
    style: { color: props.color }
  },
  props.name + " ma kota"
);

const div = React.createElement('div', {},
  PersonElem({ color: 'red', name: "Asia" }),
  PersonElem({ color: 'blue', name: "Bob" }),
  PersonElem({ color: 'green', name: "Kate" }),
)

// const div = React.createElement('div', { id: '123', title: 'test' },
//   PersonElem({ color: 'red', name: "Asia" }),
//   React.createElement('input'),
//   React.createElement('span', {
//     title: "placki",
//     className: "klasa",
//     style: {
//       color: 'red',
//       borderBottom: '1px solid red'
//     }
//   }, "i placki"),
// )

ReactDOM.render(div, document.getElementById('root'))

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
