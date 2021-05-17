import { FormLogin } from '../../components'
import { BgLogin } from '../../assets';
import './login.scss';

const Login = () => {
  return (
    <div className="main-page">
      <img className="img-fluid bg-img" src={BgLogin} alt="..." />
      <div className="form">
        <h1 className="text-white">Login</h1>
        <FormLogin classLabel="text-white" />
        <p className="text-white text-center mt-3">If you don't have an account,<br />
          <a href="/register" className="badge badge-light mr-2">Click here</a>or<a href="/" className="badge badge-light ml-2">Continue without login</a></p>
      </div>
    </div>
  )
}

export default Login;