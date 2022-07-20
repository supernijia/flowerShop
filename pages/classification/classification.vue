<template>
	<view class="content">
		<view @click="gotclassification(One)"><classright :datas='One'></classright></view>
		<view @click="gotclassification(two)"><classleft :datas='two'></classleft></view>
		<view @click="gotclassification(three)"><classright :datas='three'></classright></view>
		<view @click="gotclassification(four)"><classleft :datas='four'></classleft></view>
		<view @click="gotclassification(five)"><classright :datas='five'></classright></view>
	</view>
</template>

<script>
	import classright from '@/components/classification/classright.vue'
	import classleft from '@/components/classification/classleft.vue'
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
			classright,
			classleft
		},
		computed: {
			...mapState({
				One : state => state.classification.One,
				two : state => state.classification.two,
				three : state => state.classification.three,
				four : state => state.classification.four,
				five : state => state.classification.five,
			})
		},
		onLoad() {
			this.getclassification();
		},
		methods: {
			...mapMutations(['getclassification','gotclassification'])
		}
	}
</script>

<style>
	.content {
		width: 100%;
		height: auto;
	}
</style>
