/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wo_albums_media', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		post_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		image: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: ''
		}
	}, {
		timestamps: false,
		tableName: 'wo_albums_media'
	});
};
