/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wo_custompages', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		page_name: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: ''
		},
		page_title: {
			type: DataTypes.STRING(200),
			allowNull: false,
			defaultValue: ''
		},
		page_content: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		page_type: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		}
	}, {
		timestamps: false,
		tableName: 'wo_custompages'
	});
};
