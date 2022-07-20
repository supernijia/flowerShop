// 购物车和订单在一起
import {
	myRequest
} from '../../util/api.js'

const getNowTime = getTime()


export default {
	state: {
		shopCar: [],
		shoppingPrice: 0,
		allSelect: false, //是否全选
		orderArr: [],
		//选择的地址
		choseAdd: {},
		//已购买订单
		purchase: [],
		//待发货数组
		purchaseArr: [],
		purchaseShopArr: []
		// //使用中的优惠券下标
		// discountIndex : '',
	},
	actions: {

	},
	mutations: {
		//请求购物车数据
		async getshopCar(state) {
			const res = await myRequest({
				url: '/shopCar'
			})
			res.data.map((item) => {
				state.shopCar.push(item);
			})

		},
		//加入购物车
		addCart(state, item) {
			const record = state.shopCar.find(data => data.CommodityName === item.CommodityName);
			if (record) {
				record.amount++;
			} else {
				state.shopCar.push(Object.assign(item, {
					amount: 1
				}));
				uni.showToast({
					title: '已加入购物车',
				})
			}
		},
		//删除物品
		bindChange(state) {
			setTimeout(() => {
				for (let index = 0; index < state.shopCar.length; index++) {
					if (state.shopCar[index].amount === 0) {
						uni.showModal({
							title: '提示',
							content: '是否删除本商品',
							success(res) {
								if (res.confirm) {
									state.shopCar.splice(index, 1)
								} else if (res.cancel) {
									state.shopCar[index].amount = 1;
								}
							}
						})
					}
				};
				this.commit('compute');
			}, 100)
		},
		//选中
		select(state, item) {
			//每次点击取反
			item.checked = !item.checked
			if (item.checked) {
				state.orderArr.push(item)
				this.commit('compute')
			} else {
				state.orderArr.map((data, index) => {
					data.CommodityName === item.CommodityName ? state.orderArr.splice(index, 1) : '';
					this.commit('compute')
				});

			}
			//声明一个新变量来判断全选
			let flage = true;
			//循环判断数组中每个选中状态
			state.shopCar.map((item) => {
				//对当前取反
				if (!item.checked) {
					//全选关闭
					flage = false
					return;
				}
			})
			//判断全选状态
			if (flage) {
				state.allSelect = true
			} else {
				state.allSelect = false
			}
		},
		//全选
		selectAll(state) {
			//对全选状态取反
			state.allSelect = !state.allSelect
			//循环将数组中每项商品
			state.shopCar.map((item) => {
				//如果为全选状态
				if (state.allSelect) {
					//数组每一项都为选中
					item.checked = true;
					state.orderArr.push(item);
					return;
				} else {
					//否则取消选中
					item.checked = false;
					state.orderArr.map((data, index) => {
						data.CommodityName === item.CommodityName ? state.orderArr.splice(index, 1) :
							'';
					});
				}
			})
			this.commit('compute')
		},
		//结算商品
		settlement(state) {
			if (state.orderArr.length != 0) {
				uni.showModal({
					title: '提示',
					content: '去结算？',
					success(res) {
						if (res.confirm) {
							uni.navigateTo({
								url: '/pages/settlement/settlement'
							})
						}
					}
				})
			} else {
				uni.showModal({
					title: '提示',
					content: '您未选中商品！',
				})
			}
		},
		//计算金额
		compute(state) {
			let sum = 0;
			state.orderArr.forEach((item) => {
				sum += item.price * item.amount;
			})
			state.shoppingPrice = sum;
		},
		//订单付款
		payment(state, discountIndex) {
			state.purchase.push(state.orderArr);
			console.log(state.purchase)
			if (JSON.stringify(state.choseAdd) === '{}') {
				uni.showToast({
					title: '请选择收货地址',
					icon: 'error'
				})
				return;
			}
			//加入订单地址
			state.purchase.push(Object.assign(state.choseAdd, {
				time: getNowTime
			}));
			//待发货数组
			state.purchaseArr.push(state.purchase);
			//加入使用优惠券信息
			state.purchase.push(this.state.home.discount[discountIndex])
			this.commit('shopCarUpData')
			uni.showModal({
				title: '提示',
				content: '付款成功！',
				success(res) {
					if (res.confirm) {
						uni.switchTab({
							url: '/pages/mine/mine'
						})
					}
				}
			});
			this.commit('destroydiscount',discountIndex)
			this.commit('computeorder')
			state.orderArr = [];
			state.shoppingPrice = 0;
			state.allSelect = false;
		},
		//更新购物车数据
		shopCarUpData(state) {
			for(let i = 0; i < state.orderArr.length; i++) {
				for(let k = 0; k < state.shopCar.length; k++) {
					if(state.orderArr[i].CommodityName == state.shopCar[k].CommodityName) {
						state.shopCar.splice(k,1)
					}
				}
			}
		},
		//销毁已使用的优惠券
		destroydiscount(state, index) {
			if(this.state.home.discount[index].title !== '不使用优惠券') {
				this.state.home.discount.splice(index, 1)
			}
		},
		//选择地址
		choseAddr(state) {
			uni.navigateTo({
				url: '/pages/userAddress/userAddress'
			})
		},
		//选择地址页返回付款页
		getbackSettlement(state, item) {
			uni.navigateBack({
				delta: 1
			})
			state.choseAdd = item
		},
		//获取待发货订单信息
		async getWaitSendOder(state) {
			const res = await myRequest({
				url: '/waitSendOder'
			})
			state.purchaseArr.push(res.data)
			this.commit('computeorder')
			// state.purchaseShopArr = [];
			// let data = {}
			// for (let i = 0; i < state.purchaseArr.length; i++) {
			// 	for (let j = 0; j < state.purchaseArr[i].length; j++) {
			// 		if (state.purchaseArr[i][j].constructor === Array) {
			// 			for (let k = 0; k < state.purchaseArr[i][j].length; k++) {
			// 				console.log(state.purchaseArr[i][j][k]);
			// 				data = Object.assign(state.purchaseArr[i][j][k], {
			// 					index: i
			// 				})
			// 				state.purchaseShopArr.push(data)
			// 			}
			// 			console.log(state.purchaseArr)
			// 		}
			// 	}
			// }

		},
		computeorder(state) {
			state.purchaseShopArr = [];
			let data = {}
			for (let i = 0; i < state.purchaseArr.length; i++) {
				for (let j = 0; j < state.purchaseArr[i].length; j++) {
					if (state.purchaseArr[i][j].constructor === Array) {
						for (let k = 0; k < state.purchaseArr[i][j].length; k++) {
							console.log(state.purchaseArr[i][j][k]);
							data = Object.assign(state.purchaseArr[i][j][k], {
								index: i
							})
							state.purchaseShopArr.push(data)
						}
						console.log(state.purchaseArr)
					}
				}
			}
		}

	}
}


//获取当前系统时间
function getTime() {
	let date = new Date();
	let year = date.getFullYear();
	let month = date.getMonth() + 1;
	let day = date.getDate();
	let hour = date.getHours();
	let minute = date.getMinutes();
	let second = date.getSeconds();
	return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
}
