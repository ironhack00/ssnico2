const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('places', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    scort: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role:{
      type: DataTypes.ENUM('active','inactive'),
      defaultValue: 'inactive'
  } 
  });
};
