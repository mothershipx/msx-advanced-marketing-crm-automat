// Advanced Marketing & CRM Automation for SMBs/Agencies — Entry point
// TODO: Build the core product logic

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ product: 'Advanced Marketing & CRM Automation for SMBs/Agencies', status: 'pre-mvp' });
});

app.get('/health', (req, res) => {
  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`Advanced Marketing & CRM Automation for SMBs/Agencies running on port ${PORT}`);
});
