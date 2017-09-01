<template>
	<div class="container">
			<router-view name="header"></router-view>
		<div id="content">
			<router-view ></router-view>
		</div>
			<router-view name="footer"></router-view>
	</div>
</template>

<script>
	import MainFooter from "./MainFooter.vue";
	export default {
		data(){
			return {
				
			}
		},
		methods:{
			
		},
		components:{
			"v-footer":MainFooter
		}
		
	}
</script>

<style type="text/css">

</style>
