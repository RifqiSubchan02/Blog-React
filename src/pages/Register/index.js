import React from 'react';
import { Container } from 'react-bootstrap';
import { FormRegister } from '../../components';
import './register.scss';

const Register = () => {
  return (
    <div className="bg-dark container-register">
      <Container fluid>
        <div className="form-register">
          <h1 className="text-white mb-4">Register</h1>
          <FormRegister classLabel="text-white" />
        </div>
      </Container>
    </div>
  )
}

export default Register;