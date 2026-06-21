this folder contains datasets used for sentiment analysis
# Data Management - Social Media Sentiment Analysis

This directory handles the collection, documentation, and storage setup for the datasets used to train and evaluate the sentiment analysis model.

---

## 1. Data File Inventory & Formats
To satisfy project requirements, the following data profiles are managed within this workspace:
* **`mock_social_media_data.csv` / `.xlsx`** (Database Loading Profile): Contains structured columns like user text, timestamps, and engagement metrics ready for database ingestion.
* **`sentiment_config.json`** (JSON Data Profile): Holds operational key-value configurations, threshold mappings, and metadata flags for data processing pipelines.
* **`knowledge_base_rag.pdf`** (PDF Data Profile): Serves as the domain-specific background context file for Retrieval-Augmented Generation (RAG) tasks to augment model insights.

---

## 2. Data Attributes & Schema Description
Our primary dataset tracks social media text utilizing the following specific field schema:

| Column Name | Data Type | Description |
| :--- | :--- | :--- |
| `post_id` | Integer / String | Unique alphanumeric tracker assigned to each individual post. |
| `timestamp` | DateTime | Universal standardized record of when the content was published. |
| `text_content` | String (Text) | The raw, unparsed text string extracted directly from the social platform feed. |
| `engagement_score`| Integer | Cumulative metric scaling user interactions (likes, shares, comments). |

---

## 3. Data Usage & Processing Pipeline
* **Purpose:** These assets are actively read by the core execution files within the `src/` directory to clean text arrays, parse layout tokens, and train the model framework.
* **Storage Framework:** Local storage optimization inside this folder ensures zero-latency access for continuous integration testing and evaluation runs.