import React from 'react';
import Axios from 'axios';
import { Container, CardDeck, Button, Row, Col } from 'react-bootstrap';
import { CardItems } from "../../components";

const MyPosts = () => {
  const [dataPosts, setDataPosts] = React.useState([]);
  React.useEffect(() => {
    Axios.get('https://blog-api-deploy.herokuapp.com/v1/article/my-posts', {
      headers: {
        'Authorization': localStorage.getItem('access_token'),
      }
    })
      .then(result => {
        setDataPosts(result.data.data);
      })
      .catch(error => alert('Invalid token, please sign in again'))
  }, [])
  return (
    <Container className="mt-5">
      <Row>
        <Col className="d-flex justify-content">
          <h1 className="ml-xs-5">My Posts</h1>
        </Col>
        <Col className="d-flex justify-content-end">
          <a href="/my-post/create-post">
            <Button variant="success" size="lg"><i className="bi-plus-circle mr-2"></i>Create</Button>
          </a>
        </Col>
      </Row>
      <CardDeck className="row-cols-sm-1 row-cols-md-2 mt-4">
        {dataPosts.map(posts => {
          const body = posts.body;
          return <CardItems key={posts.id.toString()} id={posts.id} title={posts.title} category={posts.Category.name} author={posts.User.name} image={posts.imageUrl} date={posts.createdAt} body={body.substring(0, 150)} btnClassRead="d-none" btnClassEdit="mr-2" />
        })}
      </CardDeck>
    </Container >
  )
}

export default MyPosts;