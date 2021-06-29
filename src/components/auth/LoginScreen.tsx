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
        <FormButton className="form-button auth__form-button">Login</FormButton>
        <GoogleFormButton>Sign in with google</GoogleFormButton>
      </form>
    </>
  );
};
