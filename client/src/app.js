import React from 'react';
import ReactDOM from 'react-dom';
import HelloComponent from './components/HelloComponent';
import 'bootstrap/less/bootstrap.less';
import AppContainer1 from "./AppContainer1";
import AppContainer2 from "./AppContainer2";


const node1 = document.getElementById('app');

if (node1) {
  ReactDOM.render( <AppContainer2 />, node1);
}