const Another = require("../models/Another")


const getHi = async (req, res) => {
    const getHi = await Another.find({})
    if (!getHi) return res.status(200).send('not docs')
    res.status(200).json({getHi})
}
const sayHi = async (req, res) => {
    const newHi = await Another.create(req.body)
    res.status(200).json({newHi})
}

module.exports = {sayHi, getHi}