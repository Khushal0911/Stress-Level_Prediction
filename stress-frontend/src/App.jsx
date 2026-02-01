import React, { useState } from "react";
import axios from "axios";
import { Activity, Brain } from "lucide-react";

const fieldConfigs = {
  anxiety_level: { min: 0, max: 30, label: "Anxiety Level (0-30)" },
  self_esteem: { min: 0, max: 30, label: "Self Esteem (0-30)" },
  depression: { min: 0, max: 30, label: "Depression Score (0-30)" },
  sleep_quality: { min: 0, max: 5, label: "Sleep Quality (0-5)" },
  academic_performance: { min: 0, max: 5, label: "Academic Performance (0-5)" },
  study_load: { min: 0, max: 5, label: "Study Load (0-5)" },
};

const resultStyles = {
  Low: {
    bg: "bg-green-50",
    border: "border-green-200",
    text: "text-green-700",
    iconColor: "text-green-600",
    msg: "Great job! Your metrics look healthy.",
  },
  Medium: {
    bg: "bg-yellow-50",
    border: "border-yellow-200",
    text: "text-yellow-700",
    iconColor: "text-yellow-600",
    msg: "You're doing okay, but keep an eye on your study load.",
  },
  High: {
    bg: "bg-red-50",
    border: "border-red-200",
    text: "text-red-700",
    iconColor: "text-red-600",
    msg: "Stress levels are high. Please consider taking a break.",
  },
};

function App() {
  const [features, setFeatures] = useState({
    anxiety_level: 15,
    self_esteem: 15,
    depression: 15,
    sleep_quality: 3,
    academic_performance: 3,
    study_load: 3,
  });

  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const featureArray = Object.values(features);

      const response = await axios.post("http://localhost:5000/predict", {
        features: featureArray,
      });
      setPrediction(response.data.stress_level);
    } catch (error) {
      alert("Error related to Python Backend");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <Brain className="text-blue-600" /> Student Stress Predictor
        </h1>
        <p className="text-gray-600">AI-Powered Wellness Analysis</p>
      </header>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4">
          {Object.keys(fieldConfigs).map((key) => (
            <div
              key={key}
              className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100"
            >
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-bold text-gray-700">
                  {fieldConfigs[key].label.split("(")[0]}
                </label>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-black">
                  {features[key]} / {fieldConfigs[key].max}
                </span>
              </div>

              <input
                type="range"
                min={fieldConfigs[key].min}
                max={fieldConfigs[key].max}
                value={features[key]} // This is now a number, not an object!
                onChange={(e) => {
                  const val = parseInt(e.target.value);
                  setFeatures({ ...features, [key]: val });
                }}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />

              <div className="flex justify-between mt-2 text-[10px] text-gray-400 font-medium">
                <span>MIN: {fieldConfigs[key].min}</span>
                <span>MAX: {fieldConfigs[key].max}</span>
              </div>
            </div>
          ))}
        </div>
        <button className="w-full mt-4 bg-blue-600 text-white p-4 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg">
          {loading ? "Analyzing..." : "Analyze Stress Level"}
        </button>
      </form>

      {prediction && (
        <div
          className={`mt-8 p-6 rounded-lg border-2 flex items-center gap-4 ${
            prediction === "High"
              ? "bg-red-50 border-red-200"
              : "bg-green-50 border-green-200"
          }`}
        >
          <Activity size={40} className={resultStyles[prediction].iconColor} />
          <div>
            <h3 className="text-xl font-bold">{prediction} Stress Detected</h3>
            <p>{resultStyles[prediction].msg}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
