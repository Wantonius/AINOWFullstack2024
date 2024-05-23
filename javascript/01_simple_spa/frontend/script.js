var mode = 0;

window.onload = function() {
	createForm();
}

createForm = () => {
	
	const root = document.getElementById("root");
	const form = document.createElement("form");
	form.setAttribute("class","m-3");
	
	//Type input and label
	const typeLabel = document.createElement("label");
	typeLabel.setAttribute("for","type");
	typeLabel.setAttribute("class","form-label");
	const typeLabelText = document.createTextNode("Type");
	typeLabel.appendChild(typeLabelText);
	const typeInput = document.createElement("input");
	typeInput.setAttribute("type","text");
	typeInput.setAttribute("name","type");
	typeInput.setAttribute("id","type");
	typeInput.setAttribute("class","form-control");

	//count input and label
	const countLabel = document.createElement("label");
	countLabel.setAttribute("for","count");
	countLabel.setAttribute("class","form-label");
	const countLabelText = document.createTextNode("Count");
	countLabel.appendChild(countLabelText);
	const countInput = document.createElement("input");
	countInput.setAttribute("type","number");
	countInput.setAttribute("name","count");
	countInput.setAttribute("id","count");
	countInput.setAttribute("class","form-control");

	//count input and label
	const priceLabel = document.createElement("label");
	priceLabel.setAttribute("for","price");
	priceLabel.setAttribute("class","form-label");
	const priceLabelText = document.createTextNode("Price");
	priceLabel.appendChild(priceLabelText);
	const priceInput = document.createElement("input");
	priceInput.setAttribute("type","number");
	priceInput.setAttribute("name","price");
	priceInput.setAttribute("id","price");
	priceInput.setAttribute("step","0.01");
	priceInput.setAttribute("class","form-control");

	
	//Append form and root
	form.append(typeLabel,typeInput,countLabel,countInput,priceLabel,priceInput);
	
	root.appendChild(form);
}