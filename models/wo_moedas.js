/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wo_moedas', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		user_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'wo_users',
				key: 'user_id'
			}
		},
		saldo: {
			type: DataTypes.INTEGER(50),
			allowNull: false
		}
	}, {
		timestamps: false,
		tableName: 'wo_moedas'
	});
};
