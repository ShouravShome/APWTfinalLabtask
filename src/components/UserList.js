import User from './User';

const UserList = ({list, deleteCallback})=>{
	{/*const users = [
				{id: 1, name: 'Shome', dept: 'CSE'},
				{id: 2, name: 'Shourav', dept: 'SE'},
				{id: 3, name: 'KULU KULU', dept: 'EEE'},
	];	*/}
	return (
		<div>
			<h1>All User List</h1>
			{/*<User id='1' name='Shome' dept='CSE' />*/}
			{/*<User{...user}/>*/}
			{/*{
				users.map((u)=>{
					return <User {...u}/>
				})
			}*/}
			{
				list.map((u)=>{
					return <User key={u.id} {...u} callback={deleteCallback}/>
				})
			}
		</div>
	);
}
export default UserList;