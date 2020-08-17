var express = require('express');
var router = express.Router();

import uploadController = require('../controller/uploadApi')
router.post('/fileUpload', async function (req,res,next) {
    // controller
    try {
        await uploadController.upload(req)
        res.send('ok')
    }catch(e) {
        res.end('err')
    }
})

module.exports = router;
