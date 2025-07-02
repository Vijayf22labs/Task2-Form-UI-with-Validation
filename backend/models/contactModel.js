const sequelize = require('sequelize');
const { db } = require('../config/connectDb');

const ContactModel = db.define('Contact', {
    companyName: {
        type: sequelize.DataTypes.STRING,
        allowNull: false,
    },
    businessNature: {
        type: sequelize.DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: sequelize.DataTypes.STRING,
        allowNull: false,
    },
    postcode: {
        type: sequelize.DataTypes.STRING, 
        allowNull: false,
    },
    contactName: {
        type: sequelize.DataTypes.STRING,
        allowNull: false,
    },
    contactPhone: {
        type: sequelize.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize.DataTypes.STRING,
        allowNull: false,
    },
    linkedin: {
        type: sequelize.DataTypes.STRING,
        allowNull: false,
    },
    message: {
        type: sequelize.DataTypes.TEXT,
        allowNull: false,
    },
    file: {
        type: sequelize.DataTypes.STRING, 
        allowNull: false,
    },
    nda: {
        type: sequelize.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    }
}, {
    timestamps: true,
});

module.exports = ContactModel;
