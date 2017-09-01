<template>
	<div class="cityConent">
		<div class="cityList">
			<h2>
				本次服务开通城市
			</h2>
			<ul>
				<li><a>上海</a></li>
				<li><a>北京</a></li>
				<li><a>南京</a></li>
				<li><a>天津</a></li>
				<li><a>广州</a></li>
				<li><a>成都</a></li>
				<li><a>杭州</a></li>
				<li><a>深圳</a></li>
				<li><a>苏州</a></li>
				<li><a>西安</a></li>
				<li><a>重庆</a></li>
				<li><a>长沙</a></li>
			</ul>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
.cityConent{
	font-size:14px;
	color: #AAAAAA;
	width: 100%;
	height: 100%;
}
.cityList{
	width: 100%;
	height: 100%;
	padding:30px 20px;
	box-sizing: border-box;
}
.cityList ul{
	margin-top: 20px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
}
.cityList ul li{
	width: 33%;
	height: 36px;
	padding: 5px;
	box-sizing: border-box;
}
.cityList ul li a{
	font-size: 12px;
	color: #AAAAAA;
	line-height:25px;
	text-align: center;
	display: block;
	border: 1px solid #999999;
	width: 100%;
	height:100% ;
}

</style>