# 🎯 Career Compass: Chatbot-Assisted Personality-Based Career Guidance System

![Python](https://img.shields.io/badge/Python-3.9+-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-Research--Project-orange)

> An AI-powered system that integrates personality assessments, NLP, and labor market analytics to deliver personalized, dynamic career recommendations.

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

