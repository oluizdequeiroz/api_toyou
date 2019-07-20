/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wo_hashtags', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		hash: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: ''
		},
		tag: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: ''
		},
		last_trend_time: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		trend_use_num: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		}
	}, {
		timestamps: false,
		tableName: 'wo_hashtags'
	});
};
