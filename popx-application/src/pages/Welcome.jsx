import { useNavigate } from "react-router-dom";
import "./welcome.css";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="root">
        <div className="app-root">
            <div className="mobile-frame" style={{ overflow: "hidden" }}>
                <div className="page welcome">
                    <div className="content-bottom">
                        <h1 className="main-heading">Welcome to PopX</h1>
                        <p className="secondary-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere quidem,.</p>
                        <div style={{ height: "29px" }}></div>
                        <button className="btn primary" onClick={() => navigate("/signup")}>Create Account</button>
                        <div style={{ height: "10px" }}></div>
                        <button className="btn ghost" onClick={() => navigate("/login")}>Already Registered? Login</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
