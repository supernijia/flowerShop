<template>
	<view class="container">
		<view v-show="usershow">
			<image class="avatar" :src='userInfo.avatarUrl'></image>
		</view>
		<view v-show="defshow">
			<image class="avatar" :src='defalut'></image>
		</view>

		<text class="motto">Hello, {{userInfo.nickName ? userInfo.nickName : '临时玩家'}}</text>
		<view class="journey-container" @click="login">
			<text class="journey">开启小程序之旅</text>
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
				defalut: '../../static/img/3.1.png',
			}
		},
		computed: {
			...mapState({
				userInfo: state => state.user.userInfo,
				defshow : state => state.user.defshow,
				usershow : state => state.user.usershow
			}),

		},
		onLoad() {
			this.getuserinfo()
		},
		methods: {
			...mapMutations(['login','getuserinfo'])
		}
	}
</script>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #b3d4db;
	}

	.avatar {
		width: 200rpx;
		height: 200rpx;
		margin-top: 160rpx;
		border-radius: 50%;
	}

	.motto {
		margin-top: 100rpx;
		font-size: 32rpx;
		font-weight: bold;
	}

	.journey-container {
		margin-top: 200rpx;
		border: 1px solid #405f80;
		width: 200rpx;
		height: 80rpx;
		border-radius: 5px;
		text-align: center;
	}

	.journey {
		font-size: 22rpx;
		font-weight: bold;
		line-height: 80rpx;
		color: #405f80;
	}

	page {
		height: 100%;
		background-color: #b3d4db;
	}
</style>
