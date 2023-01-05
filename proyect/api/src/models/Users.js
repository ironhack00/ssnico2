const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('users', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue:DataTypes.UUIDV4,
      primaryKey:true
    },
    userName: {
      type: DataTypes.STRING,
      
    },
    email:{
        type:DataTypes.STRING,
        
    },
    password:{
        type:DataTypes.STRING,
        
    },
    image:{
        type:DataTypes.STRING,
        
    },
    phoneNumber:{
        type:DataTypes.STRING,
        
    },
    role:{
        type: DataTypes.ENUM('admin', 'ban','active','inactive'),
        defaultValue: 'inactive'
    }
  });
};