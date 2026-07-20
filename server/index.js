import express from "express";
import cors from "cors";
import { services, projects, blog, skills, counters } from "./data.js";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get("/api/services", (_req, res) => res.json(services));
app.get("/api/projects", (_req, res) => res.json(projects));
app.get("/api/blog", (_req, res) => res.json(blog));
app.get("/api/skills", (_req, res) => res.json(skills));
app.get("/api/counters", (_req, res) => res.json(counters));

const messages = [];

app.post("/api/contact", (req, res) => {
  const { name, email, subject, message } = req.body ?? {};

  if (!name || name.length < 4 || !email || !email.includes("@") || !message) {
    return res.status(400).json({ error: "invalid_input" });
  }

  messages.push({ name, email, subject, message, receivedAt: new Date().toISOString() });
  console.log("New contact message:", { name, email, subject });

  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
});
