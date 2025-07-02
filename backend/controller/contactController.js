const cloudinary = require('cloudinary')
const ContactModel = require('../models/contactModel')

const saveContactController = async(req, res) =>{
    try{
        const { companyName, businessNature, address, postcode, contactName, contactPhone, email, linkedin, message, nda } = req.body

        const file = req?.files?.file?.[0]
        let result = await cloudinary.v2.uploader.upload(file.path, {resource_type: 'image'})
        let imageURL = result.secure_url

        await ContactModel.create({
            companyName,
            businessNature,
            address,
            postcode,
            contactName,
            contactPhone,
            email,
            linkedin,
            message,
            file: imageURL,
            nda: nda === 'true' || nda === true 
        })

        return res.status(201).json({ message: 'Contact Info saved successfully', success: true})
    }
    catch(err){
        console.log(`Error in Save Contact Controller - ${err.message}`)
        return res.status(500).json({message: 'Internal Server Error', error: err.message, success: false})
    }
}

module.exports = { saveContactController }