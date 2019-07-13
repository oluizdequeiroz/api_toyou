/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wo_groupchatusers', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		user_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		group_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		active: {
			type: DataTypes.ENUM('1','0'),
			allowNull: false,
			defaultValue: '1'
		},
		last_seen: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: '0'
		}
	}, {
		timestamps: false,
		tableName: 'wo_groupchatusers'
	});
};
