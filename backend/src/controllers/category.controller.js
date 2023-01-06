// looks like fineshed
import extend from 'lodash/extend.js'
import errorHandler from '../helpers/dbErrorHandler.js'
import Category from '../models/category.models.js'

const create = async (req, res) => {
    try {     
        const category = new Category(req.body) 
        await category.save()
        return res.status(200).json({
            category
        })
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const list = async (req, res) => {
    try {
        let catagories = await Category.find()
        res.json(catagories)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const categoryByID = async (req, res, next, id) => {
    try {
        let category = await Category.findById(id)
        if (!category)
            return res.status(400).json({
                    error: "category not found"
                })

        req.category = category
        next()
    } catch (err) {
            return res.status(400).json({
                error: "Could not retrieve category"
            })
    }
}

const read = (req, res) => {
    return res.json(req.category)
}

const update = async (req, res) => {
    try {
        let category = req.category
        category = extend(category, req.body)
        await category.save()
        res.json(category)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const remove = async (req, res) => {
    try {
        let category = req.category
        let deletedCategory = await category.remove()
        res.json(deletedCategory)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}


export default { create,update, categoryByID, read, list, remove }
