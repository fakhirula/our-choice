const express = require('express')
const router = express.Router()
const { index, store, show, update, destroy } = require('../controllers/organizationController')
const { register, login } = require('../controllers/authController')

// Organizations
router.get('/organizations', index)
router.post('/organizations', store)
router.get('/organizations/:id', show)
router.put('/organizations/:id', update)
router.delete('/organizations/:id', destroy)

// Auth
router.post('/auth/register', register)
router.post('/auth/login', login)

router.delete('/organizations/filter', (req,res) => {
    res.send('Filter Data')
})

// GET           /users                      index   users.index
// GET           /users/create               create  users.create
// POST          /users                      store   users.store
// GET           /users/{user}               show    users.show
// GET           /users/{user}/edit          edit    users.edit
// PUT|PATCH     /users/{user}               update  users.update
// DELETE        /users/{user}               destroy users.destroy


module.exports = router