<template>
	<header class="header">
		<div >
			<span>分类</span>
			<span @click="toKind()">ENJOY</span>
			<span class="iconfont" @click="toKind()">长沙&#xe633;</span>
			<span class="iconfont" @click="toLogin()">&#xe6e6;</span>
			<span class="iconfont">&#xe651;</span>
		</div>
	</header>
</template>

<script>
	import "./../scss/commonHeader.scss";
	import router from "./../router/router.js";
	import VueRouter from "vue-router";
	import Vue from "vue";
	Vue.use(VueRouter);
	export default {
		data(){
			return {
				
			}
		},methods:{
			toKind(){
				router.push({
					path:'/home'
					})
			},
			toLogin(){
				router.push({
					path:'/login'
					})
			}
		},
	}
</script>

<style scoped>
	
</style>