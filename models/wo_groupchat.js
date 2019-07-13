/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wo_groupchat', {
		group_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		user_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		group_name: {
			type: DataTypes.STRING(20),
			allowNull: false,
			defaultValue: ''
		},
		avatar: {
			type: DataTypes.STRING(3000),
			allowNull: false,
			defaultValue: 'upload/photos/d-group.jpg'
		},
		time: {
			type: DataTypes.STRING(30),
			allowNull: false,
			defaultValue: ''
		}
	}, {
		timestamps: false,
		tableName: 'wo_groupchat'
	});
};
