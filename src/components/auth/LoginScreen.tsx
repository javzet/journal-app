import { Link } from "react-router-dom";
import { FormButton, GoogleFormButton } from "../FormButtons";

export const LoginScreen = () => {
  return (
    <>
      <h3 className="auth__form-title">JournalApp Login</h3>
      <form className="auth__form-form">
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
        <div className="buttons">
          <FormButton className="form-button auth__form-button">
            Login
          </FormButton>
          <GoogleFormButton>Login with google</GoogleFormButton>
        </div>
        <span className="auth__form-link">
          Aleady Don't have an accout?{" "}
          <Link to="/auth/register">Create one!</Link>
        </span>
      </form>
    </>
  );
};
