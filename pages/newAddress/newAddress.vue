<template>
	<view class="content">
		<view>
			<label for="username" class="infoitem">
				<text>收货人：</text>
				<input type="text" placeholder="收货人:" id="username" v-model="newUserinfo.name"/>
			</label>
			<label for="tel" class="infoitem">
				<text>联系方式：</text>
				<input type="number" placeholder="联系方式:" id="tel" v-model="newUserinfo.tel"/>
			</label>
			<label for="addr" class="infoitem">
				<text>收货地址：</text>
				<input type="text" placeholder="收货地址:" maxlength="50" id="addr" v-model="newUserinfo.address"/>
			</label>
		</view>
		<button type="button" class="submitadd" hover-class="submitadds" @click="submitaddress">确认地址</button>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations,
	} from 'vuex';
	export default {
		data() {
			return {
				current: 0
			}
		},
		components: {

		},
		computed: {
			...mapState({
				newUserinfo: state => state.user.newUserinfo
			})
		},
		onLoad() {
			
		},
		onShow() {

		},
		methods: {
			...mapMutations(['submitaddress']),
			
		}
	}
</script>

<style>
	.content {
		width: 100%;
		height: auto;
	}
	.infoitem {
		width: 100%;
		height: 68rpx;
		display: flex;
		flex-direction: row;
		margin: 10rpx 0;
		align-items: center;
	}
	.infoitem text {
		background-color: #EBEEF5;
		border-radius: 5px;
		height: 100%;
		line-height: 68rpx;
		padding: 0 5rpx;
	}
	#username,
	#tel,
	#addr{
		padding: 10rpx 15rpx;
		border: 1rpx solid #EBEEF5;
		border-radius: 5px;
	}
	.submitadd {
		width: 60%;
		margin: 0 auto;
		background-color: #FFB6C1;
		margin-top: 50rpx;
	}
	.submitadds {
		background-color: #FF7100;
	}

</style>
