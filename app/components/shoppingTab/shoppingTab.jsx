import React,{Component} from 'react';
import './shoppingTab.css';
/**
 * [ShoppingTab 商品分类列表]
 */
class ShoppingTab extends Component{
	constructor(props) {
		super(props);
		this._activeEl = this._activeEl.bind(this);
	}
	/**
	 * [_activeEl 当前选中的元素]
	 * @param  {number} id [当前元素id]
	 */
	_activeEl(id){
		const {bScroll,scrollTab} = this.props;
		scrollTab(id,false);
		bScroll.scrollToElement('#menu' + id);

	}
	render(){
		const {classList,active,bScroll} = this.props;
		return (<ul className="shoppingTab-left">
					{classList.map((oCurObj) => {
						let id = oCurObj.id;
						return <li data-id={id} key={id} onClick={() => {this._activeEl(id)}} className={active == id ? 'active':''}>
									<span>{oCurObj.className}</span>
								</li>
					})}
				</ul>)
	}
}

export {ShoppingTab};