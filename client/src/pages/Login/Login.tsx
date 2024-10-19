import { useState } from "react";
import { Base as Layout } from "@/layouts"; // Layout wrapper
import "./Login.style.scss"; // Custom styles
import { useAccountContext } from "../../context";

function Login() {
  const { login } = useAccountContext();
  const [email, setEmail] = useState(""); // State for email input
  const [password, setPassword] = useState(""); // State for password input
  const [message, setMessage] = useState(null); // Message state for validation errors

  // Function to handle login attempt
  const attemptLogin = async () => {
    if (email.trim() === "" || password.trim() === "") {
      // If email or password is empty, set an error message
      setMessage("Both email and password fields must be filled.");
    } else {
      const message = await login(email.trim(), password.trim());
      setMessage(message);
      // Clear message if the fields are filled
      // setMessage("Login successful!"); // Simulate successful login
      // setTimeout(() => {
      //   window.location.href = "/next-page"; // Simulate redirection (Replace with your page)
      // }, 1500); // Redirect after 1.5 seconds
    }
  };

  return (
    <Layout>
      <div className="Login">
        <div className="Login__panel">
          <div className="Login__panel__content">
            {/* Logo image */}
            <img src="/ashbaby.jpg" alt="Ashbaby Logo" className="Login__logo" />

            {/* Welcome message */}
            <div className="Login__panel__content__message">
              <p>Welcome to the Carleton SSO Federated Portal.</p>
              <p>
                Enter your{" "}
                <a href="https://myone.carleton.ca" target="_blank" rel="noopener noreferrer">
                  MyCarletonOne
                </a>{" "}
                username and password.
              </p>
            </div>

            {/* Show error or success message */}
            {message && <p className="error-message">{message}</p>}

            {/* Input fields */}
            <div className="Login__panel__content__input">
              <input
                type="text"
                placeholder="MyCarletonOne username"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Bind email input to state
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Bind password input to state
              />
            </div>

            {/* Keep me signed in checkbox */}
            <div className="Login__panel__content__checkbox">
              <input type="checkbox" />
              <label>Keep me signed in</label>
            </div>

            {/* Sign-in button */}
            <button className="Login__panel__button" onClick={attemptLogin}>
              Sign In
            </button>
          </div>
        </div>

        {/* Background image */}
        <div className="Login__background"></div>
      </div>
    </Layout>
  );
}

export default Login;