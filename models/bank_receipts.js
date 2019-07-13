/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('bank_receipts', {
		id: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			primaryKey: true
		},
		user_id: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		price: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: '0'
		},
		mode: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: ''
		},
		approved: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		},
		receipt_file: {
			type: DataTypes.STRING(250),
			allowNull: false,
			defaultValue: ''
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		approved_at: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			defaultValue: '0'
		}
	}, {
		timestamps: false,
		tableName: 'bank_receipts'
	});
};
