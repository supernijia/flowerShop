import {
	myRequest
} from '../../util/api.js'

export default {
	state: {
		rotation: [],
		HomeIcon: [],
		titleIcon: '',
		homePreferential: '',
		preferential : [],
		couponDiscount : [],
		specialOffer: [],
		groupBuying : [],
		newGoods : [],
		giftBox: [],
		extravagant : [],
		explicit : [],
		detailsShop : [],
		discount : [{title : '不使用优惠券',price : 0}],
	},
	mutations: {
		//请求轮播
		async getrotation(state) {
			const res = await myRequest({
				url: '/getRotation'
			})
			state.rotation = res.data
		},
		//请求轮播下面Icon
		async getHomeIcon(state) {
			const res = await myRequest({
				url: '/homeIcon'
			})
			state.HomeIcon = res.data
		},
		//请求每页标题Icon
		async getTitleIcon(state) {
			const res = await myRequest({
				url: '/titleIcon'
			})
			state.titleIcon = res.data
		},
		//请求七夕浪漫合集
		async gethomePreferential(state) {
			const res = await myRequest({
				url: '/homePreferential'
			})
			state.preferential = res.data
			state.homePreferential = res.data[0];
		},
		//请求优惠券
		async getcouponDiscount(state) {
			const res = await myRequest({
				url : '/couponDiscount'
			})
			state.couponDiscount = res.data
		},
		//请求特价秒杀系列
		async getspecialOffer(state) {
			const res = await myRequest({
				url : '/specialOffer'
			})
			state.specialOffer = res.data
		},
		//请求拼团专区
		async getgroupBuying(state) {
			const res = await myRequest({
				url : '/groupBuying'
			})
			state.groupBuying = res.data
		},
		//请求新品专区
		async getNewGoods(state) {
			const res = await myRequest({
				url : '/newGoods'
			})
			state.newGoods = res.data
		},
		//请求礼盒专区
		async getgiftBox(state) {
			const res = await myRequest({
				url : '/giftBox'
			})
			state.giftBox = res.data
		},
		//请求奢侈专区
		async getextravagant(state) {
			const res = await myRequest({
				url : '/extravagant'
			})
			state.extravagant = res.data
		},
		//轮播下四个图标跳转页
		async gotexplicit(state,item) {
			const data = {data : item.content}
			const res = await myRequest({
				url : '/gotexplicit',
				data : data,
			})
			state.explicit = res.data;
			uni.navigateTo({
				url:'/pages/preferential/preferential',
			})
			uni.setNavigationBarTitle({
				title : item.content
			})
		},
		//特价跳转
		gotseckill(state,item) {
			state.detailsShop = item;
			uni.navigateTo({
				url:'/pages/details/details'
			})
		},
		//获取优惠券
		gotdiscount(state,item) {
			const record = state.discount.find(data => data.title === item.title)
			if(record) {
				uni.showToast({
					title:'只能领取一次！',
					icon: 'error'
				})
				return;
			}
			state.discount.push(item)
			uni.showToast({
				title:'领取成功！'
			})
			// console.log(state.discount)
		}
	}
}
