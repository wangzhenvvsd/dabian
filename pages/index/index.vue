<template>
	<view class="index">

		<scroll-view scroll-x="true" class="scroll-content" :scroll-into-view="`top${scrollIntoIndex}`">
			<view class="scroll-item" v-for="(item,index) in topBar" :key="index" @tap="changeTab(index)"
				:id="`top${index}`">
				<text :class='topBarIndex===index?"f-active-color":"f-color"'>{{item.name}}</text>
			</view>
		</scroll-view>

		<swiper @change="onChangeTab" :current="topBarIndex" :style="`height: ${clentHeight}px;`">
			<swiper-item v-for="(item,index) in newTopBar" :key="index">
				<scroll-view scroll-y="true" :style="`height: ${clentHeight}px;`" @scrolltolower="loadMore(index)">
					<block v-if="item.data.length > 0">
						<block v-for="(k,i) in item.data" :key="i">



							<!-- 推荐 -->
							<IndexSwiper v-if="k.type==='swiperList'" :dataList='k.data'></IndexSwiper>
							<template v-if="k.type==='recommendList'">
								<Recommend :dataList='k.data'></Recommend>
								<Card cardTitle='猜你喜欢'></Card>
							</template>
							<!-- 运动户外。。。 -->
							<Banner v-if="k.type==='bannerList'" :dataList="k.imgUrl"></Banner>
							<template v-if="k.type==='iconList'">
								<Icons :dataList="k.data"></Icons>
								<Card cardTitle='热销爆品'></Card>
							</template>
							<template v-if="k.type==='hotList'">
								<Hot :dataList="k.data"></Hot>
								<Card cardTitle='推荐店铺'></Card>
							</template>
							<template v-if="k.type==='shopList'">
								<Shop :dataList="k.data"></Shop>
								<Card cardTitle='为您推荐'></Card>
							</template>

							<CommodityList v-if="k.type==='commodityList'" :dataList='k.data'></CommodityList>






						</block>
					</block>
					<view class="" v-else>敬请期待...</view>
					<view class="load-text f-color">
						{{item.loadText}}
					</view>
				</scroll-view>


			</swiper-item>
		</swiper>
		<!-- 推荐模板 -->
		<!-- <IndexSwiper></IndexSwiper>
		<Recommend></Recommend>
		<Card cardTitle='猜你喜欢'></Card>
		<CommodityList></CommodityList> -->

		<!-- 其他模板：运动户外，美妆 -->
		<!-- <Banner></Banner>
		<Icons></Icons>
		<Card cardTitle='热销爆品'></Card>
		<Hot></Hot>
		<Card cardTitle='推荐店铺'></Card>
		<Shop></Shop>
		<Card cardTitle='为您推荐'></Card>
		<CommodityList></CommodityList> -->
	</view>
</template>

<script>
	import $http from '@/common/api/request.js'
	import Shop from '@/components/index/Shop.vue'
	import Banner from '@/components/index/Banner.vue'
	import Icons from '@/components/index/Icons.vue'
	import CommodityList from '@/components/common/CommodityList.vue'
	import Recommend from '@/components/index/Recommend.vue'
	import IndexSwiper from '@/components/index/IndexSwiper.vue'
	import Card from '@/components/common/Card.vue'
	import Hot from '@/components/index/Hot.vue'
	export default {
		data() {
			return {
				URL: `192.168.24.229:3007`,
				// 选中的索引
				topBarIndex: 0,
				// 顶栏跟随索引id值
				scrollIntoIndex: 0,
				// 内容块的高度值
				clentHeight: 0,
				// 顶栏数据
				topBar: [
					// {name:'推荐'},
					// {name:'运动户外'},
					// {name:'服饰内衣'},
					// {name:'鞋靴箱包'},
					// {name:'美妆个护'},
					// {name:'家居数码'},
					// {name:'食品母婴'},
				],
				// 承载数据
				newTopBar: []
			}
		},
		components: {
			IndexSwiper,
			Recommend,
			Card,
			CommodityList,
			Banner,
			Icons,
			Hot,
			Shop
		},
		onLoad() {
			this.__init()
		},
		onReady() {
			// let view = uni.createSelectorQuery().select(".home-data")
			// view.boundingClientRect(data => {
			// 	console.log('data', data)
			// 	this.clentHeight = 2000
			// 	// this.clentHeight=data.height
			// }).exec()


			uni.getSystemInfo({
				success: (res) => {
					this.clentHeight = res.windowHeight - uni.upx2px(80) - this.getClientHeight()
				}
			})
		},
		methods: {
			//请求首页数据
			__init() {
				$http.request({
					url:"/index_list/data"
				}).then((res)=>{
					this.topBar = res.topBar
					this.newTopBar = this.initData(res)
				}).catch(()=>{
					uni.showToast({
						title:"flase to request",
						icon:"none"
					})
				})
				// uni.request({
				// 	url: `http://${this.URL}/api/index_list/data`,
				// 	success: (res) => {
				// 		let data = res.data.data
				// 		console.log(res.data.data)
				// 		this.topBar = data.topBar
				// 		// console.log(this.initData(data))
				// 		this.newTopBar = this.initData(data)
				// 	}
				// })
			},
			//添加数据
			initData(res) {
				let arr = []
				console.log(this.topBar.length)
				for (let i = 0; i < this.topBar.length; i++) {
					let obj = {
						data: [],
						load: "first",
						loadText:"上拉加载更多..."
					}
					//获取首次数据
					if (i == 0) {
						obj.data = res.data
					}
					arr.push(obj)
				}
				return arr
			},
			//点击顶栏
			changeTab(index) {
				if (this.topBarIndex != index) {
					this.topBarIndex = index
					this.scrollIntoInde = index - 2
					//每次滑动赋值 ==>first
					if (this.newTopBar[this.topBarIndex].load === "first") {
						this.addData()

					}
				} else return
			},
			//对应滑动
			onChangeTab(e) {
				this.changeTab(e.detail.current)
			},
			//获取可视区域高度【兼容】
			getClientHeight() {
				const res = uni.getSystemInfoSync()
				console.log(res.platform, res.statusBarHeight)
				const system = res.platform
				if (system === "ios") {
					return 0 - res.statusBarHeight
				} else if (system === "android") {
					return 20 - res.statusBarHeight
				} else {
					return 0
				}
			},
			//对应显示不同数据
			addData(callback) {
				//拿到索引
				let index = this.topBarIndex
				//拿到id==>不同的板块
				let id = this.topBar[index].id
				//请求不同的数据
				let page = Math.ceil(this.newTopBar[index].data.length/5)+1
				console.log(page)
				//请求数据
				$http.request({
					url:`/index_list/${id}/data/${page}`
				}).then((res)=>{
					this.newTopBar[index].data = [...this.newTopBar[index].data, ...res]
				}).catch(()=>{
					uni.showToast({
						title:"flase to request",
						icon:"none"
					})
				})
				// uni.request({
				// 	url: `http://${this.URL}/api/index_list/${id}/data/${page}`,
				// 	success: (res) => {
				// 		if (res.statusCode != 200) {
				// 			return
				// 		} else {
				// 			let data = res.data.data
				// 			console.log(data)
				// 			this.newTopBar[index].data = [...this.newTopBar[index].data, ...data]
				// 		}
				// 	}
				// })
				
				// console.log(this.newTopBar[index].data)
				//当请求结束后重新赋值
				this.newTopBar[index].load='last'
				if(typeof callback === "function"){
					callback()
				}
			},
			//上拉加载更多
			loadMore(index){
				this.newTopBar[index].loadText="加载中>>>"
				//请求完数据，文字信息又替换成【上拉加载更多】
				this.addData(()=>{
					this.newTopBar[index].loadText = "上拉加载更多..."
				})
			}
		}
	}
</script>

<style scoped>
	.scroll-content {
		width: 100%;
		height: 80rpx;
		white-space: nowrap;
	}

	.scroll-item {
		display: inline-block;
		padding: 10rpx 30rpx;
		font-size: 36rpx;
	}

	.f-active-color {
		padding: 10rpx 0;
		border-bottom: 4rpx solid #49bdfb;
	}
	.load-text{
		border-top: 2rpx solid #636262;
		line-height: 60rpx;
		text-align: center;
	}
</style>