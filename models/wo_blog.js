/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wo_blog', {
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
		title: {
			type: DataTypes.STRING(120),
			allowNull: false,
			defaultValue: ''
		},
		content: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		posted: {
			type: DataTypes.STRING(300),
			allowNull: true,
			defaultValue: '0'
		},
		category: {
			type: DataTypes.INTEGER(255),
			allowNull: true,
			defaultValue: '0'
		},
		thumbnail: {
			type: DataTypes.STRING(100),
			allowNull: true,
			defaultValue: 'upload/photos/d-blog.jpg'
		},
		view: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		shared: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		tags: {
			type: DataTypes.STRING(300),
			allowNull: true,
			defaultValue: ''
		}
	}, {
		timestamps: false,
		tableName: 'wo_blog'
	});
};
