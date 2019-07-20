/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wo_activities', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		user_id: {
			type: DataTypes.INTEGER(255),
			allowNull: false,
			defaultValue: '0'
		},
		post_id: {
			type: DataTypes.INTEGER(255),
			allowNull: false,
			defaultValue: '0'
		},
		activity_type: {
			type: DataTypes.STRING(32),
			allowNull: false,
			defaultValue: ''
		},
		time: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		}
	}, {
		timestamps: false,
		tableName: 'wo_activities'
	});
};
