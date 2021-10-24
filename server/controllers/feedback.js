const { Feedback } = require('../models');

const addFeedback = async (req, res) => {
  const result = await Feedback.create(req.body);
  res.status(201).json({
    message: 'Feedback was added',
    status: 'success',
    code: 201,
    data: {
      result,
    },
  });
};

module.exports = {
  addFeedback,
};
