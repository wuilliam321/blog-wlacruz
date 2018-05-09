import React from 'react';
import ReactDOM from 'react-dom';
import App from './Component/App';

/**
 * Wrapper for hot code reload
 * @param Component
 */

function render(Component) {
  ReactDOM.render(
    <Component/>
    ,
    document.querySelector('#root')
  );
}

render(App);
