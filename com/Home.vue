<template>
	<div class="homeContent">
		<div class="homeList1" v-if="si">
			<p v-if="si">{{classList[0].data.group_section.title}}</p>
			<p v-if="si">{{classList[0].data.group_section.desc}}</p>
			<div class="swiper-container" id="banner">
				<ul class="swiper-wrapper">
					<li v-if="si" class="swiper-slide" v-for="item in classList[0].data.tabs">
						<img :src="item.url" v-if="si">
						<p v-if="si">{{item.tag}}</p>
						<p v-if="si">{{item.title}}</p>
						<p v-if="si">{{item.desc}}</p>
					</li>
				</ul>
				<div class="fj"></div>
			</div>
		</div>
		<div class="homeList2" v-if="si">
			<div class="swiper-container" id="banner2">
				<div class="swiper-wrapper" id="sw">
					<div class="swiper-slide" id="sww" v-for="it in classList[1].data.tabs">
						<p v-if="si">{{it.title}}</p>
						<p v-if="si">{{it.desc}}</p>
					</div>
				</div>
				<div class="fj"></div>
			</div>		
		</div>
		<div class="homeList3" v-if="si">
			<span id="span1">
				<p v-if="si">{{classList[2].data.group_section.title}}</p>
				<br>
				<p v-if="si">{{classList[2].data.group_section.desc}}</p>
			</span>
			<span id="span2">
				{{classList[2].data.group_section.enjoy_url_text}}
			</span>
			<div id="imgList">
				<div  v-for="ite in classList[2].data.tabs">
					<img v-if="si" id="img" :src="ite.url" :url='ite.enjoy_url' @click="toDetails($event)">	
				</div>	
			</div>
			<div class="fj"></div>
		</div>
		<div class="homeList4" v-if="si">
			<span id="span1">
				<p v-if="si">{{classList[3].data.group_section.title}}</p>
				<br>
				<p v-if="si">{{classList[3].data.group_section.desc}}</p>
			</span>
			<span id="span2">
				{{classList[3].data.group_section.enjoy_url_text}}
			</span>
			<div id="imgList">
				<div  v-for="ite in classList[3].data.tabs">
					<img v-if="si" id="img" :src="ite.url" :url='ite.enjoy_url' @click="toDetails($event)">	
				</div>	
			</div>
			<div class="fj"></div>
		</div>
		<div class="homeList5" v-if="si">
			<span id="span1">
				<p v-if="si">{{classList[4].data.group_section.title}}</p>
				<br>
				<p v-if="si">{{classList[4].data.group_section.desc}}</p>
			</span>
			<span id="span2">
				{{classList[4].data.group_section.enjoy_url_text}}
			</span>
			<div id="imgList">
				<div  v-for="ite in classList[4].data.tabs">
					<img v-if="si" id="img" :src="ite.url" :url='ite.enjoy_url' @click="toDetails($event)">	
				</div>	
			</div>
			<div class="fj"></div>
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
			var url = "https://api.ricebook.com/hub/home/v1/web/explore.json?city_id=401";
			MyAjax.vueJson(url,function(data){
				console.log(data)
				that.classList = data;
				that.si=true
			},function(err){
				console.log(err)
			})
		},updated(){
			var mySwiper = new Swiper("#banner",{
		        slidesPerView:'auto',
		        paginationClickable: true,
		        spaceBetween: 30
			})
			var mySwiper2 = new Swiper("#banner2",{
		        slidesPerView:'auto',
		        paginationClickable: true,
		        spaceBetween: 10
			})
		}
	}
</script>

<style scoped>
.homeContent{
	width: 100%;
	height: auto;
}

.homeList1{
	width: 100%;
	height: 350px;
}
.homeList1 p{
	padding: 5px 20px;
	box-sizing: border-box;	
	font-size:14px ;
}
.homeList1 p:nth-of-type(1){
	margin-top: 10px;
	font-size: 24px;	
}
.homeList1 p:nth-of-type(2){
	font-size: 12px;	
	color: #888888;
}
.homeList1 .swiper-container{
	width: 100%;
	height: 300px;
}
.fj{
	width: 90%;
	height: 1px;
	border-bottom:1px solid #ccc ;
	margin: 10px auto;
}
.homeList1 .swiper-wrapper{
	width: 100%;
	height: 280px;
}
.swiper-wrapper .swiper-slide{
	margin-left: 15px;
	width: 80%;
}
.swiper-wrapper .swiper-slide p:nth-of-type(1){
	font-size: 12px;
	color: red;
	padding: 8px 0px;
}
.swiper-wrapper .swiper-slide p:nth-of-type(2){
	font-size:16px;
	color: #000;
	padding:3px 0px;
	font-weight:600 ;
}
.swiper-wrapper .swiper-slide p:nth-of-type(3){
	font-size:12px;
	color: #ccc;
	padding:3px 0px;
}
.swiper-wrapper img{
	width: 330px;
	height: 189px;
}
.homeList2{
	margin-top: 20px;
	width: 100%;
	height: 100px;
}
.homeList2 #sw{
	height: 100px;
	width: 100%;
}
.homeList2 #sw #sww{
	height: 91px;
	width: 42%;
	background:rgba(0,0,0,0.6);
}
.homeList2 #sw #sww p{
	line-height: 30px;
	text-align: center;
	color: #fff;
	font-size:16px ;
}
.homeList3,.homeList4,.homeList5{
	margin-top: 20px;
	width: 100%;
	height:215px;
	padding:5px 20px;
	box-sizing: border-box;
}
#span1 p{
	font-size: 12px;
	width: 30%;
	display: inline;
	color: #AAAAAA;
}
#span1 p:nth-of-type(1){
	font-size: 22px;
	color: #000000;
}
#span2{
	margin-left:70px;
	color: red;
}
#imgList {
	width: 95%;
	margin: 0 auto;
	height: 120px;
	display: flex;
	box-sizing: border-box;
	padding: 10px 0;
}
#img{
	width: 105px;
	height: 105px;
}

</style>