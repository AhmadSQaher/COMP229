import express from 'express'
import authCtrl from '../controllers/auth.controller.js'
const router = express.Router()
router.route('/auth/signin').post(authCtrl.signin)
router.route('/auth/signout').get(authCtrl.signout)
router.post('/signin', (req, res, next) => {
    //for testing
    console.log('/signin route hit')
    next()
}, authCtrl.signin)
export default router