/**
 * @leads.ts Configuration
 * @project: Synergy Asia WLL
 * @author: Saieed Rahamn
 * @Copyright: SidMan Solution 2026
 */
import { RequestHandler } from "express";

// Mock leads storage for demonstration
let leads: any[] = [];

export const handlePostLead: RequestHandler = (req, res) => {
  const { name, email, message, type } = req.body;
  
  if (!name || !email) {
    res.status(400).json({ error: "Name and email are required" });
    return;
  }

  const newLead = {
    id: Date.now(),
    name,
    email,
    message,
    type: type || "General Inquiry",
    createdAt: new Date().toISOString()
  };

  leads.push(newLead);
  console.log("New lead received:", newLead);
  
  res.status(201).json({ 
    message: "Thank you for your inquiry. Our team will contact you soon.",
    leadId: newLead.id
  });
};

export const handleGetLeads: RequestHandler = (_req, res) => {
  res.json(leads);
};
