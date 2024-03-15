const { User } = require('../models')
const jwt = require('jsonwebtoken')

const signToken = id => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    })
}

exports.register = async (req, res) => {
    try {
        if (req.body.password !== req.body.passwordConf) {
            return res.status(422).json({
                status: false,
                message: ['Unprocessable Entity! The password and password confirmation do not match.']
            })
        }

        const newUser = await User.create({
            username: req.body.username, 
            email: req.body.email, 
            password: req.body.password
        })

        const token = signToken(newUser.id)

        return res.status(201).json({
            status: true,
            message: "Created! Registration successful. Welcome aboard!",
            data: {
                token: token
            }
        })
        
    } catch (error) {
        return res.status(400).json({
            status: false,
            message: error.errors
        })
    }
}

exports.login = async (req, res) => {
    if(!req.body.username || !req.body.password) {
        return res.status(400).json({
            status: false,
            message: 'Bad Request! Please provide a valid username address and password.'
        })
    }

    const userData = await User.findOne({
        where: {
            username: req.body.username
        }
    })

    if (!userData || !(await userData.CorrectPassword(req.body.password, userData.password))) {
        return res.status(400).json({
            status: false,
            message: 'Bad Request! Invalid email or password. Please try again.'
        })
    }

    const token = signToken(userData.id)

    return res.status(200).json({
        status: true,
        message: "OK! Login successful. Enjoy your day!",
        data: {
            id: userData.id,
            username: userData.username,
            email: userData.email,
            token: token
        }
    })
}