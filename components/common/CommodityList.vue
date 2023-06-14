<template>
	<view class="commodity-list">
		<!-- 商品列表 -->
		<Commodity :dataList="CommodityList"></Commodity>
	</view>
</template>

<script>
	import Commodity from './Commodity.vue'
	export default{
		data(){
			return{
				CommodityList:[
					{
						id:1,
						imgUrl:"../../static/img/commodity1.jpg",
						name:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
						pprice:"299",
						oprice:"599",
						discount:"5.2"
					},
					{
						id:2,
						imgUrl:"../../static/img/commodity2.jpg",
						name:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
						pprice:"299",
						oprice:"599",
						discount:"5.2"
					},
					{
						id:3,
						imgUrl:"../../static/img/commodity3.jpg",
						name:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
						pprice:"299",
						oprice:"599",
						discount:"5.2"
					},
					{
						id:4,
						imgUrl:"../../static/img/commodity4.jpg",
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