/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wo_userstory', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		user_id: {
			type: DataTypes.INTEGER(50),
			allowNull: false,
			defaultValue: '0'
		},
		title: {
			type: DataTypes.STRING(100),
			allowNull: false,
			defaultValue: ''
		},
		description: {
			type: DataTypes.STRING(300),
			allowNull: false,
			defaultValue: ''
		},
		posted: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: ''
		},
		expire: {
			type: DataTypes.STRING(100),
			allowNull: true,
			defaultValue: ''
		},
		thumbnail: {
			type: DataTypes.STRING(100),
			allowNull: false,
			defaultValue: ''
		}
	}, {
		timestamps: false,
		tableName: 'wo_userstory'
	});
};
