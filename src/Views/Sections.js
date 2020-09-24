import React from 'react';
import { 
    Card, 
    Container, 
    CardHeader, 
    CardBody,
    CardImg, 
    Button,
    UncontrolledCollapse 
} from 'reactstrap';

import { useParams } from "react-router-dom";
const Sections = (props) => {
    let { selectedSection } = useParams();
    return (
        <Container style={{maxWidth: '800px'}}>
            <h1>Section {selectedSection}</h1>
            <Card>
                <CardHeader>Danse</CardHeader>
                <CardBody>
                    <CardImg src="https://dummyimage.com/hd1080/870787/fff.jpg&text=Photo+section+Danse"></CardImg>
                    <br/><br/>
                    <Button color="primary" id="toggler_danse" >
                        En savoir plus <i class="fas fa-info-circle"/>
                    </Button>
                    <UncontrolledCollapse toggler="#toggler_danse">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur semper sit amet risus a pretium. Vestibulum vitae viverra ligula. Fusce id nulla sagittis, feugiat sem id, suscipit leo. In non dapibus nulla, sed dignissim odio. Maecenas finibus id justo a imperdiet. Fusce mauris dolor, aliquam sit amet lectus eu, elementum fermentum velit. Curabitur eu lorem justo. Duis id orci lacinia, fermentum elit efficitur, varius massa. In id augue ut purus congue pellentesque et eu lorem. Proin facilisis lacinia erat.</p>
                        <p>Sed pretium ac massa ut posuere. Pellentesque arcu diam, laoreet quis est at, fringilla malesuada nulla. Duis et fringilla velit. Proin posuere nibh ut dignissim varius. Mauris id ullamcorper enim. Aliquam sed commodo sem. Vestibulum at eleifend mauris, tempor mollis elit. Duis laoreet sollicitudin condimentum. Duis sed lacinia orci, convallis porta tellus. Etiam nisl felis, cursus sit amet congue sed, cursus et odio. Curabitur pretium justo et dui venenatis imperdiet.</p>
                    </UncontrolledCollapse>
                </CardBody>  
            </Card>
            <br/><hr/><br/>
            <Card>
                <CardHeader>Pilate</CardHeader>
                <CardBody>
                    <CardImg src="https://dummyimage.com/hd1080/8dcf1b/fff.jpg&text=Photo+section+Pilate"></CardImg>
                    <br/><br/>
                    <Button color="primary" id="toggler_pilate" >
                        En savoir plus <i class="fas fa-info-circle"/>
                    </Button>
                    <UncontrolledCollapse toggler="#toggler_pilate">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur semper sit amet risus a pretium. Vestibulum vitae viverra ligula. Fusce id nulla sagittis, feugiat sem id, suscipit leo. In non dapibus nulla, sed dignissim odio. Maecenas finibus id justo a imperdiet. Fusce mauris dolor, aliquam sit amet lectus eu, elementum fermentum velit. Curabitur eu lorem justo. Duis id orci lacinia, fermentum elit efficitur, varius massa. In id augue ut purus congue pellentesque et eu lorem. Proin facilisis lacinia erat.</p>
                        <p>Sed pretium ac massa ut posuere. Pellentesque arcu diam, laoreet quis est at, fringilla malesuada nulla. Duis et fringilla velit. Proin posuere nibh ut dignissim varius. Mauris id ullamcorper enim. Aliquam sed commodo sem. Vestibulum at eleifend mauris, tempor mollis elit. Duis laoreet sollicitudin condimentum. Duis sed lacinia orci, convallis porta tellus. Etiam nisl felis, cursus sit amet congue sed, cursus et odio. Curabitur pretium justo et dui venenatis imperdiet.</p>
                    </UncontrolledCollapse>
                </CardBody>  
            </Card>
        </Container>
    );
};

export default Sections;