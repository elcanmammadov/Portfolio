export default function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "method_not_allowed" });
    return;
  }

  const { name, email, subject, message } = req.body ?? {};

  if (!name || name.length < 4 || !email || !email.includes("@") || !message) {
    res.status(400).json({ error: "invalid_input" });
    return;
  }

  console.log("New contact message:", { name, email, subject });

  res.status(200).json({ ok: true });
}
