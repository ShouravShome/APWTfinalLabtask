import {useParams} from "react-router";
import {useState} from "react";
import { useHistory } from "react-router"
import './user.css';


const CreateUser = ({addNewUser})=>{
	//const{id:eid} = useParams();
	const history = useHistory();
	
	const [user, setUser] = useState({name:  '', id: '', dept: ''});
	
	const change = (e)=>{
		//console.log(e.target.value);
		const attr = e.target.name;
		const val = e.target.value;
		setUser({...user, [attr]: val})
	};
	
	const onsubmit = (e)=>{
		e.preventDefault()
		console.log(user);
		addNewUser(user);
				
		history.push('/userlist');
	}
	
	return (
		<div className= 'frm'>
		
			<h3>Create User Page: </h3>
				<form onSubmit={onsubmit}>
				<tr>
					<td>Employee Id: </td><td><input type='text' name='id' value={user.id} onChange={change} /></td> <br/>
				</tr>	
				<tr>
					<td>Employee Name: </td><td><input type='text' name='name' value={user.name} onChange={change} /> </td><br/>
				</tr>
				<tr>	
					<td>Contact No: </td><td><input type='text' name='contactno' value={user.contactno} onChange={change} /> </td> <br/>
				</tr>	
				<tr>
					<td>Username: </td><td><input type='text' name='uname' value={user.uname} onChange={change} /> </td><br/>
				</tr>
				<tr>	
					<td>Password: </td><td><input type='password' name='pass' value={user.pass} onChange={change} /> </td><br/>
				</tr>	
					<input type='submit' value='Create'/>
				
			</form>
		</div>
	);
};

export default CreateUser;