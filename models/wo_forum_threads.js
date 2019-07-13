/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wo_forum_threads', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		user: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		views: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		headline: {
			type: DataTypes.STRING(300),
			allowNull: false,
			defaultValue: ''
		},
		post: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		posted: {
			type: DataTypes.STRING(20),
			allowNull: false,
			defaultValue: '0'
		},
		last_post: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		forum: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		}
	}, {
		timestamps: false,
		tableName: 'wo_forum_threads'
	});
};
