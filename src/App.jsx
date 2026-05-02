import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [subjects, setSubjects] = useState("");
  const [hours, setHours] = useState("");
  const [days, setDays] = useState("");
  const [plan, setPlan] = useState([]);
  const [suggestion, setSuggestion] = useState("");
  const [motivation, setMotivation] = useState("");

  const generatePlan = async () => {
   const res = await fetch("https://YOUR-PROJECT.vercel.app/api/plan", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    subjects: subjects.split(","),
    hoursPerDay: Number(hours),
    days: Number(days),
  }),
});

const data = await res.json();

setPlan(data.plan || []);
setSuggestion(data.suggestion || "");
setMotivation(data.motivation || "");

  return (
    <div className="container">
      <h1>📚 AI Study Planner 🚀</h1>

      <input
        type="text"
        placeholder="e.g. Math, Science, English"
        value={subjects}
        onChange={(e) => setSubjects(e.target.value)}
      />

      <input
        type="number"
        placeholder="Hours per day"
        value={hours}
        onChange={(e) => setHours(e.target.value)}
      />

      <input
        type="number"
        placeholder="Number of days"
        value={days}
        onChange={(e) => setDays(e.target.value)}
      />

      <button onClick={generatePlan}>Generate Plan</button>

      <h2>Your Plan</h2>

      {plan.map((p, i) => (
        <div key={i} className="plan-card">
          {p}
        </div>
      ))}

      {suggestion && (
        <>
          <h3>💡 Suggestion</h3>
          <p>{suggestion}</p>
        </>
      )}

      {motivation && (
        <>
          <h3>🔥 Motivation</h3>
          <p>{motivation}</p>
        </>
      )}
    </div>
  );
}

export default App;