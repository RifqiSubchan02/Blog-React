import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { withRouter } from "react-router";
import Axios from 'axios';
import './detailpost.scss';

const DetailPost = (props) => {
  const [post, setPost] = useState({});
  useEffect(() => {
    const id = props.match.params.id;
    Axios.get(`https://blog-api-deploy.herokuapp.com/v1/article/get-id/${id}`)
      .then(post => {
        setPost(post.data.data)
      })
      .catch(error => console.log(error))
  })
  if (post.User) {
    return (
      <Container>
        <img src={post.imageUrl} alt="..." className="img-fluid img-detail-blog mb-4"></img>
        <h1>{post.title}</h1>
        <h5>{post.User.name} - {post.Category.name}</h5>
        <h6 className="mb-4">{post.updatedAt}</h6>
        <p className="text-break indent">{post.body}</p>
      </Container>
    )
  }
  return (
    <Container>
    </Container>
  )
}

export default withRouter(DetailPost);