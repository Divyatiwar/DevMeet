const { Router } = require('express');
const postController = require("../controllers/post.js")

const router = Router();


router.post('/getCommentsOfPosts', postController.getCommentsOfPosts)
router.post('/getLikesOfPosts', postController.getLikesOfPosts)
router.post('/getUsersPosts', postController.getUsersPosts)
router.post('/getUserFollowers', postController.getUserFollowers)
router.post('/getUserFollowing', postController.getUserFollowing)
router.post('/getUserSearch', postController.getUsersStartingWith)



module.exports = router;