/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wo_apps', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		app_user_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		app_name: {
			type: DataTypes.STRING(32),
			allowNull: false
		},
		app_website_url: {
			type: DataTypes.STRING(55),
			allowNull: false
		},
		app_description: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		app_avatar: {
			type: DataTypes.STRING(100),
			allowNull: false,
			defaultValue: 'upload/photos/app-default-icon.png'
		},
		app_callback_url: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		app_id: {
			type: DataTypes.STRING(32),
			allowNull: false
		},
		app_secret: {
			type: DataTypes.STRING(55),
			allowNull: false
		},
		active: {
			type: DataTypes.ENUM('0','1'),
			allowNull: false,
			defaultValue: '1'
		}
	}, {
		timestamps: false,
		tableName: 'wo_apps'
	});
};
