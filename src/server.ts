import express from "express"
import cors from 'cors'
import prisma from "./db";

const expenses: string[] = [];
export const app = express()
app.use(cors({credentials: true, origin: 'http://localhost:3000'}))
app.use(express.json())


app.get('/', (req, res) => {
  console.log('hello from express!');
  res.json({message: 'this is GET /'})
})

app.get('/full', async (req, res) => {
  // res.json(expenses)
  const expenses = await prisma.expense.findMany()
  res.json(expenses)
})

app.post('/', async (req, res) => {
  // expenses.push(req.body.expense)
  // res.json(expenses)
  // console.log(req.body.expense['way'])
  const expense = await prisma.expense.create({
    data: {
      way: req.body.expense['way'],
      amount: req.body.expense['amount']
    }
  })
  res.json(expense)
})
