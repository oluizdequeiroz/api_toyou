/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wo_terms', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		type: {
			type: DataTypes.STRING(32),
			allowNull: false,
			defaultValue: ''
		},
		text: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		timestamps: false,
		tableName: 'wo_terms'
	});
};
