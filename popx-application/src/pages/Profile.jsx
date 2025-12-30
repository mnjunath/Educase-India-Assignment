import { useLocation, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import "./profile.css";

export default function Profile() {
  const location = useLocation();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const email = location.state?.email;

  const [profileImage, setProfileImage] = useState(
    "https://randomuser.me/api/portraits/men/32.jpg"
  );

  if (!email) {
    navigate("/");
    return null;
  }

  const handleCameraClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setProfileImage(imageUrl);
  };

  return (
    <div className="root">
      <div className="app-root">
        <div className="mobile-frame" style={{ overflow: "hidden" }}>
          <div className="page account" style={{ padding: "0px" }}>
            <div className="app-header">
              <div className="app-header-inner">Account Settings</div>
            </div>

            <div style={{ padding: "20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div className="profile-root" style={{ width: "76px", height: "76px" }}>
                  <img
                    className="profile-img"
                    src={profileImage}
                    alt="profile"
                  />

                  <button
                    className="camera-btn"
                    onClick={handleCameraClick}
                    type="button"
                  >
                    📷
                  </button>

                  <input
                    ref={fileInputRef}
                    accept="image/*"
                    type="file"
                    style={{ display: "none" }}
                    onChange={handleImageChange}
                  />
                </div>

                <div>
                  <div style={{ fontWeight: "500", fontSize: "15px" }}>
                    fqefqq
                  </div>
                  <div style={{ color: "rgb(108, 37, 255)", fontSize: "14px" }}>
                    {email}
                  </div>
                </div>
              </div>

              <p className="desc-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
                id nam, error pariatur perferendis, animi, quae ipsam porro rem
                nihil placeat. Ullam similique sint explicabo perferendis illo
                consectetur iusto voluptates.
              </p>

              <hr
                style={{
                  borderTop: "1px dashed rgb(224, 224, 224)",
                  borderRight: "none",
                  borderBottom: "none",
                  borderLeft: "none",
                  marginTop: "30px",
                }}
              />
            </div>
            <hr className="bottom-hr" />
          </div>
        </div>
      </div>
    </div>
  );
}
