<template>
	<view class="content">
		<swiper indicator-dots="true" autoplay="true" circular="true" interval="5000" duration="1000"
			class='swiper-rotation'>
			<block v-for="(item,index) in rotation" :key='index'>
				<swiper-item>
					<image :src='item.url' bindtap='activity' class='items'></image>
				</swiper-item>
		 </block>
		</swiper>
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
				rotation: state => state.home.rotation
			})
		},
		onLoad() {
			this.getrotation()
		},
		methods: {
			...mapMutations(['getrotation'])
		}
	}
</script>

<style>
	.content{
		width: 100%;
		height: 360rpx;
	}
	.swiper-rotation {
		width: 100%;
		height: 360rpx;
	}

	.items {
		width: 100%;
		height: 360rpx;
	}
</style>
