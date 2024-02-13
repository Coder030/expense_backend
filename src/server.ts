import express from "express"
import cors from 'cors'

const expensesList: string[] = [];
export const app = express()
app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
  console.log('hello from express!');
  res.json({message: 'this is GET /'})
})

app.get('/full', (req, res) => {
  res.json(expensesList)
})

app.post('/', (req, res) => {
  expensesList.push(req.body.expense)
  res.json(expensesList)
})
