<template>
	<view class="content">
		<view class="preferential">
			<image :src="homePreferential.url" class="homePreferential"></image>
			<view class="preferential-item">
				<block v-for="(item,index) in preferential" :key='index'>
					<image class="preferential-image" :src="item.url"></image>
				</block>
			</view>
		</view>
		<view class='Coupon'>
		    <block v-for="(item, index) in couponDiscount" :key='index'>
				<view class='Coupon-img'>
				  <text>￥{{item.price}}</text>
				  <text>{{item.title}}</text>
				  <!-- <text data-start='20' data-max='188'>立即领取</text> -->
				  <text @click="gotdiscount(item)">立即领取</text>
				  <image :src='item.url'></image>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';
	export default {
		data() {
			return {

			}
		},
		computed: {
			...mapState({
				homePreferential: state => state.home.homePreferential,
				preferential: state => state.home.preferential.splice(1),
				couponDiscount : state => state.home.couponDiscount
			})
		},
		onLoad() {
			this.gethomePreferential();
			this.getcouponDiscount()
		},
		onShow() {

		},
		methods: {
			...mapMutations(['gethomePreferential','getcouponDiscount','gotdiscount'])
		}
	}
</script>

<style>
	.content {
		width: 90%;
		margin: 0 auto;
		margin-top: 20rpx;
	}

	.preferential {
		width: 100%;
		height: auto;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.homePreferential {
		width: 67%;
		height: 420rpx;
		border-radius: 5px;
	}

	.preferential-item {
		width: 30%;
		height: 420rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.preferential-item image {
		width: 100%;
		height: 50%;
		border-radius: 5px;
	}
	.preferential-item image:nth-child(1) {
		margin-bottom: 10rpx;
	}
	.Coupon{
	  width: 100%;
	  margin-top: 20rpx;
	  display: flex;
	  flex-direction: row;
	  justify-content:space-around;
	  margin-bottom: 30rpx;
	}
	.Coupon-img{
	  width: 200rpx;
	  height: 240rpx;
	  position: relative;
	}
	.Coupon-img image{
	  width: 100%;
	  height: 100%;
	}
	.Coupon-img > text{
	  position: absolute;
	}
	.Coupon-img > text:nth-child(1){
	  color: white;
	  font-size: 28rpx;
	  font-weight: 600;
	  left: 60rpx;
	  top: 50rpx;
	}
	.Coupon-img > text:nth-child(2){
	  color: white;
	  font-size: 28rpx;
	  top: 120rpx;
	  left: 30rpx;
	}
	.Coupon-img > text:nth-child(3){
	  font-size: 24rpx;
	  bottom: 28rpx;
	  left: 36rpx;
	  color: rgb(109, 109, 109);
	}
</style>
