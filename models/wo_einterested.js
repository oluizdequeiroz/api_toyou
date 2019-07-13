/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wo_einterested', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		event_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		user_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		timestamps: false,
		tableName: 'wo_einterested'
	});
};
