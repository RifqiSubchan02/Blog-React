import Axios from 'axios';
import React from 'react';
import { Container, CardDeck, Row } from "react-bootstrap";
import { CardItems } from "../../components";
import './home.scss';

const Home = () => {
  const [dataPosts, setDataPosts] = React.useState([]);
  React.useEffect(() => {
    Axios.get('https://blog-api-deploy.herokuapp.com/v1/article')
      .then(result => {
        setDataPosts(result.data.data);
      })
      .catch(error => console.log(error))
  })
  return (
    <Container className="mt-5 d-flex flex-column justify-content-between">
      <Row>
        <h1 className="ml-xs-5">Blog Posts</h1>
        <CardDeck className="row-cols-sm-1 row-cols-md-2 mt-4">
          {dataPosts.map(posts => {
            let body = posts.body;
            return <CardItems key={posts.id.toString()} id={posts.id} category={posts.Category.name} title={posts.title} author={posts.User.name} image={posts.imageUrl} date={posts.createdAt} body={body.substring(0, 100)} btnClassEdit="d-none" btnClassModal="d-none" />
          })}
        </CardDeck>
      </Row>
      <Row className="d-flex justify-content-center align-middle">
        {/* <Paginations /> */}
      </Row>
    </Container>
  )
}

export default Home;