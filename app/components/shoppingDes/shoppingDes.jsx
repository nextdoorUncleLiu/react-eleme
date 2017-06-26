import React,{Component} from 'react';
import LazyLoad from 'react-lazyload';
import './shoppingDes.css';
import {ShoppingStepper} from '../shoppingStepper/shoppingStepper.jsx'

/**
 * [ShoppingDes 商品分类]
 */

class ShoppingDes extends React.Component {
	constructor(props) {
		super(props);
		this.curPos = [];
	}
	/**
	 * [componentDidUpdate 组件更新结束之后执行]
	 */
	componentDidUpdate() {
		const {scrollTab,bScroll,active} = this.props;
		bScroll.on('scroll',(pos) => {//商品滚动
			const {scrollTab,scroll,active} = this.props;
			if(scroll){
				this.posCalc(this.curPos,pos.y)
			}
		})
		bScroll.on('scrollStart',() => {//商品滚动前
			const {scrollTab,scroll,active} = this.props;
			scrollTab(active,true)
		})

		let scrollUl = this.refs.scrollView;//获取分类高度
		for(let i=0; i<scrollUl.children.length;++i){
			this.curPos.push({
				index:this.props.classList[i].id,
				pos:scrollUl.children[i].offsetTop
			});
		}
	}
	/**
	 * [posCalc 二分法计算获取当前分类]
	 * @param  {array} pos [位置数组]
	 * @param  {number} y   [当前位置]
	 */
	posCalc(pos,y){
		const {scrollTab} = this.props;
		if(pos.length < 2){//只有一个分类返回当前位置
			scrollTab(pos[0].index,true);
			return;
		}
		let prevArr = pos.slice(0,parseInt(pos.length/2));
		let nextArr = pos.slice(parseInt(pos.length/2),pos.length);
		let prevArrLastIndex = prevArr.length - 1;
		let nextArrFirstIndex = 0;
		let prevArrLast = prevArr[prevArrLastIndex];
		let nextArrFirst = nextArr[nextArrFirstIndex];
		if(prevArrLast.pos > Math.abs(y)){
			this.posCalc(prevArr,y);
		}
		else if(prevArrLast.pos < Math.abs(y) && nextArrFirst.pos < Math.abs(y)){
			this.posCalc(nextArr,y);
		}
		else if(prevArrLast.pos < Math.abs(y) && nextArrFirst.pos > Math.abs(y)){
			scrollTab(prevArrLast.index,true);
			return;
		}

	}
	render() {
		const {classList,addShopping,delShopping,food} = this.props;
		return (
			<div id="shoppingTab-right" className="shoppingTab-right">
				<ul ref="scrollView">
					{classList.map(function(oCurObj){
						return (
							<li key={oCurObj.id} id={'menu' + oCurObj.id} data-id={oCurObj.id}>
								<div className="shoppingTab-Title">{oCurObj.className}</div>
								{oCurObj.shoppingList.map(function(rowData){
									return (<div key={'row' + rowData.shoppingId} className="row">
												<div className="shoppingCont">
													<img src={rowData.shoppingImgUrl} />
													<div className="row-text">
														<div className="row-title">{rowData.shoppingName}</div>
														<div className="shoppingDes">{rowData.shoppingDes}</div>
														<div className="shoppingDes">月售{rowData.shoppingSales}&nbsp;&nbsp;好评率{rowData.shoppingPraise}%</div>
														<div className="shoppingPrice"><span>￥{rowData.shoppingPrice}</span>&nbsp;&nbsp;<s>{rowData.shoppingBeforePrice}</s></div>
														<ShoppingStepper {...rowData} addShopping={addShopping} delShopping={delShopping} food={food} />
													</div>
												</div>
											</div>)
								})}
							</li>
						)
					})}
				</ul>
			</div>
		);
	}
}
export {ShoppingDes};