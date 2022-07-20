<template>
	<view class="content">
		<view class='xiangqing-img'>
		    <image :src='detailsShop.url'></image>
		  </view>
		  <view class='xiangqing-name'>
		    <text>{{ detailsShop.CommodityName}}</text>
		  </view>
		  <view class='xiangqing-price'>
		    <text> ￥ {{ detailsShop.price || detailsShop.PresentPrice || detailsShop.Price}}</text>
		  </view>
		  <view class='xiangqing-msg'>
		    <text>库存：100 件 </text>
		    <text v-if="detailsShop.price || detailsShop.PresentPrice || detailsShop.Price > 200">  运费：包邮</text>
		    <text v-else-if="detailsShop.price || detailsShop.PresentPrice || detailsShop.Price < 200">  运费：￥ 10</text>
		  </view>
		  <button class='jiaru' hover-class="addcart" @click="addCart(detailsShop)">加入购物车</button>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations,
		mapActions
	} from 'vuex';
	export default {
		data() {
			return {
	
			}
		},
		components: {
	
		},
		computed: {
			...mapState({
				// detailsShop: state => state.home.detailsShop
				detailsShop: (state) => {
					// state.datails.detailsShop !== {} ? state.datails.detailsShop : state.home.detailsShop
					if(JSON.stringify(state.datails.detailsShop) !== '{}') {
						return state.datails.detailsShop;
					}else {
						return state.home.detailsShop
					}
				}
			})
		},
		onLoad() {

		},
		onShow() {
		},
		methods: {
			...mapMutations(['addCart','destroyData']),
		},
		onUnload() {
			this.destroyData()
		}
	}
</script>

<style>
.content {
	width: 100%;
	height: auto;
}
.xiangqing-img{
  width: 100%;
  height: 730rpx;
  box-sizing: border-box;
  padding:30rpx 30rpx;
  background-color: #FFFAFA;
}
.xiangqing-img image{
  width: 100%;
  height: 100%;
  border-radius: 10rpx;
}
.xiangqing-name{
  margin-top: 20rpx;
  width: 100%;
  padding:5px 10px;
  font-weight: 200;
}
.xiangqing-price{
  font-weight: 200;
  font-size: 28rpx;
  color: #f60;
  padding:5px 10px;
}
.xiangqing-msg{
  margin-top: 20rpx;
  width: 100%;
  padding:5px 10px;
  font-size: 30rpx;
  font-weight: 200;
}
.jiaru{
    width: 70%;
  height: 100rpx;
  line-height: 100rpx;
  font-weight: 200;
  text-align: center;
	margin-top: 200rpx;
  border-radius: 5px;
  background-color: #ff0000;
  color: white;
}
.addcart {

	background-color: lightpink;

}
</style>
