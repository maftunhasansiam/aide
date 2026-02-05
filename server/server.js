// Entry point for server, implement Express app here
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// test route
app.get('/', (req, res) => res.send('Aide Backend Running ✅'));

// listen on all interfaces
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server started on port ${PORT}`);
});
