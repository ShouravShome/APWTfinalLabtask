import './user.css';
import {Link, Router} from 'react-router-dom';

//const User = ({id, name, dept, callback})=>{
const User = ({id, name, contactno, uname,callback})=>{	
	return (
		<div className= 'std'>
			<h3>Id: {id}</h3>
			<p>Name: {name}</p>	
			<p>Contact No: {contactno}</p>	
			<p>Username: {uname}</p>	
			<button onClick={()=>callback(id)}>Delete</button>
			<button><Link to={`/edit/${id}`}>Edit</Link></button>
		</div>
	);
}

export default User;