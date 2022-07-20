//所有单品详情页
import {
	myRequest
} from '../../util/api.js'

export default {
	state: {
		detailsShop : {},
	},
	mutations: {
		//跳转详情页
		gotdetails(state,item) {
			state.detailsShop = item;
			uni.navigateTo({
				url:'/pages/details/details'
			})
			
		},
		destroyData(state) {
			console.log('执行销毁')
			state.detailsShop = {}
		}
	}
}

