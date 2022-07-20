<template>
	<view class="content">
		<view class='items'>
			<block v-for="(item,index) in explicit" :key='index'>
				<view @click="gotdetails(item)">
					<view class='img'>
						<image :src='item.url'></image>
					</view>
					<text class='CommodityName'>{{ item.CommodityName }}</text>
					<text class='Price'>￥{{ item.Price || item.price }}</text>
					<image src='../../static/img/gouwuche.png' style='width:16px;height:16px;float:right;padding-top:5px'>
					</image>
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
				// explicit: state => state.home.explicit,
				explicit : (state) => {
					if(state.classification.classificationData.length !== 0) {
						return state.classification.classificationData
					}else {
						return state.home.explicit
					}
				}
			})
		},
		onLoad() {
			
		},
		methods: {
			...mapMutations(['destroyPreferential','gotdetails'])
		},
		onShow() {
		},
		onUnload() {
			this.destroyPreferential();
		}
	}
</script>

<style>
	.content {
		width: 100%;
		height: auto;
	}

	.items {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		margin-top: 20rpx;
	}

	.items>view {
		margin-bottom: 60rpx;
		box-shadow: 0rpx 1rpx 0rpx 0rpx rgb(241, 241, 241);
	}

	.CommodityName {
		font-size: 28rpx;
		display: block;
		width: 100%;
		margin-top: 10rpx;
		font-weight: 200;
	}

	.Price {
		font-size: 25rpx;
		color: red;
	}

	.img {
		width: 300rpx;
		height: 300rpx;
	}

	.img>image {
		width: 100%;
		height: 100%;
	}
</style>
