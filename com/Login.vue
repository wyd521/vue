<template>
	<div class="loginContent">
		<div class="loginMain">
			<img src="../img/login.png">
			<input type="text" placeholder="手机号">
			<input type="text" placeholder="短信验证" >
			<button>获取验证码</button>
			<input type="button" value="登录" @click="toU()" >
			<p>未注册的用户登录后自动创建账户</p>
			<p>登录既表示已经同意<a href="https://topic.ricebook.com/topicpage/agreement.html">用户协议</a></p>
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
			toU(){
				router.push({
					path:'/home'
					})
				localStorage.setItem("IsLogin","1")
			}
		}
	}
</script>

<style scoped>
.loginContent{
	width: 100%;
	height: 100%;
}.loginMain{
	width: 100%;
	height: 100%;
	padding: 30px;
	box-sizing: border-box;
}.loginMain img{
	display: block;
	width: 150px;
	height: 45px;
	margin: 10px auto;
}.loginMain input{
	border: 0;
	border: 1px solid #888888;
	border-radius: 3px 3px ;
	color: #888888;
	margin: 30px auto;
	width: 100%;
	display: block;
	height:42px;
	box-shadow:1px 1px rgba(0,0,0,0.2);
}.loginMain input:nth-of-type(2){
	width: 50%;
	margin:20px 0px;
}.loginMain input:nth-of-type(3){
	text-align: center;
	border: 0;
	background: #000;
	color: #fff;
	box-shadow:1px 1px rgba(0,0,0,0.2);
}
.loginMain button{
	font-size: 14px;
	width: 110px;
	height: 40px;
	border: 0;
	border:1px solid #999999;
	background: #fff;
	color: #888888;
}.loginMain p:nth-of-type(1){
	width: 80%;
	margin: 0 auto;
	margin-top: 100px;
	color: #888888;
	font-size: 12px;
	text-align: center;
}.loginMain p:nth-of-type(2){
	width: 80%;
	color: #888888;
	font-size: 12px;
	text-align: center;
	display: block;
	margin:10px auto;
}.loginMain p:nth-of-type(2) a{
	text-decoration: underline;
}
</style>