import React from 'react';
import ReactDOM from 'react-dom';
import HelloComponent from './components/HelloComponent';
import 'bootstrap/less/bootstrap.less';


const node1 = document.getElementById('app');

if (node1) {
  ReactDOM.render( <HelloComponent />, node1);
}