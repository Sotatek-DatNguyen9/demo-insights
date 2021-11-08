import React, { Component } from 'react';
import Content1 from './Content1/Content1';
import Content2 from './Content2/Content2';
import Content3 from './Content3/Content3';
import Content4 from './Content4/Content4';
import './styles.scss';
function Content(props) {
    return (
        <div className="content-wrapper">
            <Content1></Content1>
            <Content2></Content2>
            <Content3></Content3>
            <Content4></Content4>
        </div>
    );
}
 
export default Content;