<template>
	<view class="content">
		<!-- 轮播 -->
		<carousel class='swiper-rotation'></carousel>
		<!-- 更多活动 -->
		<view class='notice'>
			<icon type="warn" size="15" class='warns' />
			<text class='warn-text' bindtap='rotate'>更多活动即将上线！敬请期待...</text>
		</view>
		<homeMain class="homeMian"></homeMain>
		<view class="screen">
			<view class="screen-title">
				<view class="screen-header">
					<image :src="titleIcon"></image>
					<text>浪漫七夕特惠</text>
					<image :src="titleIcon"></image>
				</view>
				<text class="screen-subtitle">PREFERENTIAL</text>
			</view>
			<preferential></preferential>
		</view>
		<view class="screen">
			<view class="screen-title">
				<view class="screen-header">
					<image :src="titleIcon"></image>
					<text>特价秒杀</text>
					<image :src="titleIcon"></image>
				</view>
				<text class="screen-subtitle">SECONDS KILL</text>
			</view>
			<specialPrice></specialPrice>
		</view>
		<view class="screen">
			<image src="https://img.zhichiwangluo.com/zcimgdir/album/file_5b6c167d4e8a8.png" class="Jizan"></image>
		</view>
		<view class="screen">
			<view class="screen-title">
				<view class="screen-header">
					<image :src="titleIcon"></image>
					<text>拼团区</text>
					<image :src="titleIcon"></image>
				</view>
				<text class="screen-subtitle">GROUP BOOKING</text>
			</view>
			<group :datas='groupBuying'></group>
		</view>
		<view class="screen">
			<view class="screen-title">
				<view class="screen-header">
					<image :src="titleIcon"></image>
					<text>新品专区</text>
					<image :src="titleIcon"></image>
				</view>
				<text class="screen-subtitle">NEW PRODUCT</text>
			</view>
			<group :datas='newGoods'></group>
		</view>
		<view class="screen">
			<view class="screen-title">
				<view class="screen-header">
					<image :src="titleIcon"></image>
					<text>礼盒专区</text>
					<image :src="titleIcon"></image>
				</view>
				<text class="screen-subtitle">GIFT BOX</text>
			</view>
			<group :datas='giftBox'></group>
		</view>
		<view class="screen">
			<view class="screen-title">
				<view class="screen-header">
					<image :src="titleIcon"></image>
					<text>奢宠专区</text>
					<image :src="titleIcon"></image>
				</view>
				<text class="screen-subtitle">Pamper luxury</text>
			</view>
			<group :datas='extravagant'></group>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';
	import carousel from '@/components/home/carousel.vue'
	import homeMain from '@/components/home/homeMain.vue'
	import preferential from '@/components/home/preferential.vue'
	import specialPrice from '@/components/home/specialPrice.vue'
	import group from '@/components/home/group.vue'
	export default {
		data() {
			return {

			}
		},
		components: {
			carousel,
			homeMain,
			preferential,
			specialPrice,
			group
		},
		computed: {
			...mapState({
				rotation: state => state.home.rotation,
				titleIcon: state => state.home.titleIcon,
				groupBuying: state => state.home.groupBuying,
				newGoods: state => state.home.newGoods,
				giftBox: state => state.home.giftBox,
				extravagant: state => state.home.extravagant
			})
		},
		onLoad() {
			this.getrotation();
			this.getTitleIcon();
			this.getgroupBuying();
			this.getNewGoods();
			this.getgiftBox();
			this.getextravagant();
		},
		methods: {
			...mapMutations(['getrotation', 'getTitleIcon', 'getgroupBuying', 'getNewGoods', 'getgiftBox',
				'getextravagant'])
		}
	}
</script>

<style>
	.swiper-rotation {
		width: 100%;
		height: 360rpx;
	}

	.notice {
		width: 100%;
		height: 60rpx;
		box-sizing: border-box;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.warns {
		z-index: 999;
		background-color: white;
		padding: 15rpx;
		float: left;
	}

	.warn-text {
		font-size: 20rpx;
		padding: 0 15rpx;
		animation: activity 5s linear infinite;
	}

	.homeMian {
		height: 180rpx;
	}

	.screen {
		width: 100%;
		height: auto;
		margin-top: 30rpx;
		border-bottom: 20rpx solid #cbcbcb;
	}

	.screen:last-child {
		width: 100%;
		height: auto;
		margin-top: 30rpx;
		border-bottom: none;
	}

	.screen-title {
		width: 60%;
		margin: 0 auto;
		margin-top: 50rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.screen-header {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.screen-header image {
		width: 40rpx;
		height: 40rpx;
		display: block;
	}

	.screen-header text {
		font-size: 24rpx;
		padding: 0 10rpx;
	}

	.screen-subtitle {
		font-size: 16rpx;
	}

	.Jizan {
		width: 100%;
		height: 250rpx;
		margin-bottom: 20rpx;
	}

	@keyframes activity {
		from {
			transform: translateX(0px);
		}
		to {
			transform: translateX(-100%);
		}
	}
</style>
