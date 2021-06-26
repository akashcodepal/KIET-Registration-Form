import React from 'react'
import {BrowserRouter as Router,Route,Switch } from "react-router-dom"
import Page2 from './components/Page2'
import Page1 from './components/Page1'

function App() {

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/page2">
            <Page2/> 
          </Route>
         
          <Route path="/">
            <Page1/> 
          </Route>
         </Switch>
      </div>
    </Router>
  )
}

export default App
