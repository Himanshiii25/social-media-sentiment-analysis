# social-media-sentiment-analysis
a machine learning project for analysing sentiments from social media posts
# Social Media Sentiment Analysis Pipeline

An automated data preprocessing and sentiment analysis platform designed to clean unstructured social media tracking records for downstream machine learning and natural language processing models.

## Workspace Architecture
Following the project layout guidelines, the repository structure is organized as follows:
* `data/` — Tracks both the initial raw datasets and the finalized target records.
* `src/` — Contains modular Python operational code scripts (`main.py`).
* `reports/` — Dedicated repository for historical tracking summaries and PDF deliverables.

---

##  Week 2 Progress: Data Preprocessing & Cleaning Phase

### 1. Objective
To systematically isolate and eliminate structural noise, data discrepancies, and incomplete files to ensure clean inputs for future model vectorization.

### 2. Operational Interventions Completed
* **Missing Value Resolution:** Automatically isolated and purged empty records lacking core conversational tracking context (`text_content`).
* **Deduplication Routing:** Identified and removed repeating multi-post scrapes and exact retweets to protect data uniqueness.
* **Text Standardization:** Normalized text data uniformly to lowercase and trimmed excess white spacing for predictable vocabulary indexing.

### 3. Pipeline Metrics (Before vs. After Summary)

| Preprocessing Metric | Raw Source State | Cleaned Target Output | Pipeline Action Taken |
| :--- | :--- | :--- | :--- |
| **Total Rows** | 5 rows | 3 rows | -2 invalid records dropped |
| **Blank Text Fields** | 1 missing record | 0 null elements | Purged via automated logic |
| **Duplicate Entries** | 1 duplicate record | 0 duplicate entries | Deduplicated systematically |
| **Text Casing** | Mixed Casing Structure | Strictly Lowercase | Mapped uniformly |

---

##  How to Run the Pipeline
To execute the automated data cleaning layer, run the following command within your active terminal environment:
```bash
python src/main.py

##WEEK 3 PROGRESS
# Social Media Sentiment Analyzer

A full-stack web application that performs real-time sentiment analysis on social media text using Natural Language Processing (NLP).

## 🏗️ System Architecture

The application follows a classic **Client-Server Architecture** split into distinct operational layers:

1. **Presentation Layer (Client):** Built with HTML5, CSS3, and JavaScript. It uses **Chart.js** to render a dynamic, real-time doughnut chart tracking sentiment distribution.
2. **Application Layer (Server):** Powered by **Python Flask**, managing routing, request handling, and JSON API exposures.
3. **AI/ML Engine Layer:** Utilizes the **NLTK VADER** (Valence Aware Dictionary and sEntiment Reasoner) model to evaluate text intensity and classify sentiment.
4. **Data Layer:** Currently uses an volatile, in-memory list (`mock_history`) to track session logs temporarily.

---

## 🔌 API Specification

### 1. Health Check
* **Endpoint:** `/api/health`
* **Method:** `GET`
* **Description:** Verifies that the backend server layer is live and running.
* **Success Response (200 OK):**
  ```json
  {
    "environment": "development",
    "status": "healthy",
    "timestamp": "2026-06-27 16:30:00.123456"
  }
  