<template>
	<view style="width: 100%; height: 100%;">
		<view class="page-body">
			<view class="page-section page-section-gap">
				<map style="width: 100%; height: 1000rpx;" :latitude="latitude" :longitude="longitude" scale="16"
					show-location="true" @markertap="markertap"></map>
			</view>
		</view>
	</view>
</template>

<script>

	export default {
		data() {
			return {
				
			};
		},
		onLoad() {
			
		},

		methods: {
			// {
			// 	"path": "pages/login/login",
			// 	"style": {
			// 		"navigationBarTitleText": "",
			// 		"enablePullDownRefresh": false,
			// 		"navigationBarBackgroundColor": "#b3d4db"
			// 	}
			
			// },
		}
	};
</script>

<style>

</style>
