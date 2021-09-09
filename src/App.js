import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages';
import SignInPage from './pages/signin'
import Footer from './components/Footer';

function App() {
  return (
    <>
    
      <Router>
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/signin' component={SignInPage} exact/>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
// Creating Sign In component 3:34:22