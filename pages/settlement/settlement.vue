<template>
	<view class="content">
		 <view class="dingdan">
		    <block v-for="(item, index) in orderArr" :key='index'>
				<view class='dingdan-body'>
				  <view class='dingdan-img'>
				    <image :src='item.url'></image>
				  </view>
				  <view class='dingdan-text'>
				    <view class='dingdan-text-CommodityName'>{{ item.CommodityName }}</view>
				    <view class='dingdan-text-price'>价格 ￥{{ item.price }}</view>
				  </view>
				  <view class="amount">数量：{{ item.amount }}件</view>
				</view>
			</block>
		  </view>
		  <!-- 留言板 -->
		  <view class='liuyan'>
		    <textarea placeholder='买家留言' maxlength="30" v-model="message" @input='initmessage'>
		    <text>{{ sum? sum:0 }}/30</text>
		    </textarea>
		  </view>
		  <!-- 地址 -->
		  <view class='tjdz' @click="choseAddr">
		    <text>选择收获地址</text>
		    <text>></text>
		  </view>
		  <view class='tjdz'>
			  收货人：
		    {{choseAdd.name}}
		  </view>
		  <!-- 商品金额 -->
		  <view class='tjdz'>
		    <text>商品金额</text>
		    <text>￥{{ shoppingPrice }}</text>
		  </view>
		  <!-- 优惠方式 -->
		  <view class='youhuifangshi'>
		    <!-- 优惠券 -->
		    <view class='youhuifangshi-items'>
		      <picker @change="pickerChange" :value="rangeIndex" :range="discount" range-key="title">
		        <view class="picker">
		            <view class='youhuifangshi-items'>
		                <text>优惠方式:</text>
		                <text>></text>
		             </view>
		        </view>
		      </picker>
			  {{discount[rangeIndex].title}}
		      <!-- {{ youhuiquan[index].name? youhuiquan[index].name:"剩余"+sums+"优惠券"}} -->
		      <text class='youhuifangshi-jine'></text>
		    </view>
		  </view>
		  <!-- 运费 -->
		  <view class='tjdz'>
		    <text>运费:(商品满两百即可享受包邮服务)</text>
		    <text>￥{{shoppingPrice >= 200 ? 0 : 10}}</text>
		  </view>
		  <!-- 结算 -->
		  <view class='jiesuan' style='font-weight:200'>
		    <text>合计:</text>
		    <text >￥{{ finalPrice }}</text>
		    <view class='qufukuan' @click="payment(rangeIndex)">去付款</view>
		  </view>
		  <!-- <view class='footer'></view> -->
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
				message : '',
				sum : 0,
				rangeIndex : 0,
				finalPrice : 0
			}
		},
		components: {
		
		},
		computed: {
			...mapState({
				orderArr: state => state.cart.orderArr,
				shoppingPrice: state => state.cart.shoppingPrice,
				discount : state => state.home.discount,
				choseAdd : state => state.cart.choseAdd,
				// discountIndex : state => state.cart.discountIndex
			})
		},
		onLoad() {
		
		},
		onUnload() {
			// this.destroydiscount(this.rangeIndex)
		},
		onShow() {
			this.finalPrice = this.shoppingPrice - this.discount[this.rangeIndex].price
		},
		methods: {
			...mapMutations(['payment','choseAddr','destroydiscount']),
			initmessage() {
				this.sum = this.message.length
			},
			pickerChange(e) {
				this.rangeIndex = e.detail.value;
				this.finalPrice = this.shoppingPrice - this.discount[this.rangeIndex].price
			}
		}
	}
</script>

<style>
	.content {
		width: 100%;
		height: auto;
		position: relative;
	}
.dingdan{
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color:rgb(247, 247, 247);
}
.dingdan-body{
  width:100%;
  height:180rpx;
  display:flex;
  flex-direction:row;
  position:relative;
  box-sizing:border-box;
  padding: 15px 15px;
  margin-bottom:10rpx;
  background-color: white;
}
.dingdan-img{
  width: 120rpx;
  height: 115rpx;
}
.dingdan-img image{
  width: 100%;
  height: 100%;
}
.dingdan-text-CommodityName{
  font-size: 28rpx;
}
.dingdan-text-price{
  font-size: 25rpx;
  color: #ff7100;
}
.amount {
	position: absolute;
	top: 78rpx;
	right: 50px;
	font-size: 25rpx;
	color: #ff7100;
}
.dingdan-text{
  margin-left: 25rpx;
  box-sizing: border-box;
  padding: 10px 0px;
}
.liuyan{
  width: 100%;
  background-color: rgb(255, 255, 255);
  box-sizing: border-box;
  padding:10px 15px;
  border-bottom: 6rpx solid rgb(247, 247, 247);
}
.liuyan > textarea{
  height:85px;
  width:345px;
  font-size:28rpx;
  background-color:rgb(231, 231, 231);
  position: relative;
}
.liuyan > textarea text{
  position: absolute;
  right: 0;
  bottom: 0;
}
.tjdz{
  width: 100%;
  height: 80rpx;
  line-height: 75rpx;
  box-sizing: border-box;
  padding:0px 15px;
  font-size: 30rpx;
  font-weight: 200;
  border-bottom: 6rpx solid rgb(247, 247, 247);
}
.tjdz text:nth-child(2){
  float: right;
}
.youhuifangshi{
  width: 100%;
  height: 160rpx;
  line-height: 75rpx;
  box-sizing: border-box;
  padding:0px 15px;
  font-size: 30rpx;
  font-weight: 200;
  border-bottom: 6rpx solid rgb(247, 247, 247);
}
.youhuifangshi-items text:nth-child(2){
  float: right;
}
.youhuifangshi-jine{
  position: absolute;
  right: 10rpx;
  top: 85rpx;
}
.youhuifangshi-jines{
  position:absolute;
  right:10rpx;
  top:74rpx;
  font-size:25rpx;
}
.youhuifangshi-items{
  position: relative;
}
.qufukuan{
  display: inline-block;
  position: absolute;
  right: 10rpx;
  width: 130rpx;
  text-align: center;
  color: white;
  background-color: #ff7100;
}
.jiesuan{
  width: 100%;
  height: 100rpx;
  line-height: 100rpx;
  position: fixed;
  bottom: 0;
  box-sizing: border-box;
  padding:0px 10px;
  font-size: 30rpx;
  background-color: white;
}
.footer{
  width: 100%;
  height: 100rpx;
}


</style>
