<template>
	<view class="hot">
		
		<Commodity :dataList="hotList" itemW='250rpx' bigH='220rpx'></Commodity>
	</view>
</template>

<script>
	import Commodity from '../common/Commodity.vue'
	export default{
		data() {
			return{
				hotList:[
					{
						id:1,
						imgUrl:"../../static/img/hot1.jpg",
						name:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
						pprice:"299",
						oprice:"599",
						discount:"5.2"
					},
					{
						id:2,
						imgUrl:"../../static/img/hot2.jpg",
						name:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
						pprice:"299",
						oprice:"599",
						discount:"5.2"
					},
					{
						id:3,
						imgUrl:"../../static/img/hot3.jpg",
						name:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
						pprice:"299",
						oprice:"599",
						discount:"5.2"
					},
					{
						id:1,
						imgUrl:"../../static/img/hot1.jpg",
						name:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
						pprice:"299",
						oprice:"599",
						discount:"5.2"
					},
					{
						id:2,
						imgUrl:"../../static/img/hot2.jpg",
						name:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
						pprice:"299",
						oprice:"599",
						discount:"5.2"
					},
					{
						id:3,
						imgUrl:"../../static/img/hot3.jpg",
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
	
</style>