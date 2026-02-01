from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np

app = Flask(__name__)
CORS(app)  # This allows your React app to talk to this server

# Load the saved model and scaler
model = joblib.load('stress_model_small.pkl')
scaler = joblib.load('scaler_small.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json['features'] # Expecting a list of values from React
    
    # Convert to numpy array and scale
    features = np.array(data).reshape(1, -1)
    features_scaled = scaler.transform(features)
    
    # Predict
    prediction = model.predict(features_scaled)[0]
    
    # numeric result to label
    labels = {0: 'Low', 1: 'Medium', 2: 'High'}
    return jsonify({'stress_level': labels[prediction]})

if __name__ == '__main__':
    app.run(port=5000, debug=True)