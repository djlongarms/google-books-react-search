import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Saved from './pages/Saved'
import Search from './pages/Search'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Saved />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
