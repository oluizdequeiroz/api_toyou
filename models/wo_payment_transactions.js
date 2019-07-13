/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wo_payment_transactions', {
		id: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			primaryKey: true
		},
		userid: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false
		},
		kind: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		amount: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		transaction_dt: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		notes: {
			type: DataTypes.TEXT,
			allowNull: false
		}
	}, {
		timestamps: false,
		tableName: 'wo_payment_transactions'
	});
};
