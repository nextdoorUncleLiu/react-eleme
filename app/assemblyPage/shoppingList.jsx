import React,{Component} from 'react';
import {ShoppingHead} from '../components/shoppingHead/shoppingHead.jsx';
import {ShoppingMenu} from '../components/shoppingMenu/shoppingMenu.jsx';
import {asd,addShoppingCount,delShoppingCount} from '../store/shoppingListReducer.js';
import {connect} from 'react-redux';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin.default();

/**
 * [ShoppingListAggregate 商品列表页的集合]
 */
class ShoppingListAggregate extends Component {
	constructor(props) {
		super(props);
	}
	render(){
		return (
			<div>
				<ShoppingHead {...this.props} />
				<ShoppingMenu {...this.props} />
			</div>
		)
	}
}

/**
 * [mapStateToProps 从状态到属性的映射]
 * @param  {object} state [映射的状态]
 */
const mapStateToProps = (state) => {
	let shoppingListReducer = state.shoppingListReducer;
	let food = shoppingListReducer.food;
	let total = 0;
	for(let i=0;i<food.length;++i){
		total += food[i].count;
	}
	shoppingListReducer['total'] = total;/*购物车订单总计*/
	return shoppingListReducer;
}

/**
 * [mapDispatchToProps 从动作到属性的映射]
 * @param  {object} dispatch [消息派送]
 */
const mapDispatchToProps = (dispatch) =>{
	return {
		viewDetail: () => {//显示详情
			dispatch(asd({
				type: 'VIEW_DETAIL',
				shoppingName: '1'
			}));
		},
		viewNotice: () => {//查看公告
			dispatch({
				type: 'VIEW_NOTICE',
				noticeCont: '2'
			})
		},
		scrollTab:(key,state) => {//选中tab标签
			dispatch({
				type:'SCROLL_ELEMENT',
				active:key,
				scroll:state
			})
		},
		addShopping:(props) => {//添加商品
			dispatch(addShoppingCount({
				type:'ADD_SHOPPING',
				food:props
			}))
		},
		delShopping:(props) => {//删除商品
			dispatch(delShoppingCount({
				type:'DEL_SHOPPING',
				food:props
			}))
		},
		billingShopping:() => {//结算商品
			dispatch({
				type:'BILLING_SHOPPING'
			})
		},
		clearShopping:() => {
			dispatch({
				type:'CLEAR_SHOPPING'
			})
		}
	}
}

const ShoppingList = connect(mapStateToProps,mapDispatchToProps)(ShoppingListAggregate);

export {ShoppingList};