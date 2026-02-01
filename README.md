# Stress-Level_Prediction
A professional README.md is your "technical storefront." Since you’ve mastered the AI/ML fundamentals through Masai School and TiHAN-IIT Hyderabad, your documentation should reflect that rigor.

Below is a complete template. You can copy this directly into a file named README.md in your project folder.

🧠 Student Stress Predictor: End-to-End AI Solution
Project Overview
This project is an AI-powered wellness tool designed to predict student stress levels (Low, Medium, High). It bridges the gap between complex Machine Learning research and a user-centric web interface.

I developed this project after building a strong foundation in AI/ML fundamentals through the specialized program with Masai School and TiHAN-IIT Hyderabad. I am deeply grateful to the faculty for the technical depth and mentorship that made this deployment possible.

🚀 Key Technical Highlights
Ensemble Modeling: Built a Soft-Voting Classifier combining SVM (RBF Kernel) and KNN (Manhattan Distance) to leverage both boundary and proximity-based logic.

Near-Zero Variance: Achieved a remarkable 0.11% gap between Training Accuracy (88.75%) and Test Accuracy (88.64%), proving excellent model generalization.

Feature Engineering: Reduced the feature space from 20+ variables to the 6 most impactful predictors (Anxiety, Sleep Quality, etc.) to optimize UX and reduce noise.

Full-Stack Architecture: Integrated a Flask backend microservice with a modern React (Vite) frontend for real-time inference.

📊 Model Performance
The model was evaluated using a multi-class Confusion Matrix to ensure precision across all stress categories.

Training Accuracy: 88.75%

Test Accuracy: 88.64%

Ensemble Strategy: Soft-Voting (SVM + KNN)

🛠️ Tech Stack
AI/ML: Python, Scikit-Learn, Pandas, NumPy, Joblib

Backend: Flask, Flask-CORS

Frontend: React (Vite), Tailwind CSS, Framer Motion, Lucide React
