import Product from './Product';

const ProductList = ({list, deleteCallback})=>{
	return (
		<div>
			<h1>All Product List</h1>
			{
				list.map((p)=>{
					return <Product key={p.id} {...p} callback={deleteCallback}/>
				})
			}
		</div>
	);
}
export default ProductList;