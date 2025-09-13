HEAD
# 🎯 Career Compass: Chatbot-Assisted Personality-Based Career Guidance System

![Python](https://img.shields.io/badge/Python-3.9+-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-Research--Project-orange)

> An AI-powered system that integrates personality assessments, NLP, and labor market analytics to deliver personalized, dynamic career recommendations

---

## 📌 Overview

**Career Compass** is a chatbot-assisted, AI-driven recommendation platform that aligns users’ psychological profiles with real-time career options. It integrates the **MBTI** and **Big Five** personality models with NLP and machine learning to deliver tailored career guidance to students, job seekers, and professionals.

---

## 🚀 Features

- 🧠 Personality-based career profiling (MBTI + Big Five)
- 🤖 AI-powered recommendation engine (Content + Collaborative Filtering)
- 🔍 NLP-based user input analysis using **SpaCy** and **TextBlob**
- 🗃️ Hybrid data storage using **PostgreSQL** and **MongoDB**
- 🌐 Interactive web interface built with **React.js** and **Flask**
- 📈 Visual analytics using **Chart.js** and **D3.js**
- 📡 Real-time job market integration for updated insights

---

## 🧑‍💻 Technologies Used

| Component       | Stack/Toolset                           |
|----------------|------------------------------------------|
| Frontend       | React.js, Chart.js, D3.js                |
| Backend        | Flask (Python), RESTful APIs             |
| NLP            | SpaCy, TextBlob                          |
| Databases      | PostgreSQL (structured), MongoDB (unstructured) |
| ML Models      | k-NN, SVM, Naïve Bayes (optional)        |
| Deployment     | Docker, AWS (planned)                    |

---

## 🛠️ System Architecture

```mermaid
flowchart TD
    A[User Input: Personality Test] --> B[NLP Analysis - SpaCy & TextBlob]
    B --> C[Personality Profiling - MBTI and Big Five]
    C --> D[Database Storage]
    D --> E[PostgreSQL - Structured Data]
    D --> F[MongoDB - Unstructured Data]
    C --> G[Recommendation Engine]
    G --> H[Content-Based and Collaborative Filtering]
    H --> I[Frontend - React.js UI]
    I --> J[Career Suggestions and Analytics]


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
 e0af683 (initial commit)
