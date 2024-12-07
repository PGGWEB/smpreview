import React, { useState } from "react";

function App() {
  const [profileName, setProfileName] = useState("@username");
  const [postText, setPostText] = useState(
    "This is a sample post text. Add your caption here!"
  );
  const [imageFile, setImageFile] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const url = URL.createObjectURL(file);
      setImageSrc(url);
    } else {
      setImageFile(null);
      setImageSrc(null);
    }
  };

  return (
    <div className="app-container">
      <header>
        <h1>Social Media Post Preview</h1>
        <p>
          Încarcă imaginea, setează numele și textul, apoi vezi
          previzualizările:
        </p>
      </header>

      <div className="input-section">
        <div className="input-group">
          <label>Nume Profil:</label>
          <input
            type="text"
            value={profileName}
            onChange={(e) => setProfileName(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Textul Postării:</label>
          <textarea
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Încarcă Imagine:</label>
          <input type="file" accept="image/*" onChange={handleFileChange} />
        </div>
      </div>

      <div className="previews-container">
        <h2>Instagram Preview</h2>
        <div className="preview instagram-container">
          <div className="insta-header">
            <span className="insta-logo">Instagram</span>
            <div className="insta-icons">◎ ◎</div>
          </div>
          <div className="insta-profile-bar">
            <div className="insta-avatar">U</div>
            <div className="insta-user-info">
              <div className="insta-username">{profileName}</div>
              <div className="insta-location">Location</div>
            </div>
            <div className="insta-more">⋮</div>
          </div>
          <div className="insta-image-wrapper">
            {imageSrc && (
              <img src={imageSrc} alt="insta-post" className="insta-image" />
            )}
          </div>
          <div className="insta-actions-bar">
            <span>♥</span> <span>💬</span> <span>✈</span>
            <span className="insta-save" style={{ marginLeft: "auto" }}>
              ⌁
            </span>
          </div>
          <div className="insta-likes">Liked by someone and others</div>
          <div className="insta-caption">
            <strong>{profileName}</strong> {postText}
          </div>
          <div className="insta-comments">View all 10 comments</div>
        </div>

        <h2>TikTok Preview</h2>
        <div className="preview tiktok-container">
          <div className="tt-video-wrapper">
            {imageSrc && (
              <img src={imageSrc} alt="tiktok-post" className="tt-video-img" />
            )}
            <div className="tt-right-panel">
              <div className="tt-icon">☺</div>
              <div className="tt-icon">♥ 123</div>
              <div className="tt-icon">💬 45</div>
              <div className="tt-icon">↗</div>
            </div>
            <div className="tt-bottom-panel">
              <div className="tt-user">@{profileName.replace("@", "")}</div>
              <div className="tt-text">{postText}</div>
              <div className="tt-music">♫ Original Sound</div>
            </div>
          </div>
        </div>

        <h2>Facebook Preview</h2>
        <div className="preview fb-preview">
          <div className="profile">
            <div className="avatar">F</div>
            <div className="info">
              <div className="name">{profileName}</div>
              <div className="time">Just now</div>
            </div>
          </div>
          <div className="content">
            <p>{postText}</p>
            {imageSrc && <img src={imageSrc} alt="facebook-post" />}
          </div>
          <div className="actions">
            <span>Like</span> <span>Comment</span> <span>Share</span>
          </div>
        </div>

        <h2>LinkedIn Preview</h2>
        <div className="preview linkedin-preview">
          <div className="profile">
            <div className="avatar">L</div>
            <div className="info">
              <div className="name">{profileName}</div>
              <div className="title">Your Title / Position</div>
            </div>
          </div>
          <div className="content">
            <p>{postText}</p>
            {imageSrc && <img src={imageSrc} alt="linkedin-post" />}
          </div>
          <div className="actions">
            <span>Like</span> <span>Comment</span> <span>Share</span>
          </div>
        </div>

        <h2>Twitter Preview</h2>
        <div className="preview twitter-preview">
          <div className="profile">
            <div className="avatar">TW</div>
            <div className="info">
              <div className="name">{profileName}</div>
              <div className="handle">@{profileName.replace("@", "")}</div>
            </div>
          </div>
          <div className="content">
            <p>{postText}</p>
            {imageSrc && <img src={imageSrc} alt="twitter-post" />}
          </div>
          <div className="actions">
            <span>💬</span> <span>🔁</span> <span>♥</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
