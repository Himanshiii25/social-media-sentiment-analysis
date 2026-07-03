import os
import datetime
from flask import Flask, request, jsonify, render_template
from nltk.sentiment.vader import SentimentIntensityAnalyzer

base_dir = os.path.abspath(os.path.dirname(__file__))

app = Flask(
    __name__,
    template_folder=os.path.join(base_dir, 'templates'),
    static_folder=os.path.join(base_dir, 'static')
)

analyzer = SentimentIntensityAnalyzer()

# In-memory storage for history
mock_history = []

@app.route('/')
def home():
    return render_template('index.html')

# 1. HEALTH ENDPOINT (Task 2)
@app.route('/api/health', methods=['GET'])
def get_health():
    return jsonify({
        "status": "healthy",
        "timestamp": str(datetime.datetime.now()),
        "environment": "development"
    }), 200

# 2. CHAT / SENTIMENT ANALYSIS ENDPOINT (Task 2)
@app.route('/api/chat', methods=['POST'])
def analyze_sentiment():
    data = request.get_json()
    
    if not data or 'text' not in data:
        return jsonify({"error": "Missing 'text' field in request body"}), 400
        
    user_text = data['text']
    
    # VADER Analysis
    scores = analyzer.polarity_scores(user_text)
    compound_score = scores['compound']
    
    if compound_score >= 0.05:
        sentiment = "Positive"
    elif compound_score <= -0.05:
        sentiment = "Negative"
    else:
        sentiment = "Neutral"
        
    new_entry = {
        "id": len(mock_history) + 1,
        "timestamp": str(datetime.datetime.now()),
        "text": user_text,
        "sentiment": sentiment
    }
    mock_history.append(new_entry)
    
    return jsonify({
        "text": user_text,
        "sentiment": sentiment
    })

# 3. HISTORY ENDPOINT (Task 2)
@app.route('/api/history', methods=['GET'])
def get_history():
    """Returns the list of all analyzed texts in the current session."""
    return jsonify({
        "status": "success",
        "count": len(mock_history),
        "history": mock_history
    }), 200

if __name__ == '__main__':
    app.run(debug=True, port=5000)