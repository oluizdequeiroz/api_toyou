/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wo_agoravideocall', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		from_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		to_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		type: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: 'video'
		},
		room_name: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: '0'
		},
		time: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		status: {
			type: DataTypes.STRING(20),
			allowNull: false,
			defaultValue: ''
		}
	}, {
		timestamps: false,
		tableName: 'wo_agoravideocall'
	});
};
