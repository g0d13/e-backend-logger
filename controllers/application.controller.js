const Application = require('../models/application')

class ApplicationController {
  async findOne(req, res) {
    const test = await Application.findById(id).exec()
    console.log(test)
  }

  async create(req, res) { 
    const {body} = req
    const app = Application.create(body)
  }
}

module.exports = new ApplicationController()