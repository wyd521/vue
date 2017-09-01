<template>
	<div class="detailContent">
		<div class="deailList">
			<div class="swiper-container" id="banner" v-if="si">
				<ul class="swiper-wrapper">
					<li class="swiper-slide" v-for="item in classList.basic.product_images" v-if="si">
						<img :src="item.img_url" v-if="si">
					</li>
				</ul>
				<div class="swiper-pagination"></div>
			</div>
			<p v-if="si">
				{{classList.basic.short_name}}-{{classList.basic.spec}}
			</p>
			<p v-if="si">{{classList.basic.description}}</p>
			<p v-if="si">
				<span>{{classList.basic.price/100}}元/{{classList.basic.show_entity_name}}</span> <span>{{classList.basic.origin_price}}</span>  |  随时退
			</p>
			<span class="scar" v-for="it in classList.basic.display_property_group" v-if="si">
				<span v-if="si" class="bra">{{it.name}}</span>
			</span>
			<div>
				<h2>商户信息</h2>
			</div>
			<div>
				<h2>MENU</h2>

			</div>
			<div>
				<h2>亮点</h2>
			</div>
			<div>
				<h2>使用提示</h2>
			</div>
			<div>
				<h2>猜你喜欢</h2>
			</div>
		</div>
		
		<div class="menu">
			<div class="CartList" v-for="ite in proList.content">
				<img :src="ite.product_image" :url="ite.enjoy_url" @click="toDetails($event)">
				<p>{{ite.name}}</p>
				<p>{{ite.price/100}}/{{ite.show_entity_name}}</p>
			</div>
		</div>
		
		<div>
			
			<ul class="footer">
				<li class="iconfont" @click="toCart()">&#xe64c;<span class="iconfont" v-show="shoe">&#xe601;</span></li>
				<li @click="addCart()">加入购物车</li>
				<li @click="toPay()">即刻购买</li>
			</ul>
		</div>
	</div>
	
</template>

<script>
	import MyAjax from "./../my/MyAjax.js";
	import router from "./../router/router.js";
	import VueRouter from "vue-router";
	import Vue from "vue";
	Vue.use(VueRouter);
	export default {
		data(){
			return {
				classList:[],
				b:this.$route.query.b,
				si:false,
				shoe:false,
				proList:[]
			}
			
		},methods:{
			addCart(){
				function isexit(currentobj,cartarr){
					for(var i in cartarr){
						if(currentobj.id == cartarr[i].id){
							return cartarr[i]
						}
					}
					return false;
				}
				var isgoods = localStorage.getItem('pro');
				var that = this;
				var name = that.classList.basic.name;
				var spec = that.classList.basic.spec;
				var price = that.classList.basic.price/100;
				var id= that.classList.basic.product_id;
				var img = that.classList.basic.product_images[0].img_url
				var obj ={
					name:name,
					spec:spec,
					price:price,
					id:id,
					img:img
					
				}
				
				var arr = [];
				if(isgoods==null){
					obj.num=1;
					arr.push(obj);
					var objStr = JSON.stringify(arr);
					localStorage.setItem('pro',objStr);
				}else{
						var pro =JSON.parse(localStorage.getItem('pro'));
						var flag = isexit(obj,pro);
						if(flag){
							console.log(flag)
							flag.num++
						}else{
							obj.num=1;
							pro.push(obj);
					}
					var objStr = JSON.stringify(pro);
					localStorage.setItem('pro',objStr);
				}	
				that.shoe = true
			},
			toCart(){
				router.push({
					path:'/cart'
				})
			},
			toPay(){
				function isexit(currentobj,cartarr){
					for(var i in cartarr){
						if(currentobj.id == cartarr[i].id){
							return cartarr[i]
						}
					}
					return false;
				}
				var isgoods = localStorage.getItem('pro');
				var that = this;
				var name = that.classList.basic.name;
				var spec = that.classList.basic.spec;
				var price = that.classList.basic.price/100;
				var id= that.classList.basic.product_id;
				var img = that.classList.basic.product_images[0].img_url
				var obj ={
					name:name,
					spec:spec,
					price:price,
					id:id,
					img:img
					
				}
				
				var arr = [];
				if(isgoods==null){
					obj.num=1;
					arr.push(obj);
					var objStr = JSON.stringify(arr);
					localStorage.setItem('pro',objStr);
				}else{
						var pro =JSON.parse(localStorage.getItem('pro'));
						var flag = isexit(obj,pro);
						if(flag){
							console.log(flag)
							flag.num++
						}else{
							obj.num=1;
							pro.push(obj);
					}
					var objStr = JSON.stringify(pro);
					localStorage.setItem('pro',objStr);
				}	
				router.push({
					path:'/pay'
				})
			},toDetails(ev){
				var url = ev.target.getAttribute('url');
				console.log(url)
				var a = url.slice(29)
//	            var a = url.split('?')[1];
	            var b = a.replace(/-/g,'_');b
				router.push({
					path:'/detail',
					query:{
						b:b
					}
				})
			}
			
		},mounted(){
			var b = this.$route.query.b
			console.log(this.$route.query.b)
			var that = this;
			var url = "https://api.ricebook.com/product/info/product_detail.json?product_id="+b;
			MyAjax.vueJson(url,function(data){
				console.log(data)
				that.classList = data;
				that.si=true;
			},function(err){
				console.log(err)
			})
			
			var url = "https://api.ricebook.com/3/enjoy_product/cart_recommend_product.json?city_id=1";
			MyAjax.vueJson(url,function(data){
				console.log(data)
				that.proList = data;
				that.si=true;
			},function(err){
				console.log(err)
			})
		},updated(){
			var mySwiper = new Swiper("#banner",{
				autoplay:3000,
			    loop: true,
			    paginationClickable: true,
			    pagination:'.swiper-pagination',
				autoplayDisableOnInteraction:false
			})
		}
	}
</script>

<style scoped>
.detailContent{
	width: 100%;
	height: 100%;
}
.deailList{
	width: 100%;
	height: 100%;
}
.deailList p:nth-of-type(1){
	padding: 10px;
	font-size:22px;
	color: #888888;
}
.deailList p:nth-of-type(2){
	padding: 10px;
	font-size:20px;
	color: #888888;
}
.deailList p:nth-of-type(3){
	padding: 10px;
	font-size:14px;
	color: #888888;
}
.deailList p:nth-of-type(3) span:nth-of-type(1){
	font-size:20px;
	color:red;
}
.deailList p:nth-of-type(3) span:nth-of-type(2){
	font-size:18px;
	color:#999999;
	text-decoration: line-through;
}
.deailList div h2{
	width: 90%;
	text-align: center;
	color: #888888;
	font-size: 20px;
	margin: 30px auto;
}
.deailList .scar{
	padding: 0 15px;
	color: #888888;
	font-size: 12px;
}
.deailList .scar .bra{
	border-radius: 3px 3px;
	padding: 5px;
	border: 1px solid #007AFF;
}
#banner img{
	height: 250px;
}
.footer{
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 60px;
		display: flex;
		line-height: 60px;
	}
.footer li{
	text-align: center;
	flex: 2;
	color: #fff;
	
}
.footer li:nth-of-type(1){
	flex: 1;font-size: 30px;color: #000000;background: #fff;
	}
.footer li:nth-of-type(1) span{
	color: red;
}
.footer li:nth-of-type(2){background:#FFB22A ;}
.footer li:nth-of-type(3){background: #FF3939;}
.menu{
	width: 100%;
	height: auto;
	margin: 150px auto;
}
.menu h2{
	display: block;
	color: #888888;
	text-align: center;
}
.menu .CartList{
	width: 100%;
	height: auto;
	padding: 10px 20px;
	box-sizing: border-box;
}
.menu .CartList img{
	margin-top: 10px;
	height: 120px;
}.menu .CartList p{
	margin-top: 10px;
}
</style>