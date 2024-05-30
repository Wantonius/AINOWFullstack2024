import {useState} from 'react';
import ShoppingItem from '../models/ShoppingItem';
import Row from './Row';
import RemoveRow from './RemoveRow';
import EditRow from './EditRow';

interface State {
	removeIndex:number;
	editIndex:number;
}

interface Props {
	list:ShoppingItem[];
	remove(id:number):void;
	edit(item:ShoppingItem):void;
}

const ShoppingList = (props:Props) => {
	
	const [state,setState] = useState<State>({
		removeIndex:-1,
		editIndex:-1
	})
	
	const changeMode = (mode:string,index:number) => {
		switch(mode) {
			case "remove":
				setState({
					removeIndex:index,
					editIndex:-1
				})
				return;
			case "edit":
				setState({
					removeIndex:-1,
					editIndex:index
				})
				return;
			case "cancel":
				setState({
					removeIndex:-1,
					editIndex:-1
				})
				return;
			default:
				return;
		}
	}
}

export default ShoppingList;