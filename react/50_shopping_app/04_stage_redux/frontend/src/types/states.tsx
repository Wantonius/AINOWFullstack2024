import ShoppingItem from '../models/ShoppingItem';

export interface LoginState {
	isLogged:boolean;
	token:string;
	loading:boolean;
	error:string;
	user:string;
}

export interface ShoppingState {
	list:ShoppingItem[];
	error:string;
}

export interface AppState {
	login:LoginState;
	shopping:ShoppingState;
}