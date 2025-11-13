const express = require('express');
const os = require('os');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>Nodejs Web App</h1>
    <p>This server is running inside Kubernetes.</p>
    <ul>
      <li><strong>Hostname:</strong> ${os.hostname()}</li>
      <li><strong>Time:</strong> ${new Date().toLocaleString()}</li>
    </ul>
  `);
});

app.get('/health', (req, res) => res.json({status: 'ok'}));

app.listen(port, () => console.log(`App listening on port ${port}`));
