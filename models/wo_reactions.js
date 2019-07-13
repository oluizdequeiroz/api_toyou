/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wo_reactions', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		user_id: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		post_id: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: true,
			defaultValue: '0'
		},
		comment_id: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: true,
			defaultValue: '0'
		},
		replay_id: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: true,
			defaultValue: '0'
		},
		reaction: {
			type: DataTypes.STRING(50),
			allowNull: true
		}
	}, {
		timestamps: false,
		tableName: 'wo_reactions'
	});
};
