<template>
	<view class="content">
		<checkbox-group class="gouwuche" v-for="(item, index) in shopCar" :key='index'>
			<checkbox :checked="item.checked" @click="select(item)" >
			</checkbox>
			<block style="display:none;">
				<view class='gouwuche-body'>
					<view class='gouwuche-img'>
						<image :src='item.url'></image>
					</view>
					<view class='gouwuche-text'>
						<view class='gouwuche-text-CommodityName'>{{item.CommodityName}}</view>
						<view class='gouwuche-text-price'>价格 ￥{{item.price || item.Price || item.PresentPrice}}</view>
					</view>
					<view class='heji'>
						<uni-section title="基本用法" type="line" padding>
							<uni-number-box v-model="item.amount" @change="bindChange" />
						</uni-section>
					</view>
				</view>
			</block>
		</checkbox-group>


		<!-- 无商品 -->
		<view v-if='shopCar.length===0'>
			<view class='wushangpin'>暂无商品</view>
			<view class='xuangou' bindtap='xuangou'>去选购</view>
		</view>

		<!-- 结算-->
		<view class='jiesuan'>
			<checkbox-group>
				<checkbox class='jiesuan-quanxuan' @click="selectAll" :checked="allSelect">全选</checkbox>
				<view class='jiesuan-istop'>
					<text class='jiesuan-quanxuan'>合计:</text>
					<text class='jiesuan-quanxuan-text'>￥ {{shoppingPrice}}</text>
					<view class='jiesuans' @click="settlement">结算</view>
				</view>
			</checkbox-group>
		</view>
		<!-- footer -->
		<!-- <view class='footer'></view> -->

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
				shopCar: state => state.cart.shopCar,
				shoppingPrice : state => state.cart.shoppingPrice,
				allSelect : state => state.cart.allSelect,
			})
		},
		onLoad() {
			this.getshopCar();

		},
		methods: {
			...mapMutations(['getshopCar','bindChange','select','selectAll','settlement']),
		}
	}
</script>

<style>
	.content {
		width: 100%;
		height: auto;
	}

	.gouwuche {
		width: 100%;
		height: 180rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		box-sizing: border-box;
		padding: 0px 15px;
		background-color: rgb(247, 247, 247);
		margin-bottom: 10rpx;
		position: relative;
	}

	.gouwuche-body {
		display: flex;
		flex-direction: row;
		margin-left: 20rpx;
	}

	.gouwuche-img {
		width: 120rpx;
		height: 115rpx;
	}

	.gouwuche-img image {
		width: 100%;
		height: 100%;
	}

	.gouwuche-text {
		margin-left: 25rpx;
		box-sizing: border-box;
		padding: 10px 0px;
		margin-top: -10px;

	}

	.heji {
		height: auto;
		display: flex;
		flex-direction: row;
		position: absolute;
		width: 150rpx;
		top: 55px;
		left: 260px;
	}

	.heji>uni-section {
		width: 195rpx;
		height: 40rpx;
		text-align: center;
	}

	.heji>uni-section>uni-number-box {
		width: 100%;
		height: 100%;
		display: block;
	}

	.uni-numbox__value {
		background-color: #B3D4DB !important;
	}

	.uni-numbox-btns {
		background-color: #FFFFFF !important;
	}

	.gouwuche-text-CommodityName {
		margin: 10rpx 0;
		font-size: 28rpx;
	}

	.gouwuche-text-price {
		font-size: 25rpx;
		color: #ff7100;
	}

	.jiesuan-quanxuan-text {
		font-size: 28rpx;
		color: #ff7100;
	}

	.jiesuan {
		width: 100%;
		height: 120rpx;
		box-sizing: border-box;
		padding: 15px 10px;
		position: fixed;
		bottom: 0;
		background-color: white;
	}

	.jiesuan-istop {
		margin-left: 130px;
		display: inline-block;
	}

	.jiesuans {
		display: inline-block;
		width: 140rpx;
		height: 80%;
		text-align: center;
		line-height: 102rpx;
		position: absolute;
		right: 15rpx;
		top: 3px;
		background-color: #ff7100;
		color: white;
		font-size: 28rpx;
	}

	.jiesuan-quanxuan {
		font-size: 28rpx;
	}

	.cur {
		transition: all 0.5s;
		opacity: 0;
		display: none;
	}

	.wushangpin {
		text-align: center;
		padding-top: 200rpx;
		margin-bottom: 50rpx;
	}

	.xuangou {
		width: 70%;
		height: 100rpx;
		line-height: 100rpx;
		font-weight: 200;
		text-align: center;
		position: relative;
		left: 60px;
		border-radius: 5px;
		background-color: lightpink;
		color: white;
	}

	.footer {
		width: 100%;
		height: 120rpx;
	}
</style>
