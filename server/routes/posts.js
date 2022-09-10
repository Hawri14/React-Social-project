import express from 'express';

const router = express.Router();
//this is reached by going to loachlost:500/posts since we added a prefix of 'posts' to all rounts here


router.get('/', (req, res) => {
    res.send('THIS WORKS!!!');
});

export default router;
