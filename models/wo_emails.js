/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wo_emails', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		user_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		email_to: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: ''
		},
		subject: {
			type: DataTypes.STRING(32),
			allowNull: false,
			defaultValue: ''
		},
		message: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		timestamps: false,
		tableName: 'wo_emails'
	});
};
