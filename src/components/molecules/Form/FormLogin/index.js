import React from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import Axios from 'axios';

const FormLogin = (props) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const history = useHistory();

  const onSubmit = () => {
    const data = new FormData();
    data.append('email', email);
    data.append('password', password);

    Axios.post('https://blog-api-deploy.herokuapp.com/v1/user/login', data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
      .then(result => {
        localStorage.setItem('access_token', result.data.access_token);
        history.push('/');
      })
      .catch(error => {
        alert('Invalid username or password');
      });
  }
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label className={props.classLabel}>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label className={props.classLabel}>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" className="text-white" label="Check me out" />
      </Form.Group>
      <Button variant="primary" size={props.sizeButton} onClick={onSubmit} block>Login</Button>
    </Form>
  )
}

export default FormLogin;