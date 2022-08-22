import Item from "../Item/Item";
import "./ItemList.css"

const ItemList = ({products}) => {
    return (
        <> 
        <ul className="cards0 ">
            {products.map(product => (
                (product.stock > 0 ?
                <li key={product.id}>
                <Item producte={product}/>
                </li> 
                : null)
            ))}
        </ul>
        </>
    )
}

export default ItemList