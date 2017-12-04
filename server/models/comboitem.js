'use strict';
module.exports = (sequelize, DataTypes) => {
  var ComboItem = sequelize.define('ComboItem', {
    quantity: DataTypes.FLOAT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  ComboItem.associate = (models) => {
    ComboItem.belongsTo(models.Combo, {
      foreignKey: 'comboId',
      onDelete: 'CASCADE',
    });
  };

  return ComboItem;
};