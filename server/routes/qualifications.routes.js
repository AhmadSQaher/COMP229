import express from 'express'
import {
  create,
  list,
  read,
  update,
  remove,
  removeAll
} from '../controllers/qualifications.controller.js'

const router = express.Router()

router.route('/')
  .get(list)
  .post(create)
  .delete(removeAll)

router.route('/:id')
  .get(read)
  .put(update)
  .delete(remove)

export default router