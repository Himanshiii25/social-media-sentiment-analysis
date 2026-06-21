print("hello social media sentiment")
import pandas as pd
import os

def clean_project_data():
    # Define paths securely relative to the workspace environment
    raw_data_path = os.path.join("data", "mock_social_media_data.csv")
    cleaned_output_path = os.path.join("data", "cleaned_social_media_data.csv")
    
    print("--- Starting Data Cleaning Phase ---")
    
    # 1. Load the raw dataset file
    if not os.path.exists(raw_data_path):
        print(f"Error: Could not find the raw file at {raw_data_path}. Verify files.")
        return
        
    df = pd.read_csv(raw_data_path)
    print(f"Original Dataset Shape: {df.shape}")
    
    # 2. Handle Missing Values (Task requirement)
    # Remove any row where the essential 'text_content' text data is blank
    df = df.dropna(subset=['text_content'])
    print(f"Shape after removing missing text: {df.shape}")
    
    # 3. Handle Duplicate Records (Task requirement)
    # Deduplicate exact repeating rows often caused by double-scraping or retweets
    df = df.drop_duplicates()
    print(f"Shape after removing duplicate profiles: {df.shape}")
    
    # 4. Standardize Text Content (Task requirement)
    # Shift text strings uniformly to lowercase for predictable model mapping
    df['text_content'] = df['text_content'].str.lower().str.strip()
    
    # 5. Export cleaned dataset file back to data tracking hub
    df.to_csv(cleaned_output_path, index=False)
    print(f"Success! Cleaned dataset exported smoothly to: {cleaned_output_path}")
    print("--- Data Management Phase Complete ---")

if __name__ == "__main__":
    clean_project_data()