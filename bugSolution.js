const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  if (isNaN(userId)) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }
  // ... other code to fetch user data
  res.json({ userId });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});