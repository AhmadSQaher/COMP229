import express from 'express'
import { sendContactEmail } from '../helpers/email.util.js';
import {
    create,
    list,
    read,
    update,
    remove,
    removeAll
} from '../controllers/contact.controller.js'

const router = express.Router()

router.route('/')
    .get(list)
    .post(create)
    .delete(removeAll)

router.route('/:id')
    .get(read)
    .put(update)
    .delete(remove)

router.post('/send-email', async (req, res) => {
    try {
        await sendContactEmail(req.body);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to send email' });
    }
});

export default router