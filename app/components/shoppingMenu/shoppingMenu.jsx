import React,{Component} from 'react';
import {Tabs,WhiteSpace} from 'antd-mobile';
import {ShoppingClass} from '../shoppingClass/shoppingClass.jsx'
import './shoppingMenu.css';
const TabPane = Tabs.TabPane;

/**
 * [ShoppingMenu 商品标签]
 */
class ShoppingMenu extends Component{
	constructor(props) {
		super(props);
		this.callback = this.callback.bind(this);
		this.handleTabClick = this.handleTabClick.bind(this);
	}
	callback(key){
		console.log('onChange', key);
	}
	handleTabClick(key){
		console.log('onTabClick', key);
	}
	render(){
		return (<div>
					<Tabs defaultActiveKey="1" animated={false} className="shoppingMenu" onChange={this.callback} onTabClick={this.handleTabClick}>
						<TabPane tab="商品" key="1">
							<ShoppingClass {...this.props} />
						</TabPane>
						<TabPane tab="评价" key="2">
							<div>
								选项卡二内容
							</div>
						</TabPane>
						<TabPane tab="商家" key="3">
							<div>
								选项卡三内容
							</div>
						</TabPane>
					</Tabs>
					<WhiteSpace />
				</div>)
	}
}

export {ShoppingMenu};