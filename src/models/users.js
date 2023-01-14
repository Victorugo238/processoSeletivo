const db = require("../config/sequelize");
const Sequelize = require ("sequelize");
const sequelize = require("../config/sequelize");



const users = db.define("users",{
    id:{
        type: Sequelize.DataTypes.INTEGER.UNSIGNED,
        autoIncrement:true,
        primaryKey:true,
    },
    nome:{
        type:Sequelize.DataTypes.STRING(120),
        allowNull:false,
    },
    CRM:{
        type:Sequelize.DataTypes.INTEGER,
        allowNull:false,
    },
    telefone:{
        type:Sequelize.DataTypes.INTEGER,
        allowNull:false,
    },
    celular:{
        type:Sequelize.DataTypes.INTEGER,
        allowNull:false,
    },
    cep:{
        type:Sequelize.DataTypes.INTEGER,
        allowNull:false,
    },
    especialidade1:{
        type:Sequelize.DataTypes.STRING(120),
        allowNull:false,
    },
    especialidade2:{
        type:Sequelize.DataTypes.STRING(120),
        allowNull:false,
    }

},
{
    timestamps:false,
    freezeTableName: true
})

module.exports = users;