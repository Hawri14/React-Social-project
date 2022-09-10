import express from 'express';

import { getPost } from '../controllers/posts.js'

const router = express.Router();
//this is reached by going to loachlost:500/posts since we added a prefix of 'posts' to all rounts here

router.get('/', getPost);

export default router;
