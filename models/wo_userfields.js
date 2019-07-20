/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wo_userfields', {
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
		fid_3: {
			type: DataTypes.STRING(32),
			allowNull: false,
			defaultValue: ''
		},
		fid_2: {
			type: DataTypes.STRING(32),
			allowNull: false,
			defaultValue: ''
		}
	}, {
		timestamps: false,
		tableName: 'wo_userfields'
	});
};
