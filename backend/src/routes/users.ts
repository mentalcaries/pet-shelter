import express from 'express';
import passport from 'passport';
import { createUser } from '../controllers/users'

const router = express();

router.post('/', createUser); 


export default router;