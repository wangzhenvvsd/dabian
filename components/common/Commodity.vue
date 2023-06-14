<template>
	<view class="commodity" :style="`flex-wrap:${wrap};`">
		<!-- 单个商品 -->
		<view class="commodity-item" v-for="(item,index) in  dataList" :key="index" :style="`width:${itemW};`">
			<img class="commodity-img" :src="item.imgUrl" alt="" :style="`height:${bigH};`">
			<view class="commodity-content">
				<text class="commodity-name" :style="`font-size: ${nameSize};`">{{item.name}}</text>
				<view class="">
					<text class="pprice">￥{{item.pprice}}</text>
					<text class="oprice">￥{{item.oprice}}</text>
				</view>
				<text class="discount">{{item.discount}}折</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			// 数据
			dataList:Array,
			// 高度
			itemW:{
				type:String,
				default:"375rpx"
			},
			// 宽度
			bigH:{
				type:String,
				default:"375rpx"
			},
			// 换行？
			wrap:{
				type:String,
				default:"wrap"
			},
			// name字体大小
			nameSize:{
				type:String,
				default:"26rpx"
			}
		}
	}
</script>

<style scoped>
	.commodity{
		display: flex;
	}
	.commodity-item{
		width: 375rpx;
		padding-bottom: 20rpx;
	}
	.commodity-img{
		width: 100%;
		height: 375rpx;
	}
	.commodity-content{
		text-align: center;
	}
	.commodity-name{
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		color: #333;
		word-break: break-all;
		padding: 6rpx 20rpx;
		
	}
	.oprice{
		text-decoration: line-through;
		font-size: 24rpx;
		color: #999;
	}
	.discount{
		border-radius: 4rpx;
		border: 1px solid #f33;
		padding: 2rpx 10rpx;
		color: #f33;
	}
</style>