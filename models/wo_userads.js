/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wo_userads', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING(100),
			allowNull: false,
			defaultValue: ''
		},
		url: {
			type: DataTypes.STRING(3000),
			allowNull: false,
			defaultValue: ''
		},
		headline: {
			type: DataTypes.STRING(200),
			allowNull: false,
			defaultValue: ''
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		location: {
			type: DataTypes.STRING(1000),
			allowNull: false,
			defaultValue: 'us'
		},
		audience: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		ad_media: {
			type: DataTypes.STRING(3000),
			allowNull: false,
			defaultValue: ''
		},
		gender: {
			type: DataTypes.STRING(15),
			allowNull: false,
			defaultValue: 'all'
		},
		bidding: {
			type: DataTypes.STRING(15),
			allowNull: false,
			defaultValue: ''
		},
		clicks: {
			type: DataTypes.INTEGER(15),
			allowNull: false,
			defaultValue: '0'
		},
		views: {
			type: DataTypes.INTEGER(15),
			allowNull: false,
			defaultValue: '0'
		},
		posted: {
			type: DataTypes.STRING(15),
			allowNull: false,
			defaultValue: ''
		},
		status: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '1'
		},
		appears: {
			type: DataTypes.STRING(10),
			allowNull: false,
			defaultValue: 'post'
		},
		user_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		}
	}, {
		timestamps: false,
		tableName: 'wo_userads'
	});
};
