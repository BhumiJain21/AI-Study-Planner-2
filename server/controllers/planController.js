export const generatePlan = (req, res) => {
  const { subjects, hoursPerDay, days } = req.body;

  const cleanedSubjects = subjects.map((s) => s.trim());

  let plan = [];
  const difficulty = ["Easy", "Medium", "Hard"];

  for (let i = 1; i <= days; i++) {
    let dayPlan = `Day ${i}: `;

    cleanedSubjects.forEach((sub, index) => {
      dayPlan += `${sub} (${difficulty[index % 3]}) - ${
        Math.floor(hoursPerDay / cleanedSubjects.length)
      } hrs, `;
    });

    plan.push(dayPlan);
  }

  let suggestion = "";

  if (hoursPerDay <= 2) {
    suggestion = "Try increasing study time gradually.";
  } else if (hoursPerDay > 6) {
    suggestion = "Take breaks to avoid burnout.";
  } else {
    suggestion = "Great balance! Keep revising regularly.";
  }

  const quotes = [
    "Consistency beats motivation.",
    "Small progress daily = big success.",
    "Stay focused and trust the process.",
    "Discipline is your superpower.",
  ];

  const motivation =
    quotes[Math.floor(Math.random() * quotes.length)];

  res.json({ plan, suggestion, motivation });
};