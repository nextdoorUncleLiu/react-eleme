import React,{Component} from 'react';
import NextIco from './nextIco.png';
import NoticeCont from './noticeCont.png';
import './shoppingHead.css';

/**
 * [ShoppingHead 商品头部]
 */
class ShoppingHead extends Component{
	constructor(props) {
		super(props);
        this._isViewBrand = this._isViewBrand.bind(this);
        this._isDiscount = this._isDiscount.bind(this);//判断是否有优惠
	}
	/**
	 * [_isViewBrand 判断是否是品牌]
	 * @param  {boolean}  bIsBrand [是否是品牌]
	 * @return {element}           [显示的元素]
	 */
	_isViewBrand(bIsBrand){
		if(bIsBrand){
			return <span>品牌</span>
		}
	}
	/**
	 * [_isDiscount 判断是否有优惠]
	 * @param  {boolean}  bDiscount [是否有优惠]
	 * @return {element}            [显示的元素]
	 */
	_isDiscount(bDiscount){
		if(bDiscount){
			let str = '在线支付';
			this.props.discountRatio.map(function(oCurObj,nIndex){
				str += '满' + oCurObj.reach + '减' +oCurObj.reduce + ',';
			})
			str = str.substring(0, str.length - 1);
			return <span><i>减</i>{str}</span>
		}
	}
	render(){
		const {
			imgUrl,
			isBrand,
			shoppingName,
			distributionMode,
			serviceTime,
			discount,
			activityCount,
			viewDetail,
			noticeCont,
			viewNotice
		} = this.props;
		return (
			<header style={{"backgroundImage":'url('+imgUrl+')'}}>
				<div className="shoppingDetails">
					<img src={imgUrl} />
					<div className="shoppingTit">
						<h3>
							{this._isViewBrand(isBrand)}
							{shoppingName}
						</h3>
						<p>{distributionMode}/{serviceTime}分钟送达</p>
						{this._isDiscount(discount)}
					</div>
					<button onClick={viewDetail}>{activityCount}个</button>
				</div>
				<div className="shoppingNotice" onClick={viewNotice}>
					<span>公告</span>
					{noticeCont}
					<i></i>
				</div>
			</header>
		)
	}
}
ShoppingHead.defaultProps = {
    imgUrl:"./img/shopImg.png",//图片路径
    isBrand:true,//是否是品牌
    shoppingName:"宏状元",//店铺名称
    distributionMode:"蜂鸟专送",//配送方式
    serviceTime:38,//送达时间
    discount:true,
    discountRatio:[{reach:28,reduce:5},{reach:29,reduce:6}],
    activityCount:5,
    noticeCont:'公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容'
}
export {ShoppingHead};