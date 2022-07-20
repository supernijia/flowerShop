// 页面路径：store/index.js
import { createStore } from 'vuex'

import user from '@/store/modules/user.js'
import home from '@/store/modules/home.js'
import classification from '@/store/modules/classification.js'
import shop from '@/store/modules/shop.js'
import test from '@/store/modules/test.js'
import cart from '@/store/modules/cart.js'
import datails from '@/store/modules/details.js'



export default createStore({
	modules : {
		user,
		home,
		classification,
		shop,
		test,
		cart,
		datails
	}
});
