const express = require('express');
const app = express();
const phonesData = require('./phones.json'); // Assuming phones.json is in the same directory

const PORT = process.env.PORT || 3000;

// Define routes
app.get('/phones', (req, res) => {
  res.json(phonesData);
});

app.get('/phones/:id', (req, res) => {
  const phoneId = req.params.id;
  const phone = phonesData.find(phone => phone.id === parseInt(phoneId));

  if (!phone) {
    res.status(404).json({ error: 'Phone not found' });
  } else {
    res.json(phone);
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
