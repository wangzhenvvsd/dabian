<template>
	<view class="shop">
		<view class="shop-item">
			<view class="shop-bg">
				<image class="shop-bg" src="../../static/img/shop.jpg" mode=""></image>
			</view>
			<scroll-view scroll-x="true" class="scroll-content">
				<view class="scroll-item">
					<Commodity :dataList="shopList" wrap="no-wrap" itemW="200rpx" bigH="200rpx" nameSize="12rpx"></Commodity>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import Commodity from '../common/Commodity.vue'
	export default{
		data() {
			return{
				shopList:[
					{
						id:1,
						imgUrl:"../../static/img/shop1.jpg",
						name:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
						pprice:"299",
						oprice:"599",
						discount:"5.2"
					},
					{
						id:2,
						imgUrl:"../../static/img/shop2.jpg",
						name:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
						pprice:"299",
						oprice:"599",
						discount:"5.2"
					},
					{
						id:3,
						imgUrl:"../../static/img/shop3.jpg",
						name:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
						pprice:"299",
						oprice:"599",
						discount:"5.2"
					},
					{
						id:1,
						imgUrl:"../../static/img/shop1.jpg",
						name:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
						pprice:"299",
						oprice:"599",
						discount:"5.2"
					},
					{
						id:2,
						imgUrl:"../../static/img/shop2.jpg",
						name:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
						pprice:"299",
						oprice:"599",
						discount:"5.2"
					},
					{
						id:3,
						imgUrl:"../../static/img/shop3.jpg",
						name:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
						pprice:"299",
						oprice:"599",
						discount:"5.2"
					},
					{
						id:1,
						imgUrl:"../../static/img/shop1.jpg",
						name:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
						pprice:"299",
						oprice:"599",
						discount:"5.2"
					},
					{
						id:2,
						imgUrl:"../../static/img/shop2.jpg",
						name:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
						pprice:"299",
						oprice:"599",
						discount:"5.2"
					},
					{
						id:3,
						imgUrl:"../../static/img/shop3.jpg",
						name:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
						pprice:"299",
						oprice:"599",
						discount:"5.2"
					},
					{
						id:1,
						imgUrl:"../../static/img/shop1.jpg",
						name:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
						pprice:"299",
						oprice:"599",
						discount:"5.2"
					},
					{
						id:2,
						imgUrl:"../../static/img/shop2.jpg",
						name:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
						pprice:"299",
						oprice:"599",
						discount:"5.2"
					},
					{
						id:3,
						imgUrl:"../../static/img/shop3.jpg",
						name:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
						pprice:"299",
						oprice:"599",
						discount:"5.2"
					},
				]
			}
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