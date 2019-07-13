/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wo_pages_categories', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		lang_key: {
			type: DataTypes.STRING(160),
			allowNull: false,
			defaultValue: ''
		}
	}, {
		timestamps: false,
		tableName: 'wo_pages_categories'
	});
};
