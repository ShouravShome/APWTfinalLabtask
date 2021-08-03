import './user.css';
import {Link, Router} from 'react-router-dom';


const Product = ({pname, quantity, price})=>{	
	return (
		<div className= 'std'>
			<h3>Name: {pname}</h3>
			<p>Quantity: {quantity}</p>	
			<p>Price: {price}</p>		
			{/*<button onClick={()=>callback(id)}>Delete</button>
			<button><Link to={`/edit/${id}`}>Edit</Link></button>*/}
		</div>
	);
}

export default Product;