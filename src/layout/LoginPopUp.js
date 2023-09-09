import { Fragment } from "react";
import { connect } from "react-redux";
import { loginToggle } from "../redux/actions/siteSettings";

const LoginPopUp = ({ loginToggle, login }) => {
  return (
    <Fragment>
      <div
        className={`metaportal_fn_login_closer ${login ? "active" : ""}`}
        onClick={() => loginToggle(false)}
      />
      <div className={`metaportal_fn_loginbox ${login ? "active" : ""}`}>
        <a href="#" className="fn__closer" onClick={() => loginToggle(false)}>
          <span />
        </a>
        <div className="loginbox">
          <div className="title_holder">
            <h3>Login</h3>
            <p>
              Please enter your credentials to login.
            </p>
          </div>
          <div className="form_holder">
            <form>
              <input name="username" type="text" placeholder="Username" />
              <input name="password" type="password" placeholder="Password" />
              <input type="submit" value="Login" />
            </form>
            <a href="#">Forgot password?</a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  login: state.site.login,
});

export default connect(mapStateToProps, { loginToggle })(LoginPopUp);