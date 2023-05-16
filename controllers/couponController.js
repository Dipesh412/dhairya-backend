const Coupons = require('../models/coupons');

exports.createCoupon = async (req, res) => {
  try {
    const { images, headings, points, status } = req.body;

    // Validate the 'images' field
    if (!images || typeof images !== 'string') {
      return res.status(400).json({ error: 'Invalid or null input for images.' });
    }

    // Validate the 'headings' field
    if (!headings || typeof headings !== 'string') {
      return res.status(400).json({ error: 'Invalid or null input for headings.' });
    }

    // Validate the 'points' field
    if (!points || typeof points !== 'number') {
      return res.status(400).json({ error: 'Invalid or null input for points.' });
    }
    else if (points < 0) {
      return res.status(400).json({ error: 'Ppints can only be positive.' });  
    }

    // Validate the 'status' field
    if (!status || typeof status !== 'number') {
      return res.status(400).json({ error: 'Invalid or null input for status.' });
    }
    else if (status < 0 || status > 100) {
      return res.status(400).json({ error: 'The status field can only take positive values.' });
    }

    // Create a new coupon object
    const coupon = new Coupons({
      images,
      headings,
      points,
      status,
    });

    // Save the coupon to the database
    const savedCoupon = await coupon.save();

    // Return the saved coupon object
    res.json(savedCoupon);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};
