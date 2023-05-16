const Stats = require('../models/stats');

exports.createStats = async (req, res) => {
  try {
    const { money, progress, days } = req.body;

    // Validate the 'money' field
    if (!money || typeof money !== 'number' ) {
      return res.status(400).json({ error: 'Invalid or null input for money.' });
    }
    else if (money < 0) {
      return res.status(400).json({ error: 'Money must be a positive value.' });
    }

    // Validate the 'progress' field
    if (!progress || typeof progress !== 'number') {
      return res.status(400).json({ error: 'Invalid or null input for progress.' });
    }
    else if (progress < 0 || progress > 100) {
      return res.status(400).json({ error: 'Progress must be between 0 and 100.' });
    }

    // Validate the 'days' field
    if (!days || typeof days !== 'number') {
      return res.status(400).json({ error: 'Invalid or null input for days.' });
    }
    else if (days < 0) {
      return res.status(400).json({ error: 'The number of days must be a positive value.' }); 
    }

    // Create a new stats object
    const stats = new Stats({
      money,
      progress,
      days,
    });

    // Save the stats to the database
    const savedStats = await stats.save();

    // Return the saved stats object
    res.json(savedStats);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};
