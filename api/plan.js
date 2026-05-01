export default function handler(req, res) {
  res.status(200).json({
    message: "Plan generated!",
    plan: "Study 2 hours daily + revise + practice"
  });
}