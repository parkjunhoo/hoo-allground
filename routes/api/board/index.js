var express = require('express');
var router = express.Router();
//★★★★★★★★★★★★★★★★★★★★★★★★★★★★//
const controller = require('./controller')
//★★★★★★★★★★★★★★★★★★★★★★★★★★★★//

router.post('/write',controller.write)
router.post('/delete',controller.delete)
router.put('/edit',controller.edit)
router.get('/find',controller.find)

module.exports = router;
