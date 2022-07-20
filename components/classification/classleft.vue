<template>
	<view class='img-all'>
	    <view class='img-all-text img-all-text-left'>
	      <view>{{datas.CommodityName}}</view>
	      <view>{{datas.subName}}</view>
	    </view>
	    <image :src='datas.url'></image>
	  </view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		props:['datas'],
		methods: {
			
		}
	}
	
</script>

<style>
	.img-all{
	  width: 100%;
	  height: 250rpx;
	  margin-bottom: 15rpx;
	  position: relative;
	}
	.img-all image{
	  width: 100%;
	  height: 100%;
	}
	.img-all-text{
	  position: absolute;
	  font-size: 28rpx;
	}
	.img-all-text view:nth-child(2){
	  font-size: 20rpx;
	}
	.img-all-text-left{
	  top:100rpx;
	  right:45px;
	}
	
</style>
