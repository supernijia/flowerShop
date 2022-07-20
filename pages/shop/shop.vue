<template>
	<view class="content">
		<block v-for="(item , index) in shopImg" :key='index'>
			<view class='header-img'>
				<image :src='item.url'></image>
			</view>
		</block>
		<!-- 店面地址 -->
		<view class='dipu-body'>
			<view class='dipu-body-dizhi'>
				<image :src='shopAdd.src' class='dipu-body-dizhi-img'></image>
				<text>{{shopAdd.address}}</text>
			</view>
			<view class='dipu-body-dianhua'>{{shoptel.tel}}</view>
			<view class="dipu-body-dizhi">
				<image :src='shopAdd.src1' class='dipu-body-dizhi-img'></image>
				<text>{{shopAdd.name}}</text>
			</view>
			<image :src='shoptel.src' class='dipu-body-dizhi-img'></image>
		</view>
		<!-- 商户信息 -->
		<view class='dipu-body-usermsg'>
			<view class='dipu-body-usermsg-title'>商户信息</view>
			<view class='dipu-body-usermsg-title-body'>
				{{shopInfo.content}}
			</view>
		</view>
		<!-- 营业时间 -->
		<view class='dipu-body-yinye'>
			<view class='dipu-body-usermsg-title'>营业时间</view>
			<view class='dipu-body-usermsg-title-body'>{{shopInfo.worker}}</view>
		</view>
		<view class='map'>
			<!-- <map id="map_container" :latitude="latitude" :longitude="longitude" scale="11" :markers="markers"
				:show-location="true" @markertap="markertap" @updated='mapUpdated' @tap='closeMapMarker'></map> -->
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
		components: {

		},
		computed: {
			...mapState({
				shopImg: state => state.shop.shopImg,
				shopInfo: state => state.shop.shopInfo,
				shopAdd: state => state.shop.shopAdd,
				shoptel: state => state.shop.shoptel,
			})
		},
		onLoad() {
			this.getshopInfo();

			
		},
		methods: {
			...mapMutations(['getshopInfo']),
		}
	}
</script>

<style>
	.content {
		width: 100%;
		height: auto;
	}

	.header-img {
		width: 100%;
		height: 430rpx;
		margin-bottom: 20rpx;
	}

	.header-img image {
		width: 100%;
		height: 100%;
	}

	.dipu-body {
		width: 100%;
		box-sizing: border-box;
		padding: 20rpx 40rpx;
		font-size: 26rpx;
		position: relative;
	}

	.dipu-body-dizhi {
		width: 100%;
		height: auto;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
	}

	.dipu-body-dizhi text {
		margin-left: 10rpx;
	}

	.dipu-body-dizhi-img {
		width: 30rpx;
		height: 30rpx;
	}

	.dipu-body>image {
		width: 45rpx;
		height: 45rpx;
		position: absolute;
		top: 80rpx;
		right: 75rpx;
	}

	.dipu-body-dianhua {
		padding: 10rpx 40rpx;
	}

	.dipu-body-usermsg,
	.dipu-body-yinye {
		width: 100%;
		box-sizing: border-box;
		padding: 15px 20px;
	}

	.dipu-body-usermsg-title {
		font-size: 30rpx;
		font-weight: 400;
		padding-left: 25rpx;
		margin-bottom: 20rpx;
		border-left: 10rpx solid lightblue;
	}

	.dipu-body-usermsg-title-body {
		font-size: 26rpx;
		letter-spacing: 2rpx;
		color: rgb(107, 107, 107);
	}

	.map {
		box-sizing: border-box;
		padding: 10px;
	}
</style>
