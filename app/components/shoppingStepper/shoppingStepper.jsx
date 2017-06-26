import React,{Component} from 'react';
import './shoppingStepper.css';
/**
 * [ShoppingStepper 商品步进器]
 */
class ShoppingStepper extends Component{
	constructor(props) {
		super(props);
		this.state = {count : 0};
		this._stepperBtn = this._stepperBtn.bind(this);
	}
	/**
	 * [_stepperBtn 步骤按钮]
	 * @param  {string} type [按钮类型]
	 */
	_stepperBtn(event,type){
		const {addShopping,delShopping} = this.props;
		switch(type){
			case 'add':
				this._ballAnimation();
				addShopping(Object.assign({},this.props,this.state))
				break;
			case 'del':
				delShopping(Object.assign({},this.props,this.state))
				break;
		}
		event.stopPropagation();
	}
	/**
	 * [_ballAnimation 圆点的抛物线动画]
	 */
	_ballAnimation(){
		let shoppingStepper = this.refs.ball;//当前添加按钮
		let ball = document.createElement('div');//抛出去圆点的父级
		ball.className = 'ball';
		document.body.appendChild(ball);//添加到body内
		let inner = document.createElement('div');//抛出去的圆点
		inner.className = 'inner';
		ball.appendChild(inner);
		let rect = this.refs.add.getBoundingClientRect();//获取当前添加按钮的坐标
		ball.style.top = rect.top + 'px';//控制圆点父级的初始位置
		let x = rect.left - 20;
		let y = (window.innerHeight - rect.top - 30);
		ball.style.display = '';
		ball.style.webkitTransform = `translate3d(0,${y}px,0)`;
		ball.style.transform = `translate3d(0,${y}px,)0`;
		inner.style.webkitTransform = `translate3d(${-x}px,0,0)`;
		inner.style.transform = `translate3d(${-x}px,0,0)`;
		setTimeout(function(){
			document.body.removeChild(ball);//动画结束后移除圆点
		},400);
	}
	render(){
		const {food,shoppingId} = this.props;
		let count = 0;
		for(let i = 0;i<food.length;++i){
			if(food[i].shoppingId == shoppingId){
				count = food[i].count;
			}
		}
		return (
			<div className="shoppingStepper" ref="ball">
				<a href="javascript:" ref="del" className={count > 0 ? "cart-minus":"no-count"} onTouchTap={(event) => {this._stepperBtn(event,'del')}}>
					<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
						<line x1="2" y1="8" x2="14" y2="8" style={{stroke:'#009ede',strokeWidth:2}} />
					</svg>
				</a>
				<span className={count > 0 ? "":"no-count"}>{count}</span>
				<a href="javascript:" ref="add" className={count > 0 ? "cart-add":"cart-add no-count"} onTouchTap={(event) => {this._stepperBtn(event,'add')}}>
					<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
						<line x1="2" y1="8" x2="14" y2="8" style={{stroke:'#fafdff',strokeWidth:2}} />
						<line x1="8" y1="2" x2="8" y2="14" style={{stroke:'#fafdff',strokeWidth:2}} />
					</svg>
				</a>
			</div>
		)
	}
}

export {ShoppingStepper};