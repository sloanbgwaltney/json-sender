function jsonSender(status, obj) {
    return function(req, res, next) {
        res.status(status).json(obj)
        next()
    }
}

module.exports = jsonSender