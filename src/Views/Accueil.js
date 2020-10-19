import React from 'react';

import { Card, CardText, CardBody, CardTitle, Button, UncontrolledCollapse, CardImg, Container, } from 'reactstrap';
import { builder, BuilderComponent } from '@builder.io/react'

import ca from '../Assets/Medias/comite_administration.jpg';
import map from '../Assets/Medias/map.png';

const Accueil = (props) => {
  builder.init('d06cb2e74bd54ec5bc7733ba22c9a922')
  return (
    <div>
      <Container style={{maxWidth: '800px'}} >
        <Card>
          <CardImg src={ca}/>
          <CardBody>
            <CardTitle>Bienvenue sur le site du Millénium de Marles-les-Mines</CardTitle>
            <CardText>
              <BuilderComponent
                model="page"
                entry="d8ce747be3dd4ee5b48527accf3fcfb9" 
              />
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
