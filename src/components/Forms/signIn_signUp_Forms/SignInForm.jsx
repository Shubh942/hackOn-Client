import { useContext, useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { FirebaseContext } from "../../../context/firebase";
import { Link, useNavigate } from "react-router-dom";
import "./index.scss";

const SignInForm = () => {
  const navigate = useNavigate();
  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = password === "" || emailAddress === "";

  const handleSignIn = (e) => {
    e.preventDefault();

    return firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        //push to the browse page
        navigate("./browse");
      })
      .catch((error) => {
        setEmailAddress("");
        setPassword("");
        setError(error.message);
      });
  };

  return (
    <div className="signInUpContainer pb-2">
      <h1 className="mt-5">Sign In</h1>
      <Form noValidate onSubmit={handleSignIn} method="POST">
        <FloatingLabel
          controlId="floatingEmailInput"
          label="Email address"
          aria-label="Email address"
        >
          <Form.Control
            required
            type="email"
            placeholder="name@example.com"
            value={emailAddress}
            onChange={({ target }) => setEmailAddress(target.value)}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingPasswordInput"
          label="Password"
          aria-label="Password"
        >
          <Form.Control
            required
            type="password"
            placeholder="password"
            value={password}
            autoComplete="off"
            onChange={({ target }) => setPassword(target.value)}
          />
        </FloatingLabel>
        <Button disabled={isInvalid} type="submit">
          Sign In
        </Button>
      </Form>

      {error && (
        <div className="error" data-testid="error">
          {error}
        </div>
      )}
      <div className="bottom-container">
        <p className="signInText">
          Already a user? <Link to="/signup">Sign up now.</Link>
        </p>
      </div>
    </div>
  );
};

export default SignInForm;
