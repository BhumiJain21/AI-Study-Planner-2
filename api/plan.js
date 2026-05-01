export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  const { subjects = [], hoursPerDay = 1, days = 1 } = req.body;

  const plan = [];

  for (let i = 0; i < days; i++) {
    plan.push(
      `Day ${i + 1}: Study ${subjects[i % subjects.length]} for ${hoursPerDay} hrs`
    );
  }

  res.status(200).json({
    plan,
    suggestion: "Consistency is the key 🔑",
    motivation: "You are closer than you think 🔥"
  });
}