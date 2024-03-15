const { User } = require('../models')
const jwt = require('jsonwebtoken')

exports.authMiddleware = async (req, res, next) => {
    let token
    let decoded

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(" ")[1]
    }

    if (!token) {
        return next(res.status(401).json({
            status: false,
            message: 'Unauthorized. Oops! It seems like you are not logged in. Please provide a token.'
        }))
    }

    try {
        decoded = await jwt.verify(token, process.env.JWT_SECRET)
    } catch (message) {
        return next( res.status(401).json({
            status: false,
            message: 'Unauthorized. Oh no! Your token seems to be invalid. Please check and try again.'
        }))
    }

    const currentUser = await User.findByPk(decoded.id)
    // console.log(currentUser)
    req.user

    next()
}