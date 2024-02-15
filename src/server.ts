import express from "express"
import cors from 'cors'
import prisma from "./db";

const expenses: string[] = [];
export const app = express()
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
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
      amount: parseInt(req.body.expense['amount'], 10)
    }
  })
  res.json(expense)
})
