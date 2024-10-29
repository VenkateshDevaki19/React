import React from 'react'
import AuthProvider from './AuthProvider'
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login'
import Profile from './Components/profile'
import Settings from './Components/Settings'

const App = () => {
  return (
    <div>
      <AuthProvider>
        <Router>
          <nav>
            <link to="/">Home</link>
            <link to="/login">login</link>
            <link to="/profile">Profile</link>
            <link to="/settings">Settings</link>
          </nav>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <ProtectedRoute path="/profile" component={Profile} />
            <ProtectedRoute path="/settings" component={Settings} />
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  )
}

export default App
