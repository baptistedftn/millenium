import React from 'react';

import '../Assets/CSS/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from '../Components/Navbar';
import Footer from '../Components/Footer';

import Accueil from '../Views/Accueil';
import Blog from '../Views/Blog';
import Inscription from './Inscription';
import Sections from './Sections'
import Agenda from './Agenda';

import { Container, Button, Fade, Card, CardBody, CardHeader, } from 'reactstrap';

import { BrowserRouter as Router, Switch, Route, Link, } from 'react-router-dom';

function App() {
  return (
    <Router>
      
      <div className="App">
        <Fade>
          <NavBar/><br/>
          <Container className="themed-container" fluid={true}>
            <Switch>
              <Route exact path="/">
                <Accueil/>
              </Route>
              <Route exact path="/blog">
                <Blog/>
              </Route>
              <Route path="/sections/:selectedSection" component={Sections}/>
              <Route exact path="/agenda">
                <Agenda/>
              </Route>
              <Route exact path="/inscription">
                <Inscription/>
              </Route>
              <Route>
                <Card>
                  <CardHeader><h1>404 - Page non trouvée</h1></CardHeader>
                  <CardBody>
                    <p>Nous n'avons pas trouvé la page {'"'+window.location.pathname.substring(1)+'"'}</p>
                    <Link to='/'><Button color='primary'>Retour à l'Accueil</Button></Link>
                  </CardBody>
                </Card>
              </Route>
            </Switch>
          </Container> 
          <Footer location={window.location.pathname.substring(1)} />
        </Fade>
      </div>
    </Router>
  );
}

export default App;
