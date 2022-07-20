<template>
	<view class="content">
		<view class='tejias'>
			<block v-for="(item, index) in specialOffer" :key='index'>
				<view class='tejias-items' @click="gotseckill(item)">
					<view class='tejias-img'>
						<image :src='item.url'></image>
					</view>
					<!-- 商品名 -->
					<view class='tejias-text'>
						<text>{{ item.CommodityName }}</text>
						<!-- 现价 -->
						<text>￥{{ item.PresentPrice }}</text>
						<!-- 原价 -->
						<text>￥{{ item.OriginalPrice }}</text>
					</view>
					<!-- 距离结束 -->
					<view class='tejias-times'>
						<view class='tejia-timees'>
							距结束
							<!-- 小时 -->
							<!-- <text>{{ item.hourTime }}</text> -->
							:
							<!-- 分钟 -->
							<!-- <text>{{ item.MinuteTime }}</text> -->
							:
							<!-- 秒 -->
							<!-- <text>{{ item.secondTime }}</text> -->
						</view>
				 	<view>
							<!-- 进度条 -->
							<view class='progressa'>
								<text>已售</text>
								<progress :percent="item.Sold" show-info border-radius="10rpx" style='width:250rpx'
									font-size='13px' activeColor="red" />
					  </view>
						</view>
					</view>
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
				specialOffer: state => state.home.specialOffer
			})
		},
		onLoad() {
			this.getspecialOffer()
		},
		methods: {
			...mapMutations(['getspecialOffer','gotseckill'])
		}
	}
</script>

<style>
	.content {
		width: 100%;
		height: auto;
	}

	.tejias {
		margin-top: 30rpx;
	}

	.tejias-items {
		width: 100%;
		height: 240rpx;
		display: flex;
		background-color: #fafafa;
		border-bottom: 1px solid rgb(236, 236, 236);
	}

	.tejias-img {
		width: 200rpx;
		height: 200rpx;
		box-sizing: border-box;
		padding: 20px 15px;
	}

	.tejias-img image {
		width: 160rpx;
		height: 160rpx;
	}

	.tejias-text {
		display: flex;
		flex-direction: column;
		margin-left: 10rpx;
		margin-top: 36rpx;
	}

	.tejias-times {
		margin-left: 100rpx;
		margin-top: 60rpx;
		font-size: 26rpx;
	}

	.tejia-timees {
		background-color: #f31e4a;
		color: white;
		border-radius: 5rpx;
		box-sizing: border-box;
		padding: 1px 5px;
	}

	.tejias-text>text:nth-child(1) {
		font-size: 28rpx;
	}

	.tejias-text>text:nth-child(2) {
		color: #f60;
		margin-top: 10rpx;
		font-size: 35rpx;
	}

	.tejias-text>text:nth-child(3) {
		color: rgb(179, 179, 179);
		font-size: 25rpx;
		margin-top: 30rpx;
		text-decoration: line-through;
	}

	.progressa {
		margin-top: 20rpx;
	}
</style>
