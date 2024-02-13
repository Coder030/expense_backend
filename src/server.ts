import express from "express"
import cors from 'cors'

const expenses: string[] = [];
export const app = express()
app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
  console.log('hello from express!');
  res.json({message: 'this is GET /'})
})

app.get('/full', (req, res) => {
  res.json(expenses)
})

app.post('/', (req, res) => {
  expenses.push(req.body.expense)
  res.json(expenses)
})
