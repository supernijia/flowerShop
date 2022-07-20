<template>
	<view class="content">
		<block v-for="item in HomeIcon" :key='item.id'>
			<view class="chose-item" @click="gotexplicit(item)">
				<image class="chose-img" :src="item.url"></image>
				<text>{{item.content}}</text>
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
				HomeIcon: state => state.home.HomeIcon,
			})
		},
		onLoad() {
			this.getHomeIcon()
		},
		methods: {
			...mapMutations(['getHomeIcon','gotexplicit'])
		}
	}
</script>

<style>
	.content {
		width: 70%;
		height: auto;
		margin: 0 auto;
		margin-top: 50rpx;
		height: auto;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.chose-item {
		width: 80rpx;
		height: 120rpx;
		text-align: center;
	}
	.chose-img {
		width: 40px;
		height: 38px;
		display: block;
	}
	.chose-item text {
		font-size: 16rpx;
	}
</style>
