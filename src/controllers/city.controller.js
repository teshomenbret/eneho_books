// looks like fineshed
import extend from 'lodash/extend.js'
import errorHandler from '../helpers/dbErrorHandler.js'
import City from '../models/city.model.js';


const create = async (req, res) => {
    try {     
        const city = new City(req.body) 
        await city.save()
        return res.status(200).json({
            city: city
        })
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
   

};

const remove = async (req, res) => {
    try {
        let city = req.city
        let deletedCity = await city.remove()
        res.json(deletedCity)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const list = async (req, res) => {
    try {
        let cities = await City.find()
        res.json(cities)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const cityByID = async (req, res, next, id) => {
    try {
        let city = await City.findById(id)
        if (!city)
            return res.status(400).json({
                    error: "city not found"
                })

        req.city = city
        next()
    } catch (err) {
            return res.status(400).json({
                error: "Could not retrieve city"
            })
    }
}

const read = (req, res) => {
    return res.json(req.city)
}

const update = async (req, res) => {
    try {
        let city = req.city
        city = extend(city, req.body)
        await city.save()
        res.json(city)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}


export default { create,cityByID, read,update, list, remove}
