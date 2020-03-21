import React, { Component } from 'react'
import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from './Components/Dashboard'

export class App extends Component {
  render() {
    return (
           <BrowserRouter>
                <Switch>
                   <Route path="/" component={Dashboard} exact />
                </Switch>
           </BrowserRouter>
    )
  }
}

export default App