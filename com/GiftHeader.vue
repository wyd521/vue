<template>
	<div>
		
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
		},mounted(){
//			var that = this;
//			var url = "https://api.ricebook.com/meereen/v1/invitation_code/detail.json";
//			MyAjax.vueJson(url,function(res){
//				console.log(res)
//				that.classList = res.result;
//			},function(err){
//				console.log(err)
//			})
		}
	}
</script>

<style scoped>
</style>