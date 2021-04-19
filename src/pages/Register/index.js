import React from 'react';
import { BgRegister } from '../../assets';
import { FormRegister } from '../../components';
import './register.scss';

const Register = () => {
  return (
    <div className="main-page">
      <img className="img-fluid ilustrate" src={BgRegister} alt="..." />
      <div className="form-register">
        <h1 className="text-dark mb-4">Register</h1>
        <FormRegister classLabel="text-dark" />
      </div>
    </div >
  )
}

export default Register;