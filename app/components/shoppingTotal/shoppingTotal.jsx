import React,{Component} from 'react';
import './shoppingTotal.css';
import {ShoppingStepper} from '../shoppingStepper/shoppingStepper.jsx'

/**
 * [ShoppingTotal 商品分类]
 */

class ShoppingTotal extends React.Component {
	constructor(props) {
		super(props);
		this._prevTotal = 0;
		this._nextTotal = 0;
		this.state = {
			viewList:false
		}
	}
	/**
	 * [_diffTotal 当前选中商品的价格]
	 * @return {number} [当前选中商品的价格]
	 */
	_diffTotal(){
		const {food} = this.props;
		let price = 0;
		for(let i=0;i<food.length;++i){
			price += food[i].shoppingPrice * food[i].count;
		}
		return price;
	}
	/**
	 * [_canSettled 结算价]
	 * @return {string} [结算价]
	 */
	_canSettled(){
		const {toSend} = this.props;
		let curPrice = this._diffTotal();
		let difference = curPrice - toSend;
		let str = '';
		let state = false;
		if(difference >= 0){
			str = '可结算';
			state = true;
		}
		else {
			str = `还差￥${Math.abs(difference)}起送`;
			state = false;
		}
		return {str:str,state:state};
	}
	/**
	 * [_viewList 显示已选中商品列表]
	 */
	_viewList(event){
		let viewList = this.state.viewList;
		if(viewList){
			viewList = false;
		}
		else {
			viewList = true;
		}
		this.setState({
			viewList:viewList
		})
		event.stopPropagation();
	}
	_clearShopping(event){
		const {clearShopping} = this.props;
		clearShopping();
		event.stopPropagation();
	}
	render() {
		const {food,total,toSend,deliveryFee,billingShopping,addShopping,delShopping} = this.props;
		let state = this._canSettled().state;
		return (
			<div className={this.state.viewList && food.length?"shoppingTotalMain shoppingTotalMainActive":"shoppingTotalMain"} onTouchTap={(event) => {this._viewList(event)}}>
				<div className="shoppingTotal">
					<div className={total?'totalBall active':'totalBall noGoods'} onTouchTap={state?(event) => {this._viewList(event)}:''} ref="totalBall" data-total={total}>
					</div>
					<div className="priceTotal">
						<p>
							<span className="curTotal">￥{this._diffTotal()}</span>
							<span className="deliveryFee">另需配送费￥{deliveryFee}</span>
						</p>
						<button className={state?'active':''} onTouchTap={state?(event) => {event.stopPropagation();billingShopping(event)}:''}>{this._canSettled().str}</button>
					</div>
				</div>
				<div className={this.state.viewList && food.length?"shoppingTotalList shoppingTotalListActive":"shoppingTotalList"}  onTouchTap={(event) => {event.stopPropagation();}}>
					<h3>购物车<a href="javascript:;" onTouchTap={(event) => {this._clearShopping(event)}}>清空</a></h3>
					<ul>
						{food.map(function(oCurObj){
							return (
								<li key={oCurObj.shoppingId}>
									<h4>{oCurObj.shoppingName}</h4>
									<span>￥{oCurObj.count * oCurObj.shoppingPrice}</span>
									<ShoppingStepper shoppingId={oCurObj.shoppingId} addShopping={addShopping} delShopping={delShopping} food={food} />
								</li>
							)
						})}
					</ul>
				</div>
			</div>
		);
	}
	componentWillUpdate(){//接收到新的props或者state后，进行渲染之前调用
		const {total,food} = this.props;
		this._prevTotal = total;
		if(!food.length){
			this.state.viewList = false;
		}
	}
	componentDidUpdate(){//完成渲染新的props或者state后调用
		const {total} = this.props;
		let totalBall = this.refs.totalBall;
		this._nextTotal = total;
		if(total && this._prevTotal < this._nextTotal){
			totalBall.className = 'totalBall active animation';
			setTimeout(() => {
				let prevClass = totalBall.className;
				let nextClass = prevClass.split(' animation');
				totalBall.className = nextClass[0];
			},1000)
		}

	}
}
export {ShoppingTotal};