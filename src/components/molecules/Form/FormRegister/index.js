import React from 'react';
import { Form, Button } from 'react-bootstrap';
import Axios from 'axios';

const FormRegister = (props) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [image, setImage] = React.useState('');

  const onSubmit = () => {
    const data = new FormData();
    data.append('name', name);
    data.append('email', email);
    data.append('password', password);
    data.append('image', image);

    Axios.post('http://localhost:4000/v1/user', data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
      .then(result => console.log('result : ', result))
      .catch(error => console.log(error));
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
      <Button variant="danger" type="reset" size={props.sizeButton} block>Cancel</Button>
    </Form>
  )
}

export default FormRegister;