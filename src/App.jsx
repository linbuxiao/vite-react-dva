import React from 'react'
import { HashRouter as Router, Link, Switch } from 'react-router-dom'
import './App.css'

function About() {
  return (
    <div>About</div>
  )
}

function App() {

  return (
    <Switch>
      <Router exact path="/">
        <Link to={{
          pathname: '/about'
        }}>
          点我去关于
        </Link>
      </Router>
      <Router path="/about">
        <About />
      </Router>      
    </Switch>
  )
}

export default App
