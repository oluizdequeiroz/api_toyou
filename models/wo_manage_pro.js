/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wo_manage_pro', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		type: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: ''
		},
		price: {
			type: DataTypes.STRING(11),
			allowNull: false,
			defaultValue: '0'
		},
		featured_member: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		profile_visitors: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		last_seen: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		verified_badge: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		posts_promotion: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		pages_promotion: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		discount: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		image: {
			type: DataTypes.STRING(300),
			allowNull: false,
			defaultValue: ''
		},
		status: {
			type: DataTypes.INTEGER(11),
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
		tableName: 'wo_manage_pro'
	});
};
