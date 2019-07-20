/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wo_langs', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		lang_key: {
			type: DataTypes.STRING(160),
			allowNull: true
		},
		english: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		arabic: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		dutch: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		french: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		german: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		italian: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		portuguese: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		russian: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		spanish: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		turkish: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		timestamps: false,
		tableName: 'wo_langs'
	});
};
