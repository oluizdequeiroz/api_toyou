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
			type: DataTypes.STRING(50),
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
			type: DataTypes.STRING(50),
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
		friend_privacy: {
			type: DataTypes.ENUM('0','1','2','3'),
			allowNull: false,
			defaultValue: '0'
		},
		post_privacy: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: 'ifollow'
		},
		message_privacy: {
			type: DataTypes.ENUM('1','0','2'),
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
		e_sentme_msg: {
			type: DataTypes.ENUM('0','1'),
			allowNull: false,
			defaultValue: '0'
		},
		e_last_notif: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: '0'
		},
		notification_settings: {
			type: DataTypes.STRING(400),
			allowNull: false,
			defaultValue: 'a:11:{s:7:&quot;e_liked&quot;;i:1;s:8:&quot;e_shared&quot;;i:1;s:10:&quot;e_wondered&quot;;i:0;s:11:&quot;e_commented&quot;;i:1;s:10:&quot;e_followed&quot;;i:1;s:10:&quot;e_accepted&quot;;i:1;s:11:&quot;e_mentioned&quot;;i:1;s:14:&quot;e_joined_group&quot;;i:1;s:12:&quot;e_liked_page&quot;;i:1;s:9:&quot;e_visited&quot;;i:1;s:19:&quot;e_profile_wall_post&quot;;i:1;}'
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
		},
		social_login: {
			type: DataTypes.ENUM('0','1'),
			allowNull: false,
			defaultValue: '0'
		},
		android_m_device_id: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: ''
		},
		ios_m_device_id: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: ''
		},
		android_n_device_id: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: ''
		},
		ios_n_device_id: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: ''
		},
		web_device_id: {
			type: DataTypes.STRING(100),
			allowNull: false,
			defaultValue: ''
		},
		wallet: {
			type: DataTypes.STRING(20),
			allowNull: false,
			defaultValue: '0.00'
		},
		lat: {
			type: DataTypes.STRING(200),
			allowNull: false,
			defaultValue: '0'
		},
		lng: {
			type: DataTypes.STRING(200),
			allowNull: false,
			defaultValue: '0'
		},
		last_location_update: {
			type: DataTypes.STRING(30),
			allowNull: false,
			defaultValue: '0'
		},
		share_my_location: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '1'
		},
		last_data_update: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		details: {
			type: DataTypes.STRING(300),
			allowNull: false,
			defaultValue: 'a:6:{s:10:\"post_count\";i:0;s:11:\"album_count\";i:0;s:15:\"following_count\";i:0;s:15:\"followers_count\";i:0;s:12:\"groups_count\";i:0;s:11:\"likes_count\";i:0;}'
		},
		sidebar_data: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		last_avatar_mod: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		last_cover_mod: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		points: {
			type: DataTypes.FLOAT,
			allowNull: false,
			defaultValue: '0'
		},
		daily_points: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		point_day_expire: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: ''
		},
		last_follow_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		share_my_data: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '1'
		},
		last_login_data: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		two_factor: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		new_email: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: ''
		},
		two_factor_verified: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		new_phone: {
			type: DataTypes.STRING(32),
			allowNull: false,
			defaultValue: ''
		},
		info_file: {
			type: DataTypes.STRING(300),
			allowNull: false,
			defaultValue: ''
		}
	}, {
		timestamps: false,
		tableName: 'wo_users'
	});
};
