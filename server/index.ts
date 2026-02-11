/**
 * @index.ts Configuration
 * @project: Synergy Asia WLL
 * @author: Saieed Rahamn
 * @Copyright: SidMan Solution 2026
 */
import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import { handlePostLead, handleGetLeads } from "./routes/leads";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  // Leads API
  app.post("/api/leads", handlePostLead);
  app.get("/api/leads", handleGetLeads);

  return app;
}
