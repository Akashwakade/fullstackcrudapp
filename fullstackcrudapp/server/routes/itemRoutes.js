const express = require('express');
const itemController = require('../controllers/itemController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();


router.post('/addtodo',  itemController.createItem);
// router.get('/',  itemController.getItems);
router.get('/:id', itemController.getItemById);
router.put('/:id', itemController.updateItem);
router.delete('/:id',  itemController.deleteItem);
router.get('/',(req,res)=>{
    res.send('homepage')
})

// router.post('/signup', itemController.signup);
// router.post('/login', itemController.login);


module.exports = router;
