import express from "express"

const app = express()
const PORT = process.env.PORT || 3001

app.get("/", (req, res) => {
  res.json({ message: "API running" })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

// https://medium.com/@gabrieldrouin/node-js-2025-guide-how-to-setup-express-js-with-typescript-eslint-and-prettier-b342cd21c30d
