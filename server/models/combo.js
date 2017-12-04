'use strict';
module.exports = (sequelize, DataTypes) => {
  var Combo = sequelize.define('Combo', {
    title: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  Combo.associate = (models) => {
    Combo.hasMany(models.ComboItem, {
      foreignKey: 'comboId',
      as: 'comboItems',
    });
  };

  return Combo;
};