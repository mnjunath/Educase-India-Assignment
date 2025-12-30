import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isFormValid = email.trim() !== "" && password.trim() !== "";

  const handleLogin = () => {
    if (!isFormValid) return;

    navigate("/profile", {
      state: {
        email,
      },
    });
  };

  return (
    <div className="root">
      <div className="app-root">
        <div className="mobile-frame" style={{ overflow: "auto" }}>
          <div className="page">
            <h2 className="main-heading">Signin to your PopX account</h2>
            <p className="secondary-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <div className="inputdev">
              <div className="inp-wrap">
                <label className="inp-label">Email Address</label>
                <input
                  className="inp-field"
                  placeholder="Enter Email Address"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="inp-wrap">
                <label className="inp-label">Password</label>
                <input
                  className="inp-field"
                  placeholder="Enter Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <button
              className={`btn ${isFormValid ? "active" : "disabled"}`}
              onClick={handleLogin}
              disabled={!isFormValid}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
