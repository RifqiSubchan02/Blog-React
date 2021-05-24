import Axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import './profile.scss';

const Profile = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    Axios.get(`https://blog-api-deploy.herokuapp.com/v1/user/get-id`, {
      headers: {
        'Authorization': localStorage.getItem('access_token')
      }
    })
      .then(result => {
        setUser(result.data.data);
      })
      .catch(error => console.log(error));
  })
  return (
    <Container className="mt-5">
      <Col className="col-sm-8 col-lg-8 mx-auto mt-5">
        <Row>
          <h1>Profile</h1>
        </Row>
        <Row>
          <Image src={user.imageUrl} className="picture mt-3 mx-auto" alt="..." roundedCircle></Image>
        </Row>
        <Col className="">
          <Row>
            <p className="label">User ID</p>
          </Row>
          <Row className="mx-auto">
            <h3>{user.id}</h3>
          </Row>
          <Row>
            <p className="label">Name</p>
          </Row>
          <Row className="mx-auto">
            <h3>{user.name}</h3>
          </Row>
          <Row>
            <p className="label">Email</p>
          </Row>
          <Row className="mx-auto">
            <h3>{user.email}</h3>
          </Row>
          <Row>
            <p className="label">Created At</p>
          </Row>
          <Row className="mx-auto">
            <h3>{user.createdAt}</h3>
          </Row>
        </Col>
      </Col>
    </Container >
  )
}

export default Profile;