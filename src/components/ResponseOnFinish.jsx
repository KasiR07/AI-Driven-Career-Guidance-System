import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/form.css";

function ResponseOnFinish() {
  const location = useLocation();
  const navigate = useNavigate();
  const result = location.state?.result;

  return (
    <div className="page-container">
      {/* Fullscreen Background Video */}
      <video autoPlay muted loop id="background-video">
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Main Content */}
      <div className="content-container">
        <header className="page-header">
          <h1>Personality Based Career Recommendation System</h1>
          <p>Discover your true self and unlock career paths that align with your strengths.</p>
        </header>

        <div className="result-box">
          <h2>🧠 Your MBTI Result</h2>
          <p style={{ whiteSpace: "pre-wrap" }}>{result}</p>
          <button className="next-btn" onClick={() => navigate("/")}>
            Retake Quiz
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResponseOnFinish;
