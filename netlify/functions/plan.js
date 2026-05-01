exports.handler = async (event) => {
  try {
    const body = JSON.parse(event.body || "{}");

    const plan = ["Study Math 2 hrs", "Study Science 2 hrs"];

    return {
      statusCode: 200,
      body: JSON.stringify({
        plan,
        suggestion: "Focus daily, don’t overload.",
        motivation: "You can do it 🔥"
      })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};