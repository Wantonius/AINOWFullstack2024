import React,{useState} from 'react';
import Square from './Square';
import Label from './Label';

interface State {
	color:string;
}

const Card = () => {
	
	const [state,setState] = useState<State>({
		color:"red"
	})
	
	const cardStyle:React.CSSProperties = {
		height:200,
		width:150,
		backgroundColor:"#FFF",
		filter:"drop-shadow(0px 5px 5px #666)",
	}
	
	return(
		<div style={cardStyle}>
			<Square color={state.color}/>
			<Label color={state.color}/>
		</div>
	)
}

export default Card;