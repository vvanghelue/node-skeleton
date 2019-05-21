const model = require('../model/test.model')

module.exports = {
	test: (req, res) => {
		res.json({
			salut: 'ca va ?'
		})
	},
	testParams: (req, res) => {
		res.json({
			salut: 'param : ' + req.params.foo
		})
	},
	testPost: (req, res) => {
		console.log(req.body)
		console.log(req.body.firstname)
		res.json({
			cool: true
		})
	}
}