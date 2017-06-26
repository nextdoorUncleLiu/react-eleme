import React,{Component} from 'react';
import './shoppingClass.css';
import {ShoppingTab} from '../shoppingTab/shoppingTab.jsx';
import {ShoppingDes} from '../shoppingDes/shoppingDes.jsx';
import {ShoppingTotal} from '../shoppingTotal/shoppingTotal.jsx';
import BScroll from 'better-scroll';

/**
 * [ShoppingClass 商品分类]
 */
class ShoppingClass extends Component{
	constructor(props) {
		super(props);
		this.state = {
			myscroll:''
		}
	}
	/**
	 * [componentDidMount 在页面被渲染之前执行]
	 */
	componentDidMount() {
		this.state.myscroll = new BScroll(document.querySelector('#shoppingTab-right'),{//初始化BScroll对象
			probeType:3
		});
		this.setState({
			myscroll:this.state.myscroll
		})
	}
	render(){
		return (<div className="shoppingClass">
					<ShoppingTab {...this.props} bScroll={this.state.myscroll} ref="ShoppingTab" />
					<ShoppingDes {...this.props} bScroll={this.state.myscroll} ref="ShoppingDes" />
					<ShoppingTotal {...this.props} />
				</div>)
	}
}
ShoppingClass.defaultProps = {
	active:1,
	classList:[
		{
			id:1,
			className:'热销榜',
			shoppingList:[
				{
					shoppingId:11,
					shoppingImgUrl:'./img/shopImg.png',
					shoppingName:'皮蛋瘦肉粥',
					shoppingDes:'咸粥',
					shoppingSales:1132,
					shoppingPraise:100,
					shoppingPrice:24,
					shoppingBeforePrice:28
				},
				{
					shoppingId:12,
					shoppingImgUrl:'./img/shopImg.png',
					shoppingName:'核桃黑米粥',
					shoppingDes:'甜粥',
					shoppingSales:1132,
					shoppingPraise:100,
					shoppingPrice:24
				}
			]
		},
		{
			id:2,
			className:'单人套餐食品',
			shoppingList:[
				{
					shoppingId:21,
					shoppingImgUrl:'./img/shopImg.png',
					shoppingName:'八宝粥',
					shoppingDes:'咸粥',
					shoppingSales:100,
					shoppingPraise:95,
					shoppingPrice:14,
					shoppingBeforePrice:18
				},
				{
					shoppingId:22,
					shoppingImgUrl:'./img/shopImg.png',
					shoppingName:'八宝粥1',
					shoppingDes:'咸粥',
					shoppingSales:100,
					shoppingPraise:95,
					shoppingPrice:14,
					shoppingBeforePrice:18
				},
				{
					shoppingId:23,
					shoppingImgUrl:'./img/shopImg.png',
					shoppingName:'八宝粥2',
					shoppingDes:'咸粥',
					shoppingSales:100,
					shoppingPraise:95,
					shoppingPrice:14,
					shoppingBeforePrice:18
				},
				{
					shoppingId:24,
					shoppingImgUrl:'./img/shopImg.png',
					shoppingName:'八宝粥3',
					shoppingDes:'咸粥',
					shoppingSales:100,
					shoppingPraise:95,
					shoppingPrice:14,
					shoppingBeforePrice:18
				},
				{
					shoppingId:25,
					shoppingImgUrl:'./img/shopImg.png',
					shoppingName:'八宝粥4',
					shoppingDes:'咸粥',
					shoppingSales:100,
					shoppingPraise:95,
					shoppingPrice:14,
					shoppingBeforePrice:18
				}
			]
		},
		{
			id:3,
			className:'热销榜',
			shoppingList:[
				{
					shoppingId:31,
					shoppingImgUrl:'./img/shopImg.png',
					shoppingName:'皮蛋瘦肉粥',
					shoppingDes:'咸粥',
					shoppingSales:1132,
					shoppingPraise:100,
					shoppingPrice:24,
					shoppingBeforePrice:28
				},
				{
					shoppingId:32,
					shoppingImgUrl:'./img/shopImg.png',
					shoppingName:'核桃黑米粥',
					shoppingDes:'甜粥',
					shoppingSales:1132,
					shoppingPraise:100,
					shoppingPrice:24
				}
			]
		},
		{
			id:4,
			className:'单人套餐食品',
			shoppingList:[
				{
					shoppingId:41,
					shoppingImgUrl:'./img/shopImg.png',
					shoppingName:'八宝粥',
					shoppingDes:'咸粥',
					shoppingSales:100,
					shoppingPraise:95,
					shoppingPrice:14,
					shoppingBeforePrice:18
				},
				{
					shoppingId:42,
					shoppingImgUrl:'./img/shopImg.png',
					shoppingName:'八宝粥1',
					shoppingDes:'咸粥',
					shoppingSales:100,
					shoppingPraise:95,
					shoppingPrice:14,
					shoppingBeforePrice:18
				},
				{
					shoppingId:43,
					shoppingImgUrl:'./img/shopImg.png',
					shoppingName:'八宝粥2',
					shoppingDes:'咸粥',
					shoppingSales:100,
					shoppingPraise:95,
					shoppingPrice:14,
					shoppingBeforePrice:18
				},
				{
					shoppingId:44,
					shoppingImgUrl:'./img/shopImg.png',
					shoppingName:'八宝粥3',
					shoppingDes:'咸粥',
					shoppingSales:100,
					shoppingPraise:95,
					shoppingPrice:14,
					shoppingBeforePrice:18
				},
				{
					shoppingId:45,
					shoppingImgUrl:'./img/shopImg.png',
					shoppingName:'八宝粥4',
					shoppingDes:'咸粥',
					shoppingSales:100,
					shoppingPraise:95,
					shoppingPrice:14,
					shoppingBeforePrice:18
				}
			]
		}
	],
	toSend:20,
	deliveryFee:4
}
export {ShoppingClass};