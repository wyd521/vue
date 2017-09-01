<template>
	<div class="userContent">
		<div class="userMy">
			<div>
				<img src="../img/user.png">
				<p>ENJOY_65xg3Nlc</p>
			</div>	
		</div>
		<span><a>Code 消费码</a></span>
		<span><a>我的礼券</a></span>
		<span><a>地址管理</a></span>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				
			}
		}
	}
</script>

<style scoped>
	.userContent{
		height: auto;
		width: 100%;
		height: 100%;
		background: #F6F6F6;
	}
	.userMy{
		display: flex;
		width: 100%;
		align-items: center;
		justify-content: center;
		height: 200px;
		background: #000000;
	}
	.userMy div{
		text-align: center;
	}
	.userMy div img{
		width: 70px;
		height: 70px;
	}
	.userMy div p{
		margin-top: 10px;
		color: #fff;
		font-weight: 700;
	}
	span{
		font-size: 14px;
		color:#999;
		line-height: 72px;
		display: block;
		width: 100%;
		height: 72px;
		background: #fff;
	}
	span a{
		display: block;
		width: 60%;
		margin-left:8%;
	}
	span:nth-of-type(1){
		color: #222;
		font-size: 18px;
		font-weight: 600;
		margin-top: 10px;
	}
	span:nth-of-type(2){
		margin-top: 10px;
		border: 1px solid #eee;
	}
</style>