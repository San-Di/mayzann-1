import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import './css/style.css';
import App from "./App";
import TestComponent from "./containers/TestComponent";
import fetchableContainer from "./containers/FetchableContainer";


let FetchTest = fetchableContainer({
    url: 'http://192.178.1.7/posts'
})(TestComponent);

ReactDOM.render(
   <App/>
    ,document.getElementById('root'));


