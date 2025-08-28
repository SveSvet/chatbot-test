import express from 'express';
import cors from 'cors';
import { v4 as uuidv4 } from "uuid";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.post('/api/message', (req, res) => {
  console.log("req.body:", req.body);
  const { message } = req.body;

  setTimeout(() => {
    res.json({ reply: message, id: uuidv4() });
  }, 1000)
});

app.listen(PORT, () => {
  console.log(`Сервер запущен по адресу http://localhost:${PORT}`);
});
