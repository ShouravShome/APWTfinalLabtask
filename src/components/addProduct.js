import {useParams} from "react-router";
import {useState} from "react";
import { useHistory } from "react-router"
import './user.css';


const AddProduct = ({addNewProduct})=>{
	//const{id:eid} = useParams();
	const history = useHistory();
	
	const [user, setUser] = useState({pname:  '', quantity: '', price: ''});
	
	const change = (e)=>{
		//console.log(e.target.value);
		const attr = e.target.name;
		const val = e.target.value;
		setUser({...user, [attr]: val})
	};
	
	const onsubmit = (e)=>{
		e.preventDefault()
		console.log(user);
		addNewProduct(user);
				
		history.push('/userlist');
	}
	
	return (
		<div className= 'frm'>
		
			<h3>Create Product Page: </h3>
				<form onSubmit={onsubmit}>
				<tr>
					<td>Employee Id: </td><td><input type='text' name='pname' value={user.pname} onChange={change} /></td> <br/>
				</tr>	
				<tr>
					<td>Employee Name: </td><td><input type='text' name='quantity' value={user.quantity} onChange={change} /> </td><br/>
				</tr>
				<tr>	
					<td>Contact No: </td><td><input type='text' name='price' value={user.price} onChange={change} /> </td> <br/>
				</tr>	
					<input type='submit' value='Create'/>
				</form>
		</div>
	);
};

export default AddProduct;