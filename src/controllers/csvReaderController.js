const { getByZipAscService, getByTownAscService, getByZipTownAscService } = require('../services/csvReaderService');

exports.getByZipAsc = async (req, res) => {
    try {
        const data = await getByZipAscService();
        res.status(200).json({data})
    } catch (error) {
        res.status(500).json({ message: message.error});
    }
}

exports.getByTownAsc = async (req, res) => {
    try {
        const data = await getByTownAscService();
        res.status(200).json({data})
    } catch (error) {
        res.status(500).json({ message: message.error});
    }
}

exports.getByZipTownAsc = async (req, res) => {
    try {
        const data = await getByZipTownAscService();
        res.status(200).json({data})
    } catch (error) {
        res.status(500).json({ message: message.error});
    }
}