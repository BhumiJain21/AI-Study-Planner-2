import React, { useState } from "react";
import API from "../api";

function Form({ setPlan, setSuggestion, setMotivation }) {
  const [subjects, setSubjects] = useState("");
  const [hours, setHours] = useState("");
  const [days, setDays] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await API.post("/plan", {
      subjects: subjects.split(","),
      hoursPerDay: Number(hours),
      days: Number(days),
    });

    setPlan(res.data.plan);
    setSuggestion(res.data.suggestion);
    setMotivation(res.data.motivation);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Subjects" onChange={e => setSubjects(e.target.value)} />
      <input type="number" placeholder="Hours" onChange={e => setHours(e.target.value)} />
      <input type="number" placeholder="Days" onChange={e => setDays(e.target.value)} />
      <button type="submit">Generate Plan</button>
    </form>
  );
}

export default Form;