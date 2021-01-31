const express = require('express');

const csvReaderCtrl = require('../controllers/csvReaderController');

const router = express.Router();

router.get('/town/zipcode-asc', csvReaderCtrl.getByZipAsc);
router.get('/town/name-asc', csvReaderCtrl.getByTownAsc);
router.get('/town/zipcode-and-name-asc', csvReaderCtrl.getByZipTownAsc);

module.exports = router;