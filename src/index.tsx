import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './core/services'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// window.React = React;
// window.ReactDOM = ReactDOM;

// type Props = {
//   name: string;
//   color: string;
//   children: React.ReactNode[] | React.ReactNode
// };

// const PersonElem = (props: Props) => React.createElement('div', {
//   style: { color: props.color }
// },
//   props.name + " ma kota" + props.children + PersonItem({})
// );
// const PersonItem:React.FunctionComponent = (props) => <div>Item</div>


// const title = "title"
// const div = <div id="123" title={title + "!"}>
//   {/* {PersonElem({ color: 'red', name: "Asia" })} */}
//   <PersonElem name="Alice" color="red"> Placki <div>Test</div> </PersonElem>
//   <PersonElem name={'Bob'} color="red"> Placki <PersonItem>Test</PersonItem> </PersonElem>

//   <span title="placki" className="klasa" style={
//     {
//       color: 'red',
//       borderBottom: '1px solid red'
//     }
//   }></span>
//   i placki
// </div>;
// debugger

// ReactDOM.render(div, document.getElementById('root'))



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
