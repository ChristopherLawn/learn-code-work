const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Language extends Model { }

Language.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: [1]
            }
        },
        year_created: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                len: [4]
            }
        },
        version_number: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2]
            }
        },
        website: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isUrl: true
            }
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        developed_by: {
            type: DataTypes.STRING,
            allowNull: true
        },
        filename_extension: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        language_type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        major_organizations: {
            type: DataTypes.STRING,
            allowNull: true
        }, 
        licensed_under: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'language'
    }
);

module.exports = Language;