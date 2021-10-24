const { Schema, model } = require('mongoose');
const Joi = require('joi');

const feedbackSchema = Schema({
  name: {
    type: String,
    required: [true, 'feedback must have name'],
    minlength: 4,
  },
  email: {
    type: String,
    required: [true, 'feedback must have email'],
  },
  message: {
    type: String,
    required: [true, 'feedback must have message'],
  },
});

const JoiSchema = Joi.object({
  name: Joi.string().min(4).required(),
  email: Joi.string().required(),
  message: Joi.string().required(),
});

const Feedback = model('feedback', feedbackSchema);

module.exports = {
  Feedback,
  JoiSchema,
};
