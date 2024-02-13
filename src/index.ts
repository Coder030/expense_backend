// const app = require("./server.js")
import { app } from "./server";

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log('hello on http://localhost:' + PORT);
  
})