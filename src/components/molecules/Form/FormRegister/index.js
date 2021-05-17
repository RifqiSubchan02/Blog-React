import React from 'react';
import { Form, Button } from 'react-bootstrap';
import Axios from 'axios';
import { useHistory } from 'react-router';

const FormRegister = (props) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [image, setImage] = React.useState('');

  const history = useHistory();

  const onSubmit = () => {
    const data = new FormData();
    data.append('name', name);
    data.append('email', email);
    data.append('password', password);
    data.append('image', image);

    Axios.post('https://blog-api-deploy.herokuapp.com/v1/user/register', data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
      .then(result => {
        alert('Register Success');
        setTimeout(() => history.push('/login'), 3000);
      })
      .catch(error => {
        alert('Register Failed');
        console.log(error);
      });
  }

  return (
    <Form>
      <Form.Group controlId="formBasicName">
        <Form.Label className={props.classLabel}>Name</Form.Label>
        <Form.Control type="name" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label className={props.classLabel}>Email</Form.Label>
        <Form.Control type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label className={props.classLabel}>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>

      <Form.Group>
        <Form.File id="exampleFormControlFile1" label="File Image" className={props.classLabel} onChange={(e) => setImage(e.target.files[0])} />
      </Form.Group>

      <Button variant="primary" size={props.sizeButton} className="mt-md-4 mb-md-3" onClick={onSubmit} block>Sign Up</Button>
      <Button variant="danger" type="reset" href="/login" size={props.sizeButton} block>Cancel</Button>
    </Form>
  )
}

export default FormRegister;