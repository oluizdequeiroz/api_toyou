/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wo_userstorymedia', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		story_id: {
			type: DataTypes.INTEGER(30),
			allowNull: false,
			defaultValue: '0'
		},
		type: {
			type: DataTypes.STRING(30),
			allowNull: false,
			defaultValue: ''
		},
		filename: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		expire: {
			type: DataTypes.STRING(100),
			allowNull: true,
			defaultValue: ''
		}
	}, {
		timestamps: false,
		tableName: 'wo_userstorymedia'
	});
};
