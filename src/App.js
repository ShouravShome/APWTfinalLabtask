import UserList from './components/UserList';
import {users} from './usersData';
import ProductList from './components/ProductList';
import {products} from './productsData';
import {useState, useEffect} from 'react';
import CreateUser from './components/CreateUser';
import AddProduct from './components/addProduct';
import Navbar from './components/Navbar';
import Login from './components/login';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

	{/*const users = [
				{id: 1, name: 'Shome', dept: 'CSE'},
				{id: 2, name: 'Shourav', dept: 'SE'},
				{id: 3, name: 'KULU KULU', dept: 'EEE'},
	];*/}

function App() {
	
	{/*const url = `https://jsonplaceholder.typicode.com/posts`;
	//const [userlist, setUserList] = useState(users);
	const [userlist, setUserList] = useState([]);
	
	const getData = (url) =>{
		return fetch(url)
				.then(response=>response.json())
				.then(json=>json);
	}
	
	useEffect(()=>{
		getData(url).then(data=>setUserList(data));
	}, []);*/}
	
	const [userlist, setUserList] = useState(users);
	
	const [productlist, setProductList] = useState(products);
	
	const deleteuser = (id) =>{
		const list = userlist.filter((user)=>user.id !==id);
		setUserList(list);
	}
	const deleteproduct = (id) =>{
		const plist = productlist.filter((product)=>product.id !==id);
		setProductList(plist);
	}
	
	const addUser = (user)=>{
		setUserList([...userlist, user]);
	}
	
	const addproduct = (product)=>{
		setProductList([...productlist, product]);
	}
	
	return	(
		<Router>
			<Switch>
				<Route  exact path='/'>
					<Login />
				</Route>	
				<Route path='/userlist'>
					<div>
						<Navbar />
						<UserList list={userlist} deleteCallback={deleteuser} />
					</div>
				</Route>
				<Route path='/create'>
					<Navbar />
					<CreateUser status='add' addNewUser={addUser} />
				</Route>
				<Route path='/addproduct'>
					<AddProduct addNewProduct={addproduct} />
				</Route>
				<Route path='/edit/:id' children={<CreateUser status='edit' />}></Route>
				<Route path='*'>
					404 not found
				</Route>
			</Switch>
		</Router>
);
	
	//return (
		//<div>
			{/*<UserList list={users} deleteCallback={deleteuser} />*/}
			//<UserList list={userlist} deleteCallback={deleteuser} />
		//</div>
  //);
}

export default App;
