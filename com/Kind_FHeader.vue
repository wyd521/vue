<template>
	<header class="header">
		<div >
			<span @click="toHome()">首页</span>
			<span @click="toCity()">ENJOY</span>
			<span class="iconfont" @click="toCity()">长沙&#xe633;</span>
			<span class="iconfont" @click="toLogin()">登录</span>
			<span class="iconfont" @click="search()">&#xe651;</span>
		</div>
		<div id="searchbox">
	      <input type="text" v-model="word" placeholder="搜索本地精选/快递到家" /><button @click="btn()">搜索</button>
	    </div>
	</header>
</template>

<script>
	import "./../scss/commonHeader.scss";
	import router from "./../router/router.js";
	import VueRouter from "vue-router";
	import Vue from "vue";
	Vue.use(VueRouter)
	export default {
		data(){
			return {

			}
		},methods:{
			toCity(){
				router.push({
					path:'/city',
				})
			},toHome(){
				router.push({
					path:'/home'
					})
			},toLogin(){
				router.push({
					path:'/login'
					})
			},
			search(){
			    $("#searchbox").toggle()
			},
			btn(){
			    var word = this.word
			    router.push({path:"list",query:{word:word}})
			  console.log(word)
			}
		},
	}
</script>

<style scoped>
span:nth-of-type(4){
    font-size: 12px;
    color: #ccc;
}
</style>