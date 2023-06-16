import { title } from "process"

export default{
	common:{
		baseUrl:"http://192.168.24.229:3007/api",
		data:{},
		hander:{
			"Content-Type":"application/json",
			"Content-Type":"application/x-www-form-urlencoded",
		},
		method:"GET",
		dataType:"json"
	},
	request(options={}){
		uni.showLoading({
			title:"加载中"
		})
		options.url=this.common.baseUrl+options.url
		options.data=options.data || this.common.data
		options.hander=options.hander || this.common.header
		options.method=options.method || this.common.method
		options.dataType=options.dataType || this.common.dataType
		return new Promise((res,rej)=>{
			uni.request({
				...options,
				success:(result)=>{
					if(result.statusCode!=200){
						return rej()
					}
					setTimeout(()=>{
						uni.hideLoading()
					},500)
					let data = result.data.data
					res(data)
				}
			})
		})
	}
}