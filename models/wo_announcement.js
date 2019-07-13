/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wo_announcement', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		text: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		time: {
			type: DataTypes.INTEGER(32),
			allowNull: false,
			defaultValue: '0'
		},
		active: {
			type: DataTypes.ENUM('0','1'),
			allowNull: false,
			defaultValue: '1'
		}
	}, {
		timestamps: false,
		tableName: 'wo_announcement'
	});
};
