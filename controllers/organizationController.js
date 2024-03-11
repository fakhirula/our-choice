const { Organization } = require('../models');

exports.index = async (req, res) => {
    try {
        const organization = await Organization.findAll();

        if (organization.length === 0) {
            return res.status(200).json({ 
                success: false, 
                message: 'Data not found.' 
            });
        } 

        return res.status(200).json({
            status: true,
            data: organization
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            error: 'Oops! Something went wrong on our end. Please try again later.'
        })
    }
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
            status: true,
            data: newOrganization
        })
    } catch (error) {
        return res.status(400).json({
            status: false,
            error: error.errors
        })
    }
}

exports.show = async (req, res) => {
    try {
        const id = req.params.id
        const organization = await Organization.findByPk(id)
        
        if (!organization) {
            return res.status(404).json({
                status: false,
                error: 'Data not found.'
            })
        }

        return res.status(200).json({
            status: true,
            data: organization
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            error: 'Oops! Something went wrong on our end. Please try again later.'
        })
    }
}

exports.update = async (req, res) => {
    try {
        const id = req.params.id
        const { name } = req.body

        if (!name) {
            return res.status(400).json({
                status: false,
                error: 'Name is required.'
            })
        }
        
        await Organization.update(req.body, {
            where: {
                id: id
            }
        })
        const updatedOrganization = await Organization.findByPk(id)

        if (!updatedOrganization) {
            return res.status(404).json({
                status: false,
                error: 'Data not found.'
            })
        }

        return res.status(200).json({
            status: true,
            data: updatedOrganization
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            error: 'Oops! Something went wrong on our end. Please try again later.'
        })
    }
}

exports.destroy = async (req, res) => {
    const id = req.params.id

    const organization = await Organization.findByPk(id)

    if(!organization) {
        return res.status(404).json({
            status: false,
            error: 'Data not found.'
        })
    }

    await Organization.destroy({
        where: {
            id: id
        }
    })

    return res.status(200).json({
        status: true,
        message: `Data with id ${id} deleted successfully.`
    })
}