import React from 'react';
import { 
    Card, 
    CardImg, 
    Container,
} from 'reactstrap';
import planning from '../Assets/Medias/planning.png';

const Agenda = (props) => {  
  return (
    <Container style={{maxWidth: '800px'}}>
      <Card>
          <CardImg src={planning} alt='' style={{margin: 10}}/>
      </Card>
    </Container>);
}
export default Agenda;