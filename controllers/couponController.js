const Coupons = require('../models/coupons');

exports.createCoupon = async (req, res) => {
  try {
    const { images, headings, points, status } = req.body;
    
    if (!images || typeof images !== 'string') {
      return res.status(400).json({ error: 'Invalid or null input for images.' });
    }

    if (!headings || typeof headings !== 'string') {
      return res.status(400).json({ error: 'Invalid or null input for headings.' });
    }

    if (!points || typeof points !== 'number') {
      return res.status(400).json({ error: 'Invalid or null input for points.' });
    }
    else if (points < 0) {
      return res.status(400).json({ error: 'Ppints can only be positive.' });  
    }

    if (!status || typeof status !== 'number') {
      return res.status(400).json({ error: 'Invalid or null input for status.' });
    }
    else if (status < 0 || status > 100) {
      return res.status(400).json({ error: 'The status field can only take positive values.' });
    }

    const coupon = new Coupons({
      images,
      headings,
      points,
      status,
    });

    const savedCoupon = await coupon.save();

    res.json(savedCoupon);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};
