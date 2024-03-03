import "./LoginForm.css";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className="wrapper">
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" required />
          <FaUserAlt className="icon" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required />
          <FaLock className="icon" />
        </div>

        <div className="remember-forgot">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <a href="#">Forgot password?</a>
        </div>
        <button type="submit">
          <Link to="home">Login</Link>
        </button>
      </form>

      <div className="register-link">
        <p>
          Dont have an account?<a href="#">Register</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
