import { Link } from "react-router-dom"
const Navbar = ()=>{
	return(
		<div>
			<Link to="/create">Create</Link> |
			<Link to="/userlist">UserList</Link>
		</div>
	);
};
export default Navbar;