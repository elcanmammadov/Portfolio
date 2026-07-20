import { blog } from "./_data.js";

export default function handler(req, res) {
  res.status(200).json(blog);
}
