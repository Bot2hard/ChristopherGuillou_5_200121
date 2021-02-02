const express = require('express');
const router = express.Router();

const furnitureCtrl = require('../controllers/furniture');

router.get('/', furnitureCtrl.getAllFurniture); // tout les meubles
router.get('/:id', furnitureCtrl.getOneFurniture); // un seul meuble
router.post('/order', furnitureCtrl.orderFurniture);

module.exports = router;