/**
 * [shoppingListReducer 商品列表的reducer]
 * @param  {string} state  [状态]
 * @param  {object} action [动作]
 * @return [当前动作对应的内容]
 */
const defaultState = {state:0,food:[]};
const shoppingListReducer = (state = defaultState,action) => {
	let timestamp = Date.parse(new Date());
	switch(action.type){
		case 'VIEW_DETAIL'://详情数据
			return Object.assign({},state,action);
		case 'VIEW_NOTICE'://显示公告
			return Object.assign({},state,action);
		case 'SCROLL_ELEMENT'://滚动到某个元素
			return Object.assign({},state,action);
		case 'ADD_SHOPPING'://添加商品
			delete action.food['food'];
			if(!state.food.length){
				state.food.push(action.food);
				++state.food[0].count;
			}
			else {
				let bool = false;
				for (let i = 0; i < state.food.length; ++i) {
					if(action.food.shoppingId == state.food[i].shoppingId){
						++state.food[i].count;
						bool = true;
					}
				}
				if(!bool){
					++action.food.count;
					state.food.push(action.food);
				}
			}
			return Object.assign({},state,{time:timestamp});
		case 'DEL_SHOPPING'://删除商品
			if(state.food.length){
				let num = 0;
				for (let i = 0; i < state.food.length; ++i) {
					if(action.food.shoppingId == state.food[i].shoppingId){
						--state.food[i].count;
						num = i;
					}
				}
				if(state.food[num].count < 1){
					state.food.splice(num,1);
				}
			}

			return Object.assign({},state,{time:timestamp});
		case 'BILLING_SHOPPING'://商品结算
			console.log('商品结算');
			return Object.assign({},state,{time:timestamp});
		case 'CLEAR_SHOPPING'://清空商品
			state.food.splice(0,state.food.length);
			return Object.assign({},state,{time:timestamp});
		default:
			return state;
	}
}

const asd = action => (dispatch,getState) => {
	dispatch(action);
}
const addShoppingCount = action => (dispatch,getState) => {
	dispatch(action);
}
const delShoppingCount = action => (dispatch,getState) => {
	dispatch(action);
}
export {shoppingListReducer,asd,addShoppingCount,delShoppingCount};