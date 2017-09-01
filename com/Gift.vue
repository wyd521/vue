<template>
	<div class="giftContent">
		<div class="giftmain">
			<img src="../img/gift.jpg">	
			<p>邀请好友加入ENJOY，给TA发放价值50元礼券。好友完成首单消费后，你亦可获得价值50元礼券</p>
			<button>即刻邀请</button>
			<i>已成功邀请<span>0</span>位 | 已获得<span>0</span>元礼券</i>
			<div></div>
			<em>——————奖励明细———————</em>
		</div>
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
	.giftContent{
		width: 100%;
		height: auto;
	}
	.giftmain{
		width: 100%;
	}
	.giftmain img{
		width: 100%;
		height: 123px;
	}
	.giftmain p{
		width: 90%;
		margin: 30px auto;
		font-size: 14px;
		color: #999;
		font-size: 500;
	}
	.giftmain button{
		outline: none;
		display: block;
		height: 38px;
		line-height: 38px;
		width: 30%;
		margin: 35px auto;
		border: 0;
		background: #FF3939;
		color: #fff;
		font-size: 14px;
		border-radius:5px 5px ;
	}
	.giftmain i{
		width: 67%;
		display: block;
		text-align: center;
		margin: 30px auto;
		font-style: normal;
		font-size:14px ;
		color: #999;
	}
	span{
		color: #FF6666;
	}
	.giftmain div{
		height: 18px;
		width: 90%;
		margin: 20px auto;
		border: 1px solid #ddd;
	}
	.giftmain em{
		width: 90%;
		display: block;
		text-align: center;
		margin: 60px auto;
		font-style: normal;
		font-size:12px ;
		color: #999;
	}
</style>