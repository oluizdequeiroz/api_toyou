/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wo_forumthreadreplies', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		thread_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		forum_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		poster_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		post_subject: {
			type: DataTypes.STRING(300),
			allowNull: false,
			defaultValue: ''
		},
		post_text: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		post_quoted: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		posted_time: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		timestamps: false,
		tableName: 'wo_forumthreadreplies'
	});
};
