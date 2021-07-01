import { Link } from "react-router-dom";
import { FormButton, GoogleFormButton } from "../FormButtons";

export const RegisterScreen = () => {
  return (
    <>
      <h3 className="auth__form-title">JournalApp Sign Up</h3>
      <form className="auth__form-form">
        <input
          type="text"
          placeholder="Full name"
          name="name"
          className="input"
        />
        <input
          type="text"
          placeholder="Your e-mail"
          name="email"
          className="input"
        />
        <input
          type="password"
          placeholder="Your password"
          name="password"
          className="input"
        />
        <input
          type="password"
          placeholder="Confirm your password"
          name="password-confirm"
          className="input"
        />
        <div className="buttons">
          <FormButton className="form-button auth__form-button">
            Sign up
          </FormButton>
          <GoogleFormButton>Sign up with google</GoogleFormButton>
        </div>
        <span className="auth__form-link">
          Aleady registered <Link to="/auth/login">Login here</Link>
        </span>
      </form>
    </>
  );
};
