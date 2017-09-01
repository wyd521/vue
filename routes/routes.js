//1。引入组件，用于路由对应的页面
import Home from "./../com/Home.vue";
import Kind from "./../com/Kind.vue";
import Cart from "./../com/Cart.vue";
import User from "./../com/User.vue";
import More from "./../com/More.vue";
import Detail from "./../com/Detail.vue";
import Gift from "./../com/Gift.vue";
import City from "./../com/City.vue";
import Kind_F from "./../com/Kind_F.vue";
import Login from "./../com/Login.vue";
import List from "./../com/List.vue";
import Pay from "./../com/Pay.vue";
import Ppp from "./../com/Ppp.vue";

import HomeHeader from "./../com/HomeHeader.vue";
import Kind_FHeader from "./../com/Kind_FHeader.vue";
import KindHeader from "./../com/KindHeader.vue";
import CartHeader from "./../com/CartHeader.vue";
import UserHeader from "./../com/UserHeader.vue";
import MoreHeader from "./../com/MoreHeader.vue";
import GiftHeader from "./../com/GiftHeader.vue";
import CityHeader from "./../com/CityHeader.vue";
import MainFooter from "./../com/MainFooter.vue";
import DetailFooter from "./../com/DetailFooter.vue";
import MoreFooter from "./../com/MoreFooter.vue";
import CityFooter from "./../com/CityFooter.vue";
// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。

const routes = [
{path:"/",redirect:"/home"},
	{path:"/home",components:{
		default:Kind,
		header:KindHeader,
		footer:MainFooter
	}},
	{path:"/kind",components:{
		default:Home,
		header:HomeHeader,
		footer:MainFooter
	}},
	{path:"/ppp",components:{
		default:Ppp
	}},
	{path:"/kind_F",components:{
		default:Kind_F,
		header:Kind_FHeader
	}},
	{path:"/pay",components:{
		default:Pay,
	}},
	{path:"/city",components:{
		default:City,
		header:CityHeader
	}},
	{path:"/list",components:{
		default:List,
		header:HomeHeader
	}},
	{path:"/cart",components:{
		default:Cart,
		header:CartHeader,
	}},
	{path:"/user",components:{
		default:User,
		header:UserHeader,
		footer:MainFooter
	}},	
	{path:"/login",components:{
		default:Login
	}},	
	{path:"/gift",components:{
		default:Gift,
		header:GiftHeader,
		footer:MainFooter
	}},
	{path:"/more",components:{
		default:More,
		header:MoreHeader,
		footer:MoreFooter
	}},
	{path:"/detail",components:{
		default:Detail,
		header:HomeHeader,
		footer:DetailFooter
	}}
];


export default routes;