import React from 'react';
import { Card, CardBody, Container } from 'reactstrap';

const Inscription = (props) => {  
  return (
    <Container style={{maxWidth: '800px'}}>
      <Card>
        <CardBody>
          <iframe className="iframe" title='Insription' src='https://docs.google.com/forms/d/e/1FAIpQLSfLtO0zRDkaNZ6fTH427HbSyfvaAXigzKwcVnbQLXz1cefx4w/viewform?embedded=true' frameBorder={'0'} width='100%' height='1000px'/>
        </CardBody>
      </Card>
    </Container>
    );
}
export default Inscription;
