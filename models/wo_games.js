/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wo_games', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		game_name: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		game_avatar: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		game_link: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		active: {
			type: DataTypes.ENUM('0','1'),
			allowNull: false,
			defaultValue: '1'
		},
		time: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		}
	}, {
		timestamps: false,
		tableName: 'wo_games'
	});
};
