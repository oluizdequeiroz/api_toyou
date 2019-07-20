/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wo_posts', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		post_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		user_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		recipient_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		postText: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		page_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		group_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		postLink: {
			type: DataTypes.STRING(1000),
			allowNull: false,
			defaultValue: ''
		},
		postLinkTitle: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		postLinkImage: {
			type: DataTypes.STRING(100),
			allowNull: false,
			defaultValue: ''
		},
		postLinkContent: {
			type: DataTypes.STRING(1000),
			allowNull: false,
			defaultValue: ''
		},
		postVimeo: {
			type: DataTypes.STRING(100),
			allowNull: false,
			defaultValue: ''
		},
		postDailymotion: {
			type: DataTypes.STRING(100),
			allowNull: false,
			defaultValue: ''
		},
		postFacebook: {
			type: DataTypes.STRING(100),
			allowNull: false,
			defaultValue: ''
		},
		postFile: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: ''
		},
		postFileName: {
			type: DataTypes.STRING(200),
			allowNull: false,
			defaultValue: ''
		},
		postYoutube: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: ''
		},
		postVine: {
			type: DataTypes.STRING(32),
			allowNull: false,
			defaultValue: ''
		},
		postSoundCloud: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: ''
		},
		postMap: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: ''
		},
		postShare: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		postPrivacy: {
			type: DataTypes.ENUM('0','1','2','3'),
			allowNull: false,
			defaultValue: '1'
		},
		postType: {
			type: DataTypes.STRING(30),
			allowNull: false,
			defaultValue: ''
		},
		postFeeling: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: ''
		},
		postListening: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: ''
		},
		postTraveling: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: ''
		},
		postWatching: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: ''
		},
		postPlaying: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: ''
		},
		time: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		registered: {
			type: DataTypes.STRING(32),
			allowNull: false,
			defaultValue: '0/0000'
		},
		album_name: {
			type: DataTypes.STRING(52),
			allowNull: false,
			defaultValue: ''
		},
		multi_image: {
			type: DataTypes.ENUM('0','1'),
			allowNull: false,
			defaultValue: '0'
		},
		boosted: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		product_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		poll_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		}
	}, {
		timestamps: false,
		tableName: 'wo_posts'
	});
};
