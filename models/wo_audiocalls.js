/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wo_audiocalls', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		call_id: {
			type: DataTypes.STRING(30),
			allowNull: false,
			defaultValue: '0'
		},
		access_token: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		call_id_2: {
			type: DataTypes.STRING(30),
			allowNull: false,
			defaultValue: ''
		},
		access_token_2: {
			type: DataTypes.TEXT,
			allowNull: true
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
		active: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		called: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		time: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		declined: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		}
	}, {
		timestamps: false,
		tableName: 'wo_audiocalls'
	});
};
