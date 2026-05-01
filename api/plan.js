export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  const { subjects, hoursPerDay, days } = req.body;

  const plan = [];

  for (let i = 1; i <= days; i++) {
    plan.push(`Day ${i}: Study ${subjects[i % subjects.length]} for ${hoursPerDay} hrs`);
  }

  res.status(200).json({
    plan,
    suggestion: "Focus daily consistency",
    motivation: "You’re doing great 🔥"
  });
}