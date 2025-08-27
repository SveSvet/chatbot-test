import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.post('/api/message', (req, res) => {
  console.log("req.body:", req.body);
  const { message } = req.body;

  setTimeout(() => {
    res.json({ reply: message });
  }, 1000)
});

app.listen(PORT, () => {
  console.log(`Сервер запущен по адресу http://localhost:${PORT}`);
});
