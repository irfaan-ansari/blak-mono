import express from "express"
import { router as apiRoutes } from "./routes/index"
// import { logger } from "./middleware/logger.js"
// import { errorHandler } from './middleware/errorHandler.js';

const app = express()
const PORT = process.env.PORT || 4000

// --- Global Middleware ---
app.use(express.json()) // Built-in body parser
// app.use(logger) // Custom request logger

// --- Scalable Routing ---
// All routes are prefixed with /api/v1 to allow for future versioning
app.use("/v1", apiRoutes)

// --- Post-Route Middleware ---
// Express 5 catches async errors automatically, passing them here
// app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`🚀 API Server ready at http://localhost:${PORT}/api/v1`)
})
