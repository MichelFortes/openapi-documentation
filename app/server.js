const { apiReference } = require('@scalar/express-api-reference')
const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

process.on('SIGINT', () => {
  console.log('Received SIGINT. Shutting down...');
  process.exit(0);
});

app.use(
  '/',
  apiReference({
    spec: {
      content: fs.readFileSync('./spec.yaml', 'utf-8')
    },
  }),
)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});