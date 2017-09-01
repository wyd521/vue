<template>
	<div class="box" @click="toCart()">
		<div class="main">
			<img src="../img/pay.png" />
			<p>扫码支付</p>
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
				
			}
		},methods:{
			toCart(){
				router.push({path:'/cart'})
			}
		}
	
}
</script>

<style scoped>
	.box{
		display:flex;
		width:100%;
		height: 100%;
		background:rgba(0,0,0,0.5);
		justify-content: center;
		align-items:center;
	}
	.box .main p{
		text-align: center;
	}
</style>