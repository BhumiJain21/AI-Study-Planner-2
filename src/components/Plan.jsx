import React from "react";

function Plan({ plan, suggestion, motivation }) {
  return (
    <div>
      <h2>Your Plan</h2>

      {plan.map((p, i) => (
        <p key={i}>{p}</p>
      ))}

      <h3>💡 Suggestion</h3>
      <p>{suggestion}</p>

      <h3>🔥 Motivation</h3>
      <p>{motivation}</p>
    </div>
  );
}

export default Plan;