import { Router } from "express"
import { healthRoute } from "./health.route.js"

export const router: Router = Router()

// Register sub-routers here
router.use("/health", healthRoute)

// Example: router.use('/users', userRouter);
