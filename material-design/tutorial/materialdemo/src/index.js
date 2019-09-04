import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
}from 'react-router-dom';
import './index.css';
import App from './App';  // 导入App组件
import SignIn from './SignIn'; // 导入About组件
 // 导入Inbox组件

 
export default class Hello extends Component{
    render(){
        return (
            <Router>
                <div>
                   
                    
                    <Route exact path="/" component={App} />
                    <Route path="/SignIn" component={SignIn} />
                    
                </div>
            </Router>
        )
    }
}
ReactDOM.render(<Hello />, document.getElementById('root'));

