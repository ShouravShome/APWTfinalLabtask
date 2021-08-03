import {useParams} from "react-router";
import {useState} from "react";
import './user.css';

const Login = () => {
	
	const [user, setUser] = useState({id:  '', pass: ''});

const change = (e)=>{
		//console.log(e.target.value);
		const attr = e.target.name;
		const val = e.target.value;
		setUser({...user, [attr]: val})
	};
	
	return (
		<div className= 'frm'>
			<h1> Welcome to Login Page </h1>
				<form onSubmit={onsubmit}>
						<tr>
							<td>Employee Id: </td><td><input type='text' name='id' value={user.id} onChange={change} /></td> <br/>
						</tr>	
						<tr>
							<td>Password: </td><td><input type='password' name='pass' value={user.pass} onChange={change} /> </td><br/>
						</tr>
						<input type='submit' value='Login'/>
				</form>	
		</div>		
	);	
};

export default Login;