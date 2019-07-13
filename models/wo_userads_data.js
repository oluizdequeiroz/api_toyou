/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wo_userads_data', {
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
		ad_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		clicks: {
			type: DataTypes.INTEGER(15),
			allowNull: false,
			defaultValue: '0'
		},
		views: {
			type: DataTypes.INTEGER(15),
			allowNull: false,
			defaultValue: '0'
		},
		spend: {
			type: DataTypes.FLOAT,
			allowNull: false,
			defaultValue: '0'
		},
		dt: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		}
	}, {
		timestamps: false,
		tableName: 'wo_userads_data'
	});
};
