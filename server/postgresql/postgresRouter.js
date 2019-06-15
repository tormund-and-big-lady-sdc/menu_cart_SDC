const router = require('express').Router()
const controller = require('./postgresController.js')

router
  .route('/postgres')
  .get(controller.get)
  .post(controller.post)

router
  .route('/postgres/:id')
  .get(controller.getOne)
  .patch(controller.patch)
  .delete(controller.delete)

module.exports = router;