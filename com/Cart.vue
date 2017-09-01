<template>
<div class="cartContent">
	<div class="goods">
		<div class="goodsName" v-for="item in classList" ref="goo" v-if="show">
			<img :src="item.img">
			<span><p>{{item.name}}</p>
			<p>规格：{{item.spec}}</p>
			</span><span class="price">单价：{{item.price}}元</span>
			<br />
			<span class="num"><b @click="numUp(item.id)">+</b> <b ref="num">{{item.num}} </b> <b @click="numDown(item.id)">-</b></span>     <span @click="deleteCart(item.id)">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&times;</span>
		</div>
	</div>
	<div class="menu">
		<h2>猜你喜欢</h2>
		<div class="CartList" v-for="ite in proList.content">
			<img :src="ite.product_image" :url="ite.enjoy_url" @click="toDetails($event)">
			<p>{{ite.name}}</p>
			<p>{{ite.price/100}}/{{ite.show_entity_name}}</p>
		</div>
	</div>
	<div class="zj">
		<p>合计：<b ref="zjj">{{sum}} </b>元</p>
		<button @click="toPay()">去结算</button>
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
				proList:[],
				sum:'',
				show:true
			}
		},methods:{
			numUp(id){
				var arr=this.classList
				for(let i in arr){
					if(arr[i].id==id){
						arr[i].num++
						this.sum=Number(this.$refs.zjj.innerHTML)+arr[i].price
					}
				}
				this.classList=arr;
				localStorage.setItem("pro",JSON.stringify(arr))				
			},
			numDown(id){
				var arr=this.classList
				for(let i in arr){
					if(arr[i].num<2){arr[i].num==1}
					else if(arr[i].id==id){
						arr[i].num--
						this.sum=Number(this.$refs.zjj.innerHTML)-arr[i].price
					}
				}
				this.classList=arr;
				localStorage.setItem("pro",JSON.stringify(arr))		
			},
			deleteCart(id){
				var arr=this.classList
				for(let i in arr){
					if(arr[i].id==id){
						console.log(2)
						$(".goodsName").css("display","none")
					}
	
				}

			},
			toPay(){
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
			
//https://api.ricebook.com/3/enjoy_product/cart_recommend_product.json?city_id=1
			var that = this
			var pro = JSON.parse(localStorage.getItem("pro"))
			that.classList = pro ;
			var sum = 0;
			for(var i in pro){
				var money = pro[i].price*pro[i].num ;
				sum = sum + money;
			}
			console.log(sum)
			that.$refs.zjj.innerHTML = sum;
			var url = "https://api.ricebook.com/3/enjoy_product/cart_recommend_product.json?city_id=1";
			MyAjax.vueJson(url,function(data){
				console.log(data)
				that.proList = data;
				that.si=true;
			},function(err){
				console.log(err)
			})
		},undated(){
			var sum = 0;
			for(var i in pro){
				var money = pro[i].price*pro[i].num ;
				console.log(money)
				sum = sum + money;
			}
			that.sum=sum
//			that.$refs.zjj.innerHTML = sum;
		}
	}
</script>

<style scoped>
.cartContent{
	padding-bottom:60px ;
	width: 100%;
	height: 100%;
	height: auto;
	background:#FAFAFA;
	overflow: hidden;
}
.cartContent .goodsName{
	width: 90%;
	font-size: 14px;
	color: #888888;
	margin: 10px auto;
}
.cartContent .goodsName img{
	height: 80px;
}
.cartContent .goodsName .price{
	margin-top: 10px;
	color: #000000;
}
.cartContent .goodsName .num{
	margin-top: 10px;
	color:#000000;
	font-size: 18px;
}
.cartContent .goodsName .je{
	margin: 10px 0;
	color:#000000;
	font-size: 16px;
}
.cartContent .zj{
	border-top:1px solid #888888 ;
	width: 100%;
	height: 60px;
	position: fixed;
	left: 0;
	bottom: 0;
	display: flex;
	line-height: 60px;
}
.cartContent .zj p{
	background: #fff;
	color: red;
	flex: 6;
	text-align: right;
}
.cartContent .zj button{
	flex: 4;
	border: 0;
	background: #FF3939;
	color: #fff;
}
.menu{
	width: 100%;
	height: auto;
	margin: 20px auto;
}
.menu h2{
	display: block;
	color: #888888;
	text-align: center;
}
.menu .CartList{
	border-bottom:1px solid #DDDDDD ;
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