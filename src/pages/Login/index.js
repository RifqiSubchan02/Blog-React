import { FormLogin } from '../../components'
import { BgLogin } from '../../assets';
import './login.scss';

const Login = () => {
  return (
    <div>
      <img className="img-fluid cover" src={BgLogin} alt="..." />
      <div className="form">
        <h1 className="text-white">Login</h1>
        <FormLogin />
        <p className="text-white text-center mt-3">If you don't have account,<br /><a href="##" class="badge badge-light">Click here</a></p>
      </div>
    </div>
  )
}

export default Login;