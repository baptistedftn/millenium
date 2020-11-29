import React from 'react';
import { 
    Card, 
    Container, 
    CardHeader, 
    CardBody,
    CardImg,
} from 'reactstrap';
import { snapshotToArray } from '../Services/Scripts';
import {db} from '../Services/Firebase'

let Posts = [];
db.ref('/sections').on('value', function(snapshot) { Posts = snapshotToArray(snapshot) });


const Sections = (props) => {
    return (
        <Container style={{maxWidth: '800px'}}>
            {Posts.map(Post => (
                <>
                    <Card key={Post.name}>
                        <CardHeader>{Post.name}</CardHeader>
                        <CardImg
                            src={Post.picture}
                            title='Image'
                            component='image'
                        />
                        <CardBody>
                            <p>{Post.about}</p>
                        </CardBody>
                    </Card>
                    <br/><hr/><br/>
                </>
            ))}
        </Container>
    );
};

export default Sections;