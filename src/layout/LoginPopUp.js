import { Fragment } from "react";
import { connect } from "react-redux";
import { loginToggle } from "../redux/actions/siteSettings";
import LoginForm from "./LoginForm";

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

        <LoginForm/>

      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  login: state.site.login,
});

export default connect(mapStateToProps, { loginToggle })(LoginPopUp);