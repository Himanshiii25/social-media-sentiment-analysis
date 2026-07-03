document.addEventListener('DOMContentLoaded', () => {
    const analyzeBtn = document.getElementById('analyze-btn');
    const textInput = document.getElementById('text-input');
    const resultBox = document.getElementById('result');
    const historyList = document.getElementById('history-list');
    const chartWrap = document.getElementById('chart-wrap');

    // Object to track running counts for the chart
    const sentimentCounts = {
        Positive: 0,
        Negative: 0,
        Neutral: 0
    };

    let sentimentChart = null;

    // Function to build/update the chart
    function updateChart(sentiment) {
        // 1. Increment the current sentiment
        sentimentCounts[sentiment]++;

        // 2. Make chart container visible on first analysis
        chartWrap.style.display = 'flex';

        // 3. If chart doesn't exist yet, build it
        if (sentimentChart === null) {
            const ctx = document.getElementById('sentimentChart').getContext('2d');
            sentimentChart = new Chart(ctx, {
                type: 'doughnut', // 'doughnut' creates a clean, modern ring chart
                data: {
                    labels: ['Positive', 'Negative', 'Neutral'],
                    datasets: [{
                        data: [sentimentCounts.Positive, sentimentCounts.Negative, sentimentCounts.Neutral],
                        backgroundColor: [
                            'rgba(46, 204, 113, 0.75)',  // Emerald Green
                            'rgba(231, 76, 60, 0.75)',   // Alizarin Red
                            'rgba(161, 161, 166, 0.5)'   // Muted Gray
                        ],
                        borderColor: [
                            '#2ecc71',
                            '#e74c3c',
                            '#a1a1a6'
                        ],
                        borderWidth: 2,
                        hoverOffset: 4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                color: '#f5f5f7', // Matches --text-main
                                font: { family: 'sans-serif', size: 12 }
                            }
                        }
                    }
                }
            });
        } else {
            // 4. If chart already exists, simply update the raw data and refresh
            sentimentChart.data.datasets[0].data = [
                sentimentCounts.Positive,
                sentimentCounts.Negative,
                sentimentCounts.Neutral
            ];
            sentimentChart.update();
        }
    }

    analyzeBtn.addEventListener('click', async () => {
        const text = textInput.value.trim();

        if (!text) {
            alert('Please enter some text to analyze.');
            return;
        }

        analyzeBtn.disabled = true;
        analyzeBtn.textContent = 'Analyzing...';
        resultBox.style.display = 'none';

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ text: text })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            
            // Render the results in the box, history log, and modern chart!
            displayResult(data.sentiment);
            addToHistoryDisplay(text, data.sentiment);
            updateChart(data.sentiment);
            
            textInput.value = '';

        } catch (error) {
            console.error('Error:', error);
            alert('Something went wrong. Check your terminal or console for errors.');
        } finally {
            analyzeBtn.disabled = false;
            analyzeBtn.textContent = 'Analyze Sentiment';
        }
    });

    function displayResult(sentiment) {
        resultBox.textContent = `Sentiment: ${sentiment}`;
        resultBox.className = 'result-box'; 
        
        if (sentiment === 'Positive') {
            resultBox.classList.add('positive');
        } else if (sentiment === 'Negative') {
            resultBox.classList.add('negative');
        } else {
            resultBox.classList.add('neutral');
        }
        
        resultBox.style.display = 'block';
    }

    function addToHistoryDisplay(text, sentiment) {
        const listItem = document.createElement('li');
        listItem.className = 'history-item';
        
        const textSpan = document.createElement('span');
        textSpan.className = 'history-text';
        textSpan.textContent = text;
        
        const badgeSpan = document.createElement('span');
        badgeSpan.textContent = sentiment;
        badgeSpan.style.fontWeight = 'bold';
        
        if (sentiment === 'Positive') badgeSpan.style.color = '#2ecc71';
        else if (sentiment === 'Negative') badgeSpan.style.color = '#e74c3c';
        else badgeSpan.style.color = '#a1a1a6';

        listItem.appendChild(textSpan);
        listItem.appendChild(badgeSpan);
        
        historyList.insertBefore(listItem, historyList.firstChild);
    }
});