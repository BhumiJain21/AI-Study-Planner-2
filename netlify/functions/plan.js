exports.handler = async (event) => {
  try {
    const body = JSON.parse(event.body || "{}");

    const subjects = body.subjects || [];
    const hours = body.hoursPerDay || 1;
    const days = body.days || 1;

    // fake AI logic (simple planner)
    const plan = [];

    for (let i = 1; i <= days; i++) {
      plan.push(
        `Day ${i}: Study ${subjects[i % subjects.length] || subjects[0]} for ${hours} hours`
      );
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        plan,
        suggestion: "Focus on weak subjects first.",
        motivation: "Consistency beats intensity 🔥"
      })
    };

  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: err.message
      })
    };
  }
};