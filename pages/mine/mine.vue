<template>
	<view class="content">
		<view class='minpian'>
			<view class='minpian-img'>
				<image src='https://img.zhichiwangluo.com/zcimgdir/thumb/t_15343042575b73a00163f9a.png'></image>
			</view>
			<image class="user-img" :src="userInfo.avatarUrl"></image>
			<text class='minpian-bianhao'>{{userInfo.nickName}}</text>
		</view>
		<!-- 选项  -->
		<view class='xuaniang'>
			<!-- 待付款 -->
			<view class='all'>
				<view class='all-img'>
					<image src='../../static/img/daifukaun.png'></image>
				</view>
				<text>待付款</text>
			</view>
			<!-- 待发货 -->
			<view class='all' @click="getdelivery">
				<view class='all-img'>
					<image src='../../static/img/daifahuo.png'></image>
				</view>
				<text>待发货</text>
			</view>
			<!-- 待收货 -->
			<view class='all'>
				<view class='all-img'>
					<image src='../../static/img/daishouhuo.png'></image>
				</view>
				<text>待收货</text>
			</view>
			<!-- 待评价 -->
			<view class='all'>
				<view class='all-img'>
					<image src='../../static/img/daipinjia.png'></image>
				</view>
				<text>待评价</text>
			</view>
			<!-- 优惠券 -->
			<view class='all'>
				<view class='all-img'>
					<image src='../../static/img/youhuijuan.png'></image>
				</view>
				<text>优惠券</text>
		 </view>
			<!-- 收货地址 -->
			<view class='all'>
				<view class='all-img'>
		 		<image src='../../static/img/shouhuodizhi.png'></image>
				</view>
				<text>收货地址</text>
			</view>
			<!-- 会员卡 -->
			<view class='all'>
				<view class='all-img'>
					<image src='../../static/img/vip.png'></image>
				</view>
				<text>会员卡</text>
			</view>
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
				userInfo: state => state.user.userInfo,
				
			}),

		},
		onLoad() {
			this.getWaitSendOder()
		},
		methods: {
			...mapMutations(['getdelivery','getWaitSendOder'])
		}
	}
</script>

<style>
	.content {
		width: 100%;
		height: auto;
	}

	.minpian {
		width: 100%;
		position: relative;
	}

	.minpian-img {
		width: 100%;
		height: 235rpx;
	}

	.minpian-img image {
		width: 100%;
		height: 100%;
	}

	.user-img {
		width: 160rpx;
		height: 160rpx;
		border: 1px solid red;
		border-radius: 50%;
		position: absolute;
		top: 40rpx;
		left: 100rpx;
	}

	.minpian-bianhao {
		position: absolute;
		top: 85rpx;
		left: 300rpx;
		font-weight: 200;
	}

	.xuaniang {
		width: 100%;
	}

	.xuaniang>view {
		width: 100%;
		height: 130rpx;
		font-weight: 200;
		font-size: 30rpx;
		line-height: 130rpx;
		padding: 0px 45px;
		background-color: rgb(248, 248, 248);
	}

	.all {
		display: flex;
		flex-direction: row;
		align-items: baseline;
		position: relative;
	}

	.all-img {
		width: 30px;
		height: 30px;
		position: absolute;
		top: 20rpx;
		left: 25rpx;
	}

	.all-img image {
		width: 100%;
		height: 100%;
	}
</style>
