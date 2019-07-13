/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wo_forum_sections', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		section_name: {
			type: DataTypes.STRING(200),
			allowNull: false,
			defaultValue: ''
		},
		description: {
			type: DataTypes.STRING(300),
			allowNull: true,
			defaultValue: ''
		}
	}, {
		timestamps: false,
		tableName: 'wo_forum_sections'
	});
};
