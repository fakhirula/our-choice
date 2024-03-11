const { Organization } = require('../models');

exports.getAll = (req, res) => {

}

exports.store = async (req, res) => {

    try {
        let {name,logo} = req.body;

        const newOrganization = await Organization.create(
            {
                name,
                logo
            }
        );
        res.status(201).json({
            status: 'Success',
            data: newOrganization
        })
    } catch (error) {
        return res.status(400).json({
            status: 'Fail',
            error: error.errors
        })
    }
}