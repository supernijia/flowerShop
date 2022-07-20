import {
	myRequest
} from '../../util/api.js'

export default {
	state: {
		userInfo: {},
		defshow: true,
		usershow: false,
		userAddinfoArr : [],
		newUserinfo : {
			name : '',
			tel : '',
			address : '',
		}
	},
	mutations: {
		// 登录部分
		login(state) {
			console.log('执行')
			// 获取code 小程序专有，用户登录凭证。
			uni.getUserProfile({
				desc: "获取用户基本资料",
				success: (res) => {
					state.userInfo = res.userInfo;
					console.log(state.userInfo)
					state.defshow = false;
					state.usershow = true;
					uni.switchTab({
						url: '../index/index',
					})
				},
				// 用户取消登录后的提示
				fail: (res) => {
					uni.showModal({
						title: "授权用户信息失败！",
						// 是否显示取消按钮，默认为 true
						showCancel: false
					})
				}
			})
			//获取成功基本资料后开启登录，基本资料首先要授权
			uni.login({
				provider: 'weixin',
				success: (res) => {
					console.log(res);
					if (res.errMsg == "login:ok") {
						let code = res.code;
					}
				}
			})
		},
		//获取用户地址信息
		async getuserinfo(state) {
			const res = await myRequest({
				url : '/userinfo'
			})
			// state.userAddinfoArr = res.data
			state.userAddinfoArr = [...res.data]
		},
		//跳转新增地址
		addNewAddr(state) {
			uni.navigateTo({
				url:'/pages/newAddress/newAddress'
			})
		},
		//提交新地址
		submitaddress(state) {
			state.userAddinfoArr.push(state.newUserinfo)
			uni.navigateBack({
				delta : 1
			})
		},
		//跳转待发货
		getdelivery(state){
			uni.navigateTo({
				url:'/pages/delivery/delivery'
			})
		}

	}
}
