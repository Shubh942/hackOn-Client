import SignInForm from "../../components/Forms/signIn_signUp_Forms/SignInForm";
import { Footer } from "../../components";

const Login = () => {
  return (
    <>
      <div className="headerContainer">
        <SignInForm />
        <div className="headerGradient" id="signInGradient"></div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
