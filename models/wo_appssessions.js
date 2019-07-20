/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wo_appssessions', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		user_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		session_id: {
			type: DataTypes.STRING(120),
			allowNull: false,
			defaultValue: '',
			unique: true
		},
		platform: {
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
		tableName: 'wo_appssessions'
	});
};
