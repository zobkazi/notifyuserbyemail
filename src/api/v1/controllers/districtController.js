const District = require("../../../models/District");


class DistrictController {
    async getDistricts(req, res, next) {
        try {
            const districts = await District.find();
            res.status(200).json(districts);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }    
}

module.exports = new DistrictController();