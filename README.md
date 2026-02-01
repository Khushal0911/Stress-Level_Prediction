# 🧠 Student Stress Predictor
### AI-Powered Wellness Analysis

---

## 📌 Project Overview
This project is an end-to-end AI solution designed to predict student stress levels categorized as **Low**, **Medium**, or **High**. It features a robust Machine Learning backend integrated with a modern, responsive React interface.

I developed this application after mastering the AI/ML fundamentals through the specialized program with **Masai School** and **TiHAN-IIT Hyderabad**. I am incredibly grateful to the faculty for the technical depth and mentorship that made this deployment possible.

---

## 🚀 Key Technical Highlights

### **1. Ensemble Modeling**
* Developed a **Soft-Voting Classifier** combining **SVM** (RBF Kernel) and **KNN** (Manhattan Distance).
* Balanced global boundary logic with local proximity patterns for superior stability.

### **2. Minimal Variance & Generalization**
* Achieved a remarkable **0.11% variance gap** between Training and Testing accuracy.
* **Training Accuracy:** 88.75%
* **Test Accuracy:** 88.64%
* This ensures the model performs reliably on real-world, unseen data.

### **3. Smart Feature Selection**
* Reduced 20+ variables to the **6 most impactful predictors** (Anxiety, Sleep Quality, Study Load, etc.).
* Optimized for a clean User Experience (UX) without sacrificing model precision.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Machine Learning** | Python, Scikit-Learn, Pandas, Joblib |
| **Backend API** | Flask, Flask-CORS |
| **Frontend UI** | React (Vite), Tailwind CSS |

---

## 📊 Model Evaluation
The model was validated using a **Confusion Matrix** to ensure high precision across all three classes:
* **Low Stress:** High True Positive rate.
* **Medium Stress:** Effectively distinguished from extremes.
* **High Stress:** Accurate detection for critical wellness intervention.

---

## ⚙️ How to Run Locally

### **Backend Setup**
1. Navigate to the root directory.
2. Ensure `stress_model_small.pkl` and `scaler_small.pkl` are present.
3. Run the Flask server:
   ```bash
   python app.py
