<template>
	<header class="header">
		<div >
			<span @click="toKF()">分类</span>
			<span  @click="toCity()">ENJOY</span>
			<span class="iconfont" @click="toCity()">长沙&#xe633;</span>
			<span class="iconfont" @click="toLogin()">&#xe6e6;</span>
			<span class="iconfont"  @click="search()">&#xe651;</span>
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
	Vue.use(VueRouter);
	export default {
		data(){
			return {

			}
		},methods:{
			toCity(){
				router.push({
					path:'/city'
					})
			},
			search(){
			    $("#searchbox").toggle()
			},
			toKF(){
				router.push({
					path:'/kind_F'
					})
			},toLogin(){
				router.push({
					path:'/login'
					})
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
#searchbox{width: 100%;z-index: 100;position: relative;background: #fff;display: none;}
input{background: #F2F3F4;border: none;outline: none;padding: 10px;width: 70%;margin: 3% 5%;}
button{border: none;background: #fff;}
</style>