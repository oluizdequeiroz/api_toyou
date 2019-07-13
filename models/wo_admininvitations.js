/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wo_admininvitations', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		code: {
			type: DataTypes.STRING(300),
			allowNull: false,
			defaultValue: '0'
		},
		posted: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: '0'
		}
	}, {
		timestamps: false,
		tableName: 'wo_admininvitations'
	});
};
