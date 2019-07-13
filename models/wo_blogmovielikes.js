/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wo_blogmovielikes', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		blog_comm_id: {
			type: DataTypes.INTEGER(20),
			allowNull: false,
			defaultValue: '0'
		},
		blog_commreply_id: {
			type: DataTypes.INTEGER(20),
			allowNull: false,
			defaultValue: '0'
		},
		movie_comm_id: {
			type: DataTypes.INTEGER(20),
			allowNull: false,
			defaultValue: '0'
		},
		movie_commreply_id: {
			type: DataTypes.INTEGER(20),
			allowNull: false,
			defaultValue: '0'
		},
		user_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		blog_id: {
			type: DataTypes.INTEGER(50),
			allowNull: false,
			defaultValue: '0'
		},
		movie_id: {
			type: DataTypes.INTEGER(50),
			allowNull: false,
			defaultValue: '0'
		}
	}, {
		timestamps: false,
		tableName: 'wo_blogmovielikes'
	});
};
