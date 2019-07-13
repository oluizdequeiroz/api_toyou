/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wo_apps_permission', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		user_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		app_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		timestamps: false,
		tableName: 'wo_apps_permission'
	});
};
