<template >
	<div class="box">
	  <ul class="ul">
	  	<span>本地服务</span>                                                                                                                                                                                                                                            
	  	<span>全国送</span>
	  </ul>
	  <ul class="list">
	    <li v-for="item in list" @click="todetail(item.product_id)">
	      <img v-if="si" :src="item.product_image" />
	      <div class="right">
	      	<p v-if="si">{{item.name}}</p>
        <span class="xianjia" v-if="si">{{item.price/100}}元/位</span   ><span class="yuanjia">￥{{item.original_price/100}}</span>
	      </div> 
	    </li>
	  </ul>
	</div>
</template>

<script>
    import MyAjax from "./../my/MyAjax.js";
	import router from "./../router/router.js";
	export default {
		data(){
			return {
				word:this.$route.query.word,
				list:[],
				product_id:[],
				si:false
			}
		},mounted(){
		  
      var that = this;
      var word = that.word
      var url = "https://api.ricebook.com/3/enjoy_product/search.json?city_id=104&keyword="+word+"&page=0"
      MyAjax.fetch(url,function(data){
        console.log(data.products)
        that.list = data.products
		that.si = true
      },function(err){
        console.log(err)
      })
    },
    methods:{
      todetail(b){
			    console.log(b)
			    router.push({path:"detail",query:{b:b}})
	      }
	    }
	}
</script>

<style scoped>
  .ul{width: 100%;height: 42px;line-height: 42px;display:flex;}
  .ul span{width: 49%;text-align: center;border-bottom: 1px solid #CCCCCC;}
  ul{width: 100%;}
  .list li{width: 90%;padding: 5%;position: relative;}
  img{width: 50%;}
  .right{width: 48%;float: right;}
  .list li p{width: 100%;font-size: 14px;}
  .list li .xianjia{font-size: 12px;color: red;padding: 5px 5px 0 0;}
  .list li .yuanjia{font-size: 12px;color: #92969C;text-decoration: line-through;}
</style>