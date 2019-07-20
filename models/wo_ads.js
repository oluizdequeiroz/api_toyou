/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wo_ads', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		type: {
			type: DataTypes.STRING(32),
			allowNull: false,
			defaultValue: ''
		},
		code: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		active: {
			type: DataTypes.ENUM('0','1'),
			allowNull: false,
			defaultValue: '1'
		}
	}, {
		timestamps: false,
		tableName: 'wo_ads'
	});
};
