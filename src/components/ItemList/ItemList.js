import Item from "../Item/Item";
import "./ItemList.css"

const ItemList = ({products}) => {
    return (
        <> 
        <ul className="cards0 ">
            {products.map(product => (
                <li key={product.id}>
            <Item producte={product}/>
            </li>
            ))}
        </ul>
        </>
    )
}

export default ItemList