import {
	myRequest
} from '../../util/api.js'

export default {
	state: {
		One: [],
		two: [],
		three: [],
		four: [],
		five: [],
		classificationData : []
	},
	mutations: {
		//获取分类列表
		async getclassification(state) {
			const res = await myRequest({
				url: '/classification'
			})
			const [One, two, three, four, five] = res.data
			state.One = One
			state.two = two
			state.three = three
			state.four = four
			state.five = five
		},
		//跳转详情页
		async gotclassification(state,data) {
			const res = await myRequest({
				url : '/classificationData',
				data : {name : data.subName}
			})
			state.classificationData = res.data
			uni.navigateTo({
				url :'/pages/preferential/preferential'
			});
			uni.setNavigationBarTitle({
				title: data.subName
			})
		},
		//销毁页面数据
		destroyPreferential(state) {
			state.classificationData = [];
		}
	}
}
