/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wo_reports', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		post_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		comment_id: {
			type: DataTypes.INTEGER(15).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		profile_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		page_id: {
			type: DataTypes.INTEGER(15),
			allowNull: false,
			defaultValue: '0'
		},
		group_id: {
			type: DataTypes.INTEGER(15),
			allowNull: false,
			defaultValue: '0'
		},
		user_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		text: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		seen: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		time: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		}
	}, {
		timestamps: false,
		tableName: 'wo_reports'
	});
};
