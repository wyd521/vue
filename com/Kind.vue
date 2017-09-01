<template>
	<div class="kindContent">
		<div class="kindList" v-for="item in classList">
			<p>{{item.group_section.title}}</p>
			<p>{{item.group_section.desc}}</p>	
			<ul>
				<li v-for="it in item.tabs" >
					<img :src='it.url' :url='it.enjoy_url' @click="toDetails($event)">
					<p v-if="si">{{it.title}}</p>
					<p v-if="si">{{it.desc}}</p>
				</li>
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
				proList:[],
				si:false
			}
		},methods:{
			toDetails(ev){
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
			var that = this;
			var url = "https://api.ricebook.com/hub/home/v1/web/week_choice.json?city_id=401&page=0";
			MyAjax.vueJson(url,function(data){
				console.log(data)
				that.si = true;
				that.classList = data;
			},function(err){
				console.log(err)
			})
		}
	}
</script>

<style scoped>
	.kindContent{
		height: auto;
		width: 100%;
	}
	.kindList{
		width: 100%;
		box-sizing: border-box;
		padding: 30px 20px;
	}
	p:nth-of-type(1){
		font-size: 22px;
		color:#111;
	}
	p:nth-of-type(2){
		margin-top: 8px;
		font-size: 12px;
		color: red;
	}
	li{
		height: 335px;
		box-sizing: border-box;
		padding: 20px 0px;
		border-bottom: 1px solid #ddd;
	}
	li p:nth-of-type(1){
		text-overflow:ellipsis; 
		overflow:hidden;
		white-space:nowrap; 
		width:100%; 
		margin-top: 15px;
		font-size: 16px;
		color: #888;
	}
	li p:nth-of-type(2){
		margin-top:8px;
		font-size: 12px;
		color: #aaa;
	}
	img{
		height:223px;
	}
</style>