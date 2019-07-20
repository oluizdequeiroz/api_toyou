/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wo_messages', {
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
		text: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		media: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: ''
		},
		mediaFileName: {
			type: DataTypes.STRING(200),
			allowNull: false,
			defaultValue: ''
		},
		mediaFileNames: {
			type: DataTypes.STRING(200),
			allowNull: false,
			defaultValue: ''
		},
		time: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		seen: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		deleted_one: {
			type: DataTypes.ENUM('0','1'),
			allowNull: false,
			defaultValue: '0'
		},
		deleted_two: {
			type: DataTypes.ENUM('0','1'),
			allowNull: false,
			defaultValue: '0'
		}
	}, {
		timestamps: false,
		tableName: 'wo_messages'
	});
};
