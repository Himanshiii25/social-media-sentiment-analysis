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