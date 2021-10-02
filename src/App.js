import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages';
import SignInPage from './pages/signin'
import Footer from './components/Footer';
import { useState } from 'react';


function App() {

  const [idUser, setIdUser] = useState(-999)
  const [token, setToken] = useState(false)

  const isUser = (id, tok) => {
    setIdUser(id)
    setToken(tok)
  }

  return (
    <>
    
      <Router>
        <Switch>
          <Route path='/' component={() => <Home  idUser={idUser} isUser={isUser} token={token} />} exact/>
          <Route path='/signin' component={() => <SignInPage  idUser={idUser} isUser={isUser} />} exact/>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
// Creating Sign In component 3:34:22