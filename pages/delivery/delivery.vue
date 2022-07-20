<template>
	<view class="content">
		<block v-for="(item,index) in purchaseShopArr" :key='index'>
			<view class="shopItem">
				<view class="orderstate">
					<view class="ordertips">订单状态:</view>
					<view>您的订单已经进入仓库，等待打包装车</view>
					<view>请耐心等待！</view>
					<view>{{purchaseArr[item.index][0].time}}</view>
				</view>
				<view class="ordershop">
					<view class="item-img">
						<image :src="item.url"></image>
					</view>
					<view class="orderinfo">
						<view>商品名称：{{item.CommodityName}}</view>
						<view>商品数量：{{item.amount}}件</view>
						<view>商品单价：￥{{item.price}}</view>
					</view>
				</view>
			</view>
		</block>
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
				purchaseShopArr: state => state.cart.purchaseShopArr,
				purchaseArr : state => state.cart.purchaseArr
			}),

		},
		onLoad() {
			
		},
		methods: {
			...mapMutations([])
		}
	}
</script>

<style>
	page {
		background-color: #e5e5e5;
	}
	.content {
		width: 100%;
		height: auto;
	}
	.shopItem {
		width: 95%;
		margin: 0 auto;
		border-radius: 20rpx;
		background-color: #fff;
		margin-bottom: 20rpx;
		margin-top: 20rpx;
	}
	.orderstate {
		font-size: 24rpx;
		padding: 20rpx;
	}
	.orderstate .ordertips {
		font-size: 28rpx !important;
		font-weight: 800;
	}
	.ordershop {
		width: 100%;
		padding: 20rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.ordershop .item-img {
		width: 160rpx;
		height: 160rpx;
	}
	.ordershop .item-img image {
		width: 100%;
		height: 100%;
		display: block;
		border-radius: 20rpx;
	}
	.orderinfo {
		padding: 20rpx;
		font-size: 24rpx;
	}
</style>
