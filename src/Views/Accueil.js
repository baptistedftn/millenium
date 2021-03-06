import React from 'react';

import { Card, CardText, CardBody, CardTitle, Button, UncontrolledCollapse, CardImg, Container, } from 'reactstrap';

import ca from '../Assets/Medias/comite_administration.jpg';
import map from '../Assets/Medias/map.png';

const Accueil = (props) => {
  return (
    <div>
      <Container style={{maxWidth: '800px'}} >
        <Card>
          <CardImg src={ca}/>
          <CardBody>
            <CardTitle>Bienvenue sur le site du Millénium de Marles-les-Mines</CardTitle>
            <CardText>
              L'association du Millénium de Marles-les-Mines existe depuis le moment où elle a été crée et est presidée par un être humain vivant sur Terre &nbsp;<i class="fas fa-smile-wink"/><br/>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lectus odio, molestie eu enim sit amet, mollis pellentesque nibh. Phasellus at euismod lorem, nec euismod purus. Donec pulvinar feugiat nisi. 
            </CardText>
            <Button color='primary' id='toggler_map'>Où nous trouver <i class="fas fa-map-marked-alt"/></Button>
            <UncontrolledCollapse toggler="#toggler_map">
              <img src={map} alt='Carte' width='100%'/><br/>
              <a href='geo:50.49762,2.49286?z=19'>Ouvrir sur la carte <i class="fas fa-map-marker-alt"/></a>
            </UncontrolledCollapse>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
};

export default Accueil;
