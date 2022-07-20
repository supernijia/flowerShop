<template>
	<view class="content">
		<view class="uni-list">
			<radio-group @change="radioChange">
				<label class="addlist" @click="getbackSettlement(item)" v-for="(item,index) in userAddinfoArr" :key='index'>
					<view>
						<radio :value="item.name" :checked="index === current" />
					</view>
					<view class="info">
						<view class="infotitle">
							<view>收货人:</view>
							<view>联系电话:</view>
							<view>收货地址:</view>
						</view>
						<view>
							<view>{{item.name}}</view>
							<view>{{item.tel}}</view>
							<view>{{item.address}}</view>
						</view>
					</view>
				</label>
			</radio-group>
		</view>


		<button @click="addNewAddr" class="addnewadd">新建地址</button>
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
				userAddinfoArr: state => state.user.userAddinfoArr
			})
		},
		onLoad() {
			
			
		},
		onShow() {

		},
		methods: {
			...mapMutations(['addNewAddr','getbackSettlement']),
			radioChange(evt) {
				for (let i = 0; i < this.userAddinfoArr.length; i++) {
					if (this.userAddinfoArr[i].value === evt.detail.value) {
						this.current = i;
						break;
					}
				}
			},

		}
	}
</script>

<style>
	.content {
		width: 100%;
		height: auto;
	}
	.addlist {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.info {
		display: flex;
		flex-direction: row;
		align-items: center;
		font-size: 24rpx;
	}
	.infotitle {
		width: 180rpx;
		height: 100%;
	}
	.infotitle > view {
		margin: 10rpx 0;
	}
	.addnewadd {
		width: 60%;
		margin-top: 220rpx;
		background-color: #FFB6C1;
	}
</style>
