<template>
<div class="cartContent">
	<div class="goods">
		<p class="title">本地精选</p>
		<div class="fj"></div>
		<div class="goodsName" v-for="item in classList">
			<span><p>{{item.name}}</p>
			<p>规格：{{item.spec}}</p>
			</span><span class="price">单价：{{item.price}}元</span> X <span class="num">{{item.num}}</span>
			<p class="je">商品金额:  <span>{{item.price*item.num}}</span>元</p>
		</div>
		
	</div>
	<div class="zj">
		<p>合计：<b ref="zjj">0</b>元</p>
		<button @click="toP()">去支付</button>
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
				classList:[]
			}
		},methods:{
			numUp(){

			},
			toP(){
				router.push({
					path:'/ppp'
				})
			}
		},mounted(){
			var that = this
			var pro = JSON.parse(localStorage.getItem("pro"))
			that.classList = pro ;
			var sum = 0;
			for(var i in pro){
				var money = pro[i].price*pro[i].num ;
				console.log(money)
				sum = sum + money;
			}
			console.log(sum)
			that.$refs.zjj.innerHTML = sum;
			
		}
	}
</script>

<style scoped>
.cartContent{
	width: 100%;
	height: 100%;
	height: auto;
	padding-bottom: 60px ;
	background:#FAFAFA;
}
.cartContent .goods .title{
	height: 46px;
	line-height: 46px;
	width:90%;
	margin: 0 auto;
	display: block;
	font-size: 14px;
	color: #AAAAAA;
}
.cartContent .goods .fj{
	width: 90%;
	margin: 10px auto;
	height: 1px;
	border-bottom: 1px solid #999999;
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
	color: #000000;
}
.cartContent .goodsName .num{
	color:#000000;
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
</style>