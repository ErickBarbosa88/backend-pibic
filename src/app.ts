import express from 'express';
import cors from 'cors';


const app = express();
app.use(express.json());
app.use(cors());

app.use();



app.listen(3000, () => {
  console.log('Servidor executando na porta 3000');
});
