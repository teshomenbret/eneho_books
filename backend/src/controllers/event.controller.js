// some configration is nedd
import extend from 'lodash/extend.js'
import formidable from 'formidable'
import fs from 'fs'
import errorHandler from '../helpers/dbErrorHandler.js'
import Event from '../models/event.model.js'


const create = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: "Image could not be uploaded",
            });
        }
        //check the required fields
        const { name} = fields;

        if (!name ) {
            return res.status(400).json({
                error: "All fields are required",
            });
        }

        let event = new Event(fields);
        // 1kb = 1000
        // 1mb = 1000000
        if (files.photo) {
            if (files.photo.size > 1000000) {
                return res.status(400).json({
                    error: "Image size should be less than 1mb",
                });
            }
            event.image.data = fs.readFileSync(files.photo.filepath);
            event.image.contentType = files.photo.mimetype;
            // deals with other fieds
        }
        event.save((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler.getErrorMessage(err),
                });
            }
            res.json(result)
        });
    });
};

const remove = async (req, res) => {
    try {
        let event = req.event
        let deletedEvent = await event.remove()
        res.json(deletedEvent)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const list = async (req, res) => {
    try {
        let events = await Event.find()
        res.json(events)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const eventByID = async (req, res, next, id) => {
    try {
        let event = await Event.findById(id)
        if (!event)
            return res.status(400).json({
                    error: "event not found"
                })

        req.event = event
        next()
    } catch (err) {
            return res.status(400).json({
                error: "Could not retrieve event"
            })
    }
}

const read = (req, res) => {
    return res.json(req.event)
}

const update = async (req, res) => {
    try {
        let event = req.event
        event = extend(event, req.body)
        await event.save()
        res.json(event)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}


export default { create,eventByID, read,update, list, remove}
