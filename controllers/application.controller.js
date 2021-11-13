const Application = require("../models/application");
const Auth = require("../models/authorization");
const jwt = require("../utils/jwt");
class ApplicationController {
  async findOne(req, res) {
    const { id } = req.params;
    const test = await Application.findById(id).exec();
    console.log(test);
  }

  async create(req, res) {
    const { body } = req;
    const app = await Application.create(body);
    return res.json({ name: app.name, id: app._id });
  }

  async findAll(req, res) {
    const apps = await Application.find({}).exec();
    res.json(apps);
  }

  async auth(req, res) {
    const { id } = req.params;
    const app = await Application.findById(id).exec();

    if (!app) return res.status(204).json({ message: "app cannot be found" });

    // Generate token
    const token = jwt({ id: app._id, name: app.name });
    await Auth.create({ application_id: id, token });

    res.json({ token, expires_in: process.env.JWT_EXPIRATION });
  }
}

module.exports = new ApplicationController();
