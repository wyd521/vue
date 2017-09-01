<template>
<footer id="footer">
	<ul>
		<li ><router-link to="/home" class="iconfont">&#xe677;</router-link></li>
		<li ><router-link to="/kind" class="iconfont">&#xe632;</router-link></li>
		<li ><router-link to="/gift" class="iconfont">&#xe64c;</router-link></li>
		<li ><router-link to="/user" class="iconfont">&#xe67a;</router-link></li>
	</ul>
</footer>
</template>

<script>
	import "./../scss/main.scss";
	export default {
		data(){
			return {
				
			}
		},
		methods:{
			
		}
	}
</script>

<style scoped>
	.router-link-exact-active.router-link-active{
		color:#000;
	}
</style>