import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./signup.css";

export default function Signup() {
  const navigate = useNavigate();

  // state for required fields
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // form validation
  const isFormValid =
    fullName.trim() &&
    phone.trim() &&
    email.trim() &&
    password.trim();

  return (
    <div className="root">
      <div className="app-root">
        <div className="mobile-frame" style={{ overflow: "auto" }}>
          <div className="page register">
            <h2 className="main-heading">Create your PopX account</h2>

            <div className="form-content">
              <div className="inp-wrap">
                <label className="inp-label">
                  Full Name <span className="req">*</span>
                </label>
                <input
                  className="inp-field"
                  placeholder="Full name"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>

              <div className="inp-wrap">
                <label className="inp-label">
                  Phone Number <span className="req">*</span>
                </label>
                <input
                  className="inp-field"
                  placeholder="Phone number"
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="inp-wrap">
                <label className="inp-label">
                  Email Address <span className="req">*</span>
                </label>
                <input
                  className="inp-field"
                  placeholder="Email address"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="inp-wrap">
                <label className="inp-label">
                  Password <span className="req">*</span>
                </label>
                <input
                  className="inp-field"
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="inp-wrap">
                <label className="inp-label">
                  Company Name <span className="req">*</span>
                </label>
                <input
                  className="inp-field"
                  placeholder="Company name"
                  type="text"
                />
              </div>

              <div className="radio-group" style={{ marginTop: "20px" }}>
                <div className="radio-heading">
                  Are you an Agency? <span className="req">*</span>
                </div>
                <div className="radio-options">
                  <label className="radio-option">
                    <input type="radio" name="agency" />
                    <span className="radio-text">Yes</span>
                  </label>

                  <label
                    className="radio-option"
                    style={{ marginLeft: "18px" }}
                  >
                    <input type="radio" name="agency" />
                    <span className="radio-text">No</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="fixed-btn">
              <button
                className={`btn ${isFormValid ? "active" : "disabled"}`}
                disabled={!isFormValid}
                onClick={() => navigate("/Profile")}
              >
                Create Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
