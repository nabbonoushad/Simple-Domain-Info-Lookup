const express = require('express');
const path = require('path');
const { getDomainInfo } = require('./whois');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname)));
app.use(express.json());

app.post('/lookup', async (req, res) => {
  const { domain } = req.body;
  try {
    const data = await getDomainInfo(domain);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch domain info', details: err.message });
  }
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
