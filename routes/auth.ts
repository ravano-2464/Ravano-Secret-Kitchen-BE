import express from 'express';
const router = express.Router();
import { register, login, getMe } from '../controllers/authController.ts';
import { protect } from '../middleware/auth.ts';

router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, getMe);

export default router;
