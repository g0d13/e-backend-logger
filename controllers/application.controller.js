const Application = require('../models/application')

class ApplicationController {
  async findOne(req, res) {
    const test = await Application.findById(id).exec()
    console.log(test)
  }

  async create(req, res) { 
    const {body} = req
    const app = await Application.create(body);
    return res.json({name: app.name, id: app._id});
  }

  async findAll(req, res) {
    const apps = await Application.find({}).exec();
    res.json(apps)
  }
}

module.exports = new ApplicationController()