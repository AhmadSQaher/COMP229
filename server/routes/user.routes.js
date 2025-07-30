import express from 'express'
import {
  create,
  list,
  read,
  update,
  remove,
  removeAll,
  userByID
} from '../controllers/user.controller.js'
import authCtrl from '../controllers/auth.controller.js'

const router = express.Router()

router.route('/')
  .post(create)   
  .get(list)       

router.route('/:userId')
  .get(authCtrl.requireSignin, read)
  .put(authCtrl.requireSignin, authCtrl.hasAuthorization, update)
  .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, remove)

router.route('/')
  .delete(authCtrl.requireSignin, removeAll)

router.param('userId', userByID)

export default router