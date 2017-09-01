<template>
	<div class="kind_FContent">
		<div class="kind_FList" v-for="item in classList">
			<p v-if="si">{{item.name}}</p>
			<ul>
				<li v-for="it in item.sub_category_list"><a @click="toList()" v-model="word" v-if="si">{{it.name}}</a></li>
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
				si:false
			}
		},methods:{
			toList(){
				var word = this.word
			    router.push({path:"list",query:{word:word}})
			  	console.log(word)
			}
		},mounted(){
			var that = this;
			var url = "https://api.ricebook.com/hub/home/v1/virtual/category.json?city_id=401&is_new_local=true";
			MyAjax.vueJson(url,function(data){
				console.log(data)
				that.classList = data;
				that.si = true
			},function(err){
				console.log(err)
			})
		}
	}
</script>
<!--https://s1.ricebook.com/cdn/home/djEvdmlydHVhbC9pbl9jYXRlZ29yeS5qc29uP2NpdHlfaWQ9NDAxJmlzX25ld19sb2NhbD1mYWxzZSZtZDU9YTg3YzQzZWU0ZTAyY2VhYmNkMGM2MTJhZmJhYWI0N2MmMjAxNzA4MjExNTAw.json-->

<style scoped>
	.kind_FContent{
		width: 100%;
		background: #F6F6F6;
	}
	.kind_FList{
		width: 100%;
		box-sizing: border-box;
	}
	p{
		height: 35px;
		line-height: 35px;
		margin-left:6%;
	}
	ul{
		width: 100%;
		display:flex;
		flex-wrap:wrap;
		background: #fff;
	}
	ul li{
		width: 122px;
		height: 46px;
		line-height: 46px;
		text-align: center;
		border: 1px solid #F6F6F6;
	}
</style>