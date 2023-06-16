var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
});
//首页第一次触底的数据
router.get('/api/index_list/1/data/2', function(req, res, next) {
	res.json({
		code:"0",
		data:[
			{
				type:"commodityList",
				data:[
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
			},
		]
		
	})
});
router.get('/api/index_list/2/data/3', function(req, res, next) {
	res.json({
		code:"0",
		data:[
			{
				type:"commodityList",
				data:[
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
			},
		]
		
	})
});
//运动户外第一次触底的数据
router.get('/api/index_list/2/data/2', function(req, res, next) {
	res.json({
		code:"0",
		data:[
			{
				type:"commodityList",
				data:[
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
			},
		]
		
	})
});
//运动户外第一次加载的数据
router.get('/api/index_list/2/data/1', function(req, res, next) {
  res.json({
  	  code:0,
  	  data:[
  		  {
  			  type:"bannerList",
  			  imgUrl:"../../static/img/banner.jpg"
  		  },
  		  {
  			  type:"iconList",
  			  data:[
  				  {imgUrl:"../../static/img/icon1.jpg",name:"运动户外"},
  				  {imgUrl:"../../static/img/icon2.jpg",name:"运动户外"},
  				  {imgUrl:"../../static/img/icon3.jpg",name:"运动户外"},
  				  {imgUrl:"../../static/img/icon4.jpg",name:"运动户外"},
  				  {imgUrl:"../../static/img/icon5.jpg",name:"运动户外"},
  				  {imgUrl:"../../static/img/icon6.jpg",name:"运动户外"},
  				  {imgUrl:"../../static/img/icon7.jpg",name:"运动户外"},
  				  {imgUrl:"../../static/img/icon8.jpg",name:"运动户外"},
  			  ]
  		  },
		  {
			  type:"hotList",
			  data:[
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
				  	id:4,
				  	imgUrl:"../../static/img/hot1.jpg",
				  	name:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
				  	pprice:"299",
				  	oprice:"599",
				  	discount:"5.2"
				  },
				  {
				  	id:5,
				  	imgUrl:"../../static/img/hot2.jpg",
				  	name:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
				  	pprice:"299",
				  	oprice:"599",
				  	discount:"5.2"
				  },
				  {
				  	id:6,
				  	imgUrl:"../../static/img/hot3.jpg",
				  	name:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
				  	pprice:"299",
				  	oprice:"599",
				  	discount:"5.2"
				  },
			  ]
		  },
		  {
			  type:"shopList",
			  data:[
				  {
					bigUrl:"../../static/img/shop.jpg",
					data:[
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
				  },	
				  {
				  	bigUrl:"../../static/img/shop.jpg",
				  	data:[
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
			  ]
		  },
		  {
			type:"commodityList",
			data:[
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
		},
  	  ]
  })
});
//服饰内衣第一次加载的数据
router.get('/api/index_list/3/data/1', function(req, res, next) {
  res.json({
  	  code:0,
  	  data:[
  		  {
  			  type:"bannerList",
  			  imgUrl:"../../static/img/banner.jpg"
  		  },
  		  {
  			  type:"iconList",
  			  data:[
  				  {imgUrl:"../../static/img/icon1.jpg",name:"服饰内衣"},
  				  {imgUrl:"../../static/img/icon2.jpg",name:"服饰内衣"},
  				  {imgUrl:"../../static/img/icon3.jpg",name:"服饰内衣"},
  				  {imgUrl:"../../static/img/icon4.jpg",name:"服饰内衣"},
  				  {imgUrl:"../../static/img/icon5.jpg",name:"服饰内衣"},
  				  {imgUrl:"../../static/img/icon6.jpg",name:"服饰内衣"},
  				  {imgUrl:"../../static/img/icon7.jpg",name:"服饰内衣"},
  				  {imgUrl:"../../static/img/icon8.jpg",name:"服饰内衣"},
  			  ]
  		  },
		  {
			  type:"hotList",
			  data:[
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
				  	id:4,
				  	imgUrl:"../../static/img/hot1.jpg",
				  	name:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
				  	pprice:"299",
				  	oprice:"599",
				  	discount:"5.2"
				  },
				  {
				  	id:5,
				  	imgUrl:"../../static/img/hot2.jpg",
				  	name:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
				  	pprice:"299",
				  	oprice:"599",
				  	discount:"5.2"
				  },
				  {
				  	id:6,
				  	imgUrl:"../../static/img/hot3.jpg",
				  	name:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
				  	pprice:"299",
				  	oprice:"599",
				  	discount:"5.2"
				  },
			  ]
		  },
		  {
			  type:"shopList",
			  data:[
				  {
					bigUrl:"../../static/img/shop.jpg",
					data:[
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
				  },	
				  {
				  	bigUrl:"../../static/img/shop.jpg",
				  	data:[
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
			  ]
		  },
		  {
			type:"commodityList",
			data:[
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
		},
  	  ]
  })
});
//首页推荐的数据
router.get("/api/index_list/data",function(req,res,next){
	res.send({
		"code":0,
		"data":{
			topBar:[
				{id:1,name:'推荐'},
				{id:2,name:'运动户外'},
				{id:3,name:'服饰内衣'},
				{id:4,name:'鞋靴箱包'},
				{id:5,name:'美妆个护'},
				{id:6,name:'家居数码'},
				{id:7,name:'食品母婴'},
			],
			data:[
				{
					type:"swiperList",
					data:[
						{imgUrl:'../../static/img/swiper1.jpg'},
						{imgUrl:'../../static/img/swiper2.jpg'},
						{imgUrl:'../../static/img/swiper3.jpg'},
					]
				},
				{
					type:"recommendList",
					data:[
						{
							bigUrl:"../../static/img/Children.jpg",
							data:[
								{imgUrl:"../../static/img/Children1.jpg"},
								{imgUrl:"../../static/img/Children2.jpg"},
								{imgUrl:"../../static/img/Children3.jpg"},
							]
						},
						{
							bigUrl:"../../static/img/Furnishing.jpg",
							data:[
								{imgUrl:"../../static/img/Furnishing1.jpg"},
								{imgUrl:"../../static/img/Furnishing2.jpg"},
								{imgUrl:"../../static/img/Furnishing3.jpg"},
							]
						},
						]
				},
				{
					type:"commodityList",
					data:[
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
				},
			]
		}
	})
})

module.exports = router;
