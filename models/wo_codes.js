/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wo_codes', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		code: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: ''
		},
		app_id: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: ''
		},
		user_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		time: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		}
	}, {
		timestamps: false,
		tableName: 'wo_codes'
	});
};
