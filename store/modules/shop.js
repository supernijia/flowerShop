import {
	myRequest
} from '../../util/api.js'

export default {
	state: {
		shopImg : [],
		shopInfo : {},
		shopAdd : {},
		shoptel : {}
	},
	mutations: {
		async getshopInfo(state) {
			const res = await myRequest({
				url : '/shopInfo'
			})
			const [shopInfo, shopimg, shopadd, shoptel] = res.data;
			state.shopInfo = shopInfo;
			state.shopImg = shopimg;
			state.shopAdd = shopadd;
			state.shoptel = shoptel;
		},
	}
}
