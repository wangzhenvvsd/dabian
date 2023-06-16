<template>
	<view class="shop">
		<view class="shop-item" v-for="(item,index) in dataList" :key="index">
			<view class="shop-bg">
				<image class="shop-bg" :src="item.bigUrl" mode=""></image>
			</view>
			<scroll-view scroll-x="true" class="scroll-content">
				<view class="scroll-item">
					<Commodity :dataList="item.data" wrap="no-wrap" itemW="200rpx" bigH="200rpx" nameSize="12rpx"></Commodity>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import Commodity from '../common/Commodity.vue'
	export default{
		props:{
			dataList:Array
		},
		components:{
			Commodity
		}
	}
</script>

<style>
	.shop-bg{
		width: 100%;
		height: 350rpx;
	}
	.scroll-item{
		display: inline-block;
		
	}
	.scroll-content{
		width: 100%;
		white-space: nowrap;
	}
</style>