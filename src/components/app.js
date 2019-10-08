import { h } from 'preact'
import { Switch, Route } from 'wouter-preact'

import Header from './header'

// Code-splitting is automated for routes
import Home from '../routes/home'
import Posts from '../routes/posts'

const App = () => (
  <div id="app">
    <Header />
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/posts" component={Posts} />
      {/* <Route path='/:rest' component={Error} /> */}
    </Switch>
  </div>
)

export default App
