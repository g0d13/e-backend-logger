'use strict';
const Log = require('../models/log')

class MainController {
	// Create a new log
	all(req, res, next) {
		const result = Log.create(req.body)
	}

	create(req, res, next) {
		res.json({ message: 'Example request.' });
	}

	info(req, res, next) {
		res.json({ message: 'Example request.' });
	}

	update(req, res, next) {
		res.json({ message: 'Example request.' });
	}

	delete(req, res, next) {
		res.json({ message: 'Example request.' });
	}
}

module.exports = new MainController();
