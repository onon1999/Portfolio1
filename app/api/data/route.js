import { NextResponse } from "next/server";

// This file is disabled for static export. API routes are not supported on GitHub Pages.
// If you need this API, deploy to Vercel or another Node.js host.

export default function handler(req, res) {
  res.status(404).json({ error: 'API routes are not supported in static export.' });
}