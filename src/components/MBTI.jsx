import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // import the navigation hook
import "../styles/form.css";
import getMBTIResult from "../utils/openApi";
import mammoth from "mammoth";
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist/legacy/build/pdf';

// Set up the PDF.js worker using a local copy.
// Copy 'pdf.worker.min.js' from 'node_modules/pdfjs-dist/legacy/build/' into your public folder.
GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';

const questions = [
  "You find it easy to introduce yourself to other people.",
  "You often get so lost in thoughts that you ignore your surroundings.",
  "You try to respond to emails as soon as possible.",
  "You find it easy to stay relaxed even when under pressure.",
  "You enjoy being at the center of attention.",
  "You prefer to completely finish one project before starting another.",
  "You are more of a natural improviser than a careful planner.",
  "Being adaptable is more important than being organized.",
  "You often rely on your intuition more than facts.",
  "You usually feel more drawn to realistic stories than fantasy."
];

const options = [
  "Strongly Agree",
  "Agree",
  "Neutral",
  "Disagree",
  "Strongly Disagree"
];

function MBTI() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [resumeContent, setResumeContent] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // initialize the navigation hook

  // Handle resume file upload and extract text from PDF or DOCX files
  const handleResumeUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileExtension = file.name.split('.').pop().toLowerCase();
      if (fileExtension === "pdf") {
        const reader = new FileReader();
        reader.onload = async (e) => {
          try {
            const typedarray = new Uint8Array(e.target.result);
            const pdf = await getDocument(typedarray).promise;
            let text = "";
            for (let i = 1; i <= pdf.numPages; i++) {
              const page = await pdf.getPage(i);
              const content = await page.getTextContent();
              const pageText = content.items.map(item => item.str).join(" ");
              text += pageText + "\n";
            }
            setResumeContent(text);
          } catch (error) {
            console.error("Error processing PDF file:", error);
          }
        };
        reader.onerror = (e) => {
          console.error("Error reading PDF file", e);
        };
        reader.readAsArrayBuffer(file);
      } else if (fileExtension === "docx") {
        const reader = new FileReader();
        reader.onload = async (e) => {
          try {
            const arrayBuffer = e.target.result;
            const result = await mammoth.extractRawText({ arrayBuffer });
            setResumeContent(result.value);
          } catch (error) {
            console.error("Error processing DOCX file:", error);
          }
        };
        reader.onerror = (e) => {
          console.error("Error reading DOCX file", e);
        };
        reader.readAsArrayBuffer(file);
      } else {
        console.error("Unsupported file type. Please upload a .pdf or .docx file.");
      }
    }
  };

  const handleAnswer = (answer) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = answer;
    setAnswers(updatedAnswers);
  };

  const handleSubmit = async () => {
    setLoading(true);
    const res = await getMBTIResult({ answers, resume: resumeContent });
    setLoading(false);
    // Redirect to the response page, passing the result in the state
    navigate("/responseonfinish", { state: { result: res } });
  };

  const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;

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

        <section className="intro-section">
          <p>
            Take our quick quiz to determine your MBTI personality type and receive personalized career recommendations.
          </p>
        </section>
        <section className="how-it-works">
          <h2>How It Works</h2>
          <ul>
            <li>Step 1: Upload your resume (.pdf or .docx) to provide additional context.</li>
            <li>Step 2: Answer 10 quick personality questions.</li>
            <li>Step 3: Receive a detailed MBTI analysis and career advice.</li>
          </ul>
        </section>

        {/* Resume Upload */}
        <div className="resume-upload">
          <input
            type="file"
            id="resumeUpload"
            accept=".pdf,.docx"
            onChange={handleResumeUpload}
            style={{ display: "none" }}
          />
          <label htmlFor="resumeUpload" className="custom-file-upload">
            Upload Resume (.pdf or .docx)
          </label>
        </div>

        {/* Quiz Section */}
        <div className="quiz-container">
          <div className="quiz-header">
            <h2>MBTI Personality Quiz</h2>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${progressPercentage}%` }}></div>
            </div>
          </div>

          <div className="question-card">
            <div className="question">{questions[currentQuestion]}</div>
            <div className="answers">
              {options.map((option, index) => (
                <button
                  key={index}
                  className={`answer-btn ${answers[currentQuestion] === option ? "selected" : ""}`}
                  onClick={() => handleAnswer(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <button
            className="next-btn"
            onClick={() => {
              if (currentQuestion < questions.length - 1) {
                setCurrentQuestion((prev) => prev + 1);
              } else {
                handleSubmit();
              }
            }}
          >
            {currentQuestion < questions.length - 1 ? "Next" : "Finish"}
          </button>
        </div>

        {loading && <p className="loading-text">Analyzing your personality...</p>}
      </div>
    </div>
  );
}

export default MBTI;
