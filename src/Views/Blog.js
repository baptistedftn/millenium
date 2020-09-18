import React, {useEffect} from 'react';
import { Card, Container, CardHeader, CardBody } from 'reactstrap';

const Blog = () => {
  useEffect(() => {
    const anchor = document.createElement("a");
    anchor.setAttribute("class", "twitter-timeline");
    anchor.setAttribute("data-lang", "fr");
    anchor.setAttribute("data-theme", "light");
    anchor.setAttribute("data-dnt", "true");
    anchor.setAttribute("data-tweet-limit", "5");
    anchor.setAttribute("data-chrome", "noheader nofooter noborders transparent");
    anchor.setAttribute("href", "https://twitter.com/BDftn");
    document.getElementsByClassName("twitter-embed")[0].appendChild(anchor);
    
    const script = document.createElement("script");
    script.setAttribute("src", "https://platform.twitter.com/widgets.js");
    document.getElementsByClassName("twitter-embed")[0].appendChild(script);

  }, []);

  return (
    <Container >
      <Card>
        <CardHeader>Les News du Millénium</CardHeader>
        <CardBody><div className="twitter-embed"></div></CardBody>     
      </Card>
    </Container>
  );
};

export default Blog;