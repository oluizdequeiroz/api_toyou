/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wo_notifications', {
		id: {
			type: DataTypes.INTEGER(255),
			allowNull: false,
			primaryKey: true
		},
		notifier_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		recipient_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		post_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		reply_id: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: true,
			defaultValue: '0'
		},
		comment_id: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: true,
			defaultValue: '0'
		},
		page_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		group_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		event_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		thread_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		blog_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		story_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		seen_pop: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		type: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: ''
		},
		type2: {
			type: DataTypes.STRING(32),
			allowNull: false,
			defaultValue: ''
		},
		text: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		url: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: ''
		},
		full_link: {
			type: DataTypes.STRING(1000),
			allowNull: false,
			defaultValue: ''
		},
		seen: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		sent_push: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		time: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		}
	}, {
		timestamps: false,
		tableName: 'wo_notifications'
	});
};
