const DistrictController = require("../api/v1/controllers/districtController");
const express = require("express");
const router = express.Router();


router.get("/districts", DistrictController.getDistricts);


module.exports = router