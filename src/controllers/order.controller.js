// some configration nedd
import extend from 'lodash/extend.js'
import Order from "../models/order.model.js";
import errorHandler from '../helpers/dbErrorHandler.js'


const create = async (req, res) => {
    try {     
        const order = new Order(req.body);
        order.save((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler(err),
                });
            }
            return res.status(200).json({
                order: result
            })
        });
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const remove = async (req, res) => {
    try {
        let order = req.order
        let deletedOrder = await order.remove()
        res.json(deletedOrder)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const list = async (req, res) => {
    try {
        let orders = await Order.find()
        res.json(orders)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const orderById = async (req, res, next, id) => {
    try {
        let order = await Order.findById(id)
        if (!order)
            return res.status(400).json({
                    error: "Order not found"
                })

        req.order = order
        next()
    } catch (err) {
            return res.status(400).json({
                error: "Could not retrieve order"
            })
    }
}

const read = (req, res) => {
    return res.json(req.order)
}

const update = async (req, res) => {
    try {
        let order = req.order
        order = extend(order, req.body)
        await order.save()
        res.json(order)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}


const updateStutus = async (req, res) =>{
    try {
        let order = req.order
        order.status = req.body.status 
        await order.save()
        res.json(order)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }

}



export default { create,update,updateStutus, orderById, read, list, remove }