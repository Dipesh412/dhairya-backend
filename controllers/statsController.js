const Stats = require('../models/stats');

exports.createStats = async (req, res) => {
  try {
    const { money, progress, days } = req.body;

    if (!money || typeof money !== 'number' ) {
      return res.status(400).json({ error: 'Invalid or null input for money.' });
    }
    else if (money < 0) {
      return res.status(400).json({ error: 'Money must be a positive value.' });
    }

    if (!progress || typeof progress !== 'number') {
      return res.status(400).json({ error: 'Invalid or null input for progress.' });
    }
    else if (progress < 0 || progress > 100) {
      return res.status(400).json({ error: 'Progress must be between 0 and 100.' });
    }

    if (!days || typeof days !== 'number') {
      return res.status(400).json({ error: 'Invalid or null input for days.' });
    }
    else if (days < 0) {
      return res.status(400).json({ error: 'The number of days must be a positive value.' }); 
    }

    const stats = new Stats({
      money,
      progress,
      days,
    });

    const savedStats = await stats.save();

    res.json(savedStats);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};
