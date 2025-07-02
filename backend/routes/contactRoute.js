const express = require('express')
const { saveContactController } = require('../controller/contactController')
const upload = require('../utils/multer')
const router = express.Router()

router.post('/save', upload.fields([{name: 'file', maxCount: 1}]), saveContactController)

module.exports = router