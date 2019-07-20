/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wo_users', {
		user_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		username: {
			type: DataTypes.STRING(32),
			allowNull: false,
			defaultValue: '',
			unique: true
		},
		email: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: '',
			unique: true
		},
		password: {
			type: DataTypes.STRING(32),
			allowNull: false,
			defaultValue: ''
		},
		first_name: {
			type: DataTypes.STRING(60),
			allowNull: false,
			defaultValue: ''
		},
		last_name: {
			type: DataTypes.STRING(32),
			allowNull: false,
			defaultValue: ''
		},
		avatar: {
			type: DataTypes.STRING(100),
			allowNull: false,
			defaultValue: 'upload/photos/d-avatar.jpg'
		},
		cover: {
			type: DataTypes.STRING(100),
			allowNull: false,
			defaultValue: 'upload/photos/d-cover.jpg'
		},
		background_image: {
			type: DataTypes.STRING(100),
			allowNull: false,
			defaultValue: ''
		},
		background_image_status: {
			type: DataTypes.ENUM('0','1'),
			allowNull: false,
			defaultValue: '0'
		},
		relationship_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		address: {
			type: DataTypes.STRING(100),
			allowNull: false,
			defaultValue: ''
		},
		working: {
			type: DataTypes.STRING(32),
			allowNull: false,
			defaultValue: ''
		},
		working_link: {
			type: DataTypes.STRING(32),
			allowNull: false,
			defaultValue: ''
		},
		about: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		school: {
			type: DataTypes.STRING(32),
			allowNull: false,
			defaultValue: ''
		},
		gender: {
			type: DataTypes.STRING(32),
			allowNull: false,
			defaultValue: 'male'
		},
		birthday: {
			type: DataTypes.DATEONLY,
			allowNull: false,
			defaultValue: '0000-00-00'
		},
		country_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		website: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: ''
		},
		facebook: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: ''
		},
		google: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: ''
		},
		twitter: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: ''
		},
		linkedin: {
			type: DataTypes.STRING(32),
			allowNull: false,
			defaultValue: ''
		},
		youtube: {
			type: DataTypes.STRING(100),
			allowNull: false,
			defaultValue: ''
		},
		vk: {
			type: DataTypes.STRING(32),
			allowNull: false,
			defaultValue: ''
		},
		instagram: {
			type: DataTypes.STRING(32),
			allowNull: false,
			defaultValue: ''
		},
		language: {
			type: DataTypes.STRING(31),
			allowNull: false,
			defaultValue: 'english'
		},
		email_code: {
			type: DataTypes.STRING(32),
			allowNull: false,
			defaultValue: ''
		},
		src: {
			type: DataTypes.STRING(32),
			allowNull: false,
			defaultValue: 'Undefined'
		},
		ip_address: {
			type: DataTypes.STRING(32),
			allowNull: true,
			defaultValue: ''
		},
		follow_privacy: {
			type: DataTypes.ENUM('1','0'),
			allowNull: false,
			defaultValue: '0'
		},
		post_privacy: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: 'ifollow'
		},
		message_privacy: {
			type: DataTypes.ENUM('1','0'),
			allowNull: false,
			defaultValue: '0'
		},
		confirm_followers: {
			type: DataTypes.ENUM('1','0'),
			allowNull: false,
			defaultValue: '0'
		},
		show_activities_privacy: {
			type: DataTypes.ENUM('0','1'),
			allowNull: false,
			defaultValue: '1'
		},
		birth_privacy: {
			type: DataTypes.ENUM('0','1','2'),
			allowNull: false,
			defaultValue: '0'
		},
		visit_privacy: {
			type: DataTypes.ENUM('0','1'),
			allowNull: false,
			defaultValue: '0'
		},
		verified: {
			type: DataTypes.ENUM('1','0'),
			allowNull: false,
			defaultValue: '0'
		},
		lastseen: {
			type: DataTypes.INTEGER(32),
			allowNull: false,
			defaultValue: '0'
		},
		showlastseen: {
			type: DataTypes.ENUM('1','0'),
			allowNull: false,
			defaultValue: '1'
		},
		emailNotification: {
			type: DataTypes.ENUM('1','0'),
			allowNull: false,
			defaultValue: '1'
		},
		e_liked: {
			type: DataTypes.ENUM('0','1'),
			allowNull: false,
			defaultValue: '1'
		},
		e_wondered: {
			type: DataTypes.ENUM('0','1'),
			allowNull: false,
			defaultValue: '1'
		},
		e_shared: {
			type: DataTypes.ENUM('0','1'),
			allowNull: false,
			defaultValue: '1'
		},
		e_followed: {
			type: DataTypes.ENUM('0','1'),
			allowNull: false,
			defaultValue: '1'
		},
		e_commented: {
			type: DataTypes.ENUM('0','1'),
			allowNull: false,
			defaultValue: '1'
		},
		e_visited: {
			type: DataTypes.ENUM('0','1'),
			allowNull: false,
			defaultValue: '1'
		},
		e_liked_page: {
			type: DataTypes.ENUM('0','1'),
			allowNull: false,
			defaultValue: '1'
		},
		e_mentioned: {
			type: DataTypes.ENUM('0','1'),
			allowNull: false,
			defaultValue: '1'
		},
		e_joined_group: {
			type: DataTypes.ENUM('0','1'),
			allowNull: false,
			defaultValue: '1'
		},
		e_accepted: {
			type: DataTypes.ENUM('0','1'),
			allowNull: false,
			defaultValue: '1'
		},
		e_profile_wall_post: {
			type: DataTypes.ENUM('0','1'),
			allowNull: false,
			defaultValue: '1'
		},
		status: {
			type: DataTypes.ENUM('1','0'),
			allowNull: false,
			defaultValue: '0'
		},
		active: {
			type: DataTypes.ENUM('0','1','2'),
			allowNull: false,
			defaultValue: '0'
		},
		admin: {
			type: DataTypes.ENUM('0','1','2'),
			allowNull: false,
			defaultValue: '0'
		},
		type: {
			type: DataTypes.STRING(11),
			allowNull: false,
			defaultValue: 'user'
		},
		registered: {
			type: DataTypes.STRING(32),
			allowNull: false,
			defaultValue: '0/0000'
		},
		start_up: {
			type: DataTypes.ENUM('0','1'),
			allowNull: false,
			defaultValue: '0'
		},
		start_up_info: {
			type: DataTypes.ENUM('0','1'),
			allowNull: false,
			defaultValue: '0'
		},
		startup_follow: {
			type: DataTypes.ENUM('0','1'),
			allowNull: false,
			defaultValue: '0'
		},
		startup_image: {
			type: DataTypes.ENUM('0','1'),
			allowNull: false,
			defaultValue: '0'
		},
		last_email_sent: {
			type: DataTypes.INTEGER(32),
			allowNull: false,
			defaultValue: '0'
		},
		phone_number: {
			type: DataTypes.STRING(32),
			allowNull: false,
			defaultValue: ''
		},
		sms_code: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		is_pro: {
			type: DataTypes.ENUM('0','1'),
			allowNull: false,
			defaultValue: '0'
		},
		pro_time: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		pro_type: {
			type: DataTypes.ENUM('0','1','2','3','4'),
			allowNull: false,
			defaultValue: '0'
		},
		joined: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		css_file: {
			type: DataTypes.STRING(100),
			allowNull: false,
			defaultValue: ''
		},
		timezone: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: ''
		},
		referrer: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		balance: {
			type: DataTypes.STRING(100),
			allowNull: false,
			defaultValue: '0'
		},
		paypal_email: {
			type: DataTypes.STRING(100),
			allowNull: false,
			defaultValue: ''
		},
		notifications_sound: {
			type: DataTypes.ENUM('0','1'),
			allowNull: false,
			defaultValue: '0'
		},
		order_posts_by: {
			type: DataTypes.ENUM('0','1'),
			allowNull: false,
			defaultValue: '1'
		}
	}, {
		timestamps: false,
		tableName: 'wo_users'
	});
};
