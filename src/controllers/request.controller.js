// looks like fineshed
import extend from 'lodash/extend.js'
import errorHandler from '../helpers/dbErrorHandler.js'
import Request from '../models/request.model.js'


const create = async (req, res) => {
    try {     
        const request = new Request(req.body) 
        await request.save()
        return res.status(200).json({
            request: request
        })
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
   

};

const remove = async (req, res) => {
    try {
        let request = req.request
        let deletedRequest = await request.remove()
        res.json(deletedRequest)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const list = async (req, res) => {
    try {
        let requests = await Request.find()
        res.json(requests)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const requestByID = async (req, res, next, id) => {
    try {
        let request = await Request.findById(id)
        if (!request)
            return res.status(400).json({
                    error: "request not found"
                })

        req.request = request
        next()
    } catch (err) {
            return res.status(400).json({
                error: "Could not retrieve request"
            })
    }
}

const read = (req, res) => {
    return res.json(req.request)
}

const update = async (req, res) => {
    try {
        let request = req.request
        request = extend(request, req.body)
        await request.save()
        res.json(request)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}


export default { create,requestByID, read,update, list, remove}
