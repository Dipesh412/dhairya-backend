const UserProfile = require('../models/userProfile');

exports.createUserProfile = async (req, res) => {
  try {
    const { city, state, country, collections, pinCode, coupon } = req.body;

    // Validate the 'city' field
    if (!city || typeof city !== 'string') {
      return res.status(400).json({ error: 'Invalid or null input for city.' });
    }

    // Validate the 'state' field
    if (!state || typeof state !== 'string') {
      return res.status(400).json({ error: 'Invalid or null input for state.' });
    }

    // Validate the 'country' field
    if (!country || typeof country !== 'string') {
      return res.status(400).json({ error: 'Invalid or null input for country.' });
    }

    // Validate the 'collections' field
    if (!Array.isArray(collections) || !collections.every(item => typeof item === 'string')) {
      return res.status(400).json({ error: 'Invalid collections field' });
    }

    // Validate the 'pinCode' field
    if (!pinCode || typeof pinCode !== 'number' || String(pinCode).length !== 6) {
      return res.status(400).json({ error: 'Invalid pinCode value; check if it is exactly 6 digits in length.' });
    }

    // Validate the 'coupon' field
    if (!coupon || typeof coupon !== 'object') {
      return res.status(400).json({ error: 'Invalid coupon field' });
    }
    // Validate the 'coupon' sub-fields
    const { images, headings, points, status } = coupon;
    if (!images || typeof images !== 'string') {
      return res.status(400).json({ error: 'Invalid images field in coupon' });
    }
    if (!headings || typeof headings !== 'string') {
      return res.status(400).json({ error: 'Invalid headings field in coupon' });
    }
    if (!points || typeof points !== 'number' || points < 0) {
      return res.status(400).json({ error: 'Invalid points field in coupon; check if it is negative.' });
    }
    if (!status || typeof status !== 'number' || status < 0 || status > 100) {
      return res.status(400).json({ error: 'Invalid status field in coupon; check if it is between 0 and 100.' });
    }

    // Create a new user profile object
    const userProfile = new UserProfile({
      city,
      state,
      country,
      collections,
      pinCode,
      coupon: {
        images,
        headings,
        points,
        status,
      },
    });

    // Save the user profile to the database
    const savedUserProfile = await userProfile.save();

    // Return the saved user profile object
    res.json(savedUserProfile);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};
