const express = require('express');

const router = express.Router();

const { controllerWrapper, validation } = require('../../middlewares');
const { JoiSchema } = require('../../models/feedback');
const { feedback: ctrl } = require('../../controllers');

router.post('/', validation(JoiSchema), controllerWrapper(ctrl.addFeedback));

module.exports = router;
