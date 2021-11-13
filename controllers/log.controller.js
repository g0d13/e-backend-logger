"use strict";
const Application = require("../models/application");
const Log = require("../models/log");

class LogController {
  // Create a new log
  async all(req, res) {
    const result = await Log.find().exec();
    return res.json(result);
  }

  async app(req, res) {
    const {id} = req.params
    const logs = await Log.find({application_id: id })
    return res.json(logs)
  }

  async create(req, res) {
    const {applicationId, ...rest} = req.body
    const app = await Application.findById(applicationId).exec()
    if(!app._id) {
      return res.status(404).json({message: "application id is not found, please verify your data"})
    }
    const log = await Log.create({application_id: applicationId, ...rest});
    return res.status(201).json(log)
  }

  async info(req, res) {
    const {id} = req.params;
    const log = await Log.findById(id).exec();
    if(!log) {
      return res.status(404).json({message: "log could not been found"})
    }
    return res.json(log)
  }

  async update(req, res) {
    const {id} = req.params;
    const log = await Log.findById(id).exec();

    if(!log) {
      return res.status(404).json({message: "log could not been found"})
    }
    
    Object.assign(log, req.body);    
    await log.save(); 
    return res.json(log)
  }

  async delete(req, res) {
    const {id} = req.params;
    const log = await Log.findById(id).exec();
    if(!log) return res.status(404).json({message: "Log not found"})
    await log.delete()
    // returns HTTP.NO_CONTENT
    res.status(204).json({})
  }
}

module.exports = new LogController();
