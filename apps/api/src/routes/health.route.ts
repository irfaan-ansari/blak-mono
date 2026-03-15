import { Router, Request, Response } from "express"

export const healthRoute: Router = Router()

healthRoute.get("/", (req: Request, res: Response) => {
  res.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  })
})
