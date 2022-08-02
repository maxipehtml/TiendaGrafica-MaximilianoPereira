import Item from "../Item/Item";
import "./ItemList.css"

const ItemList = ({products}) => {
    return (
        <> 
        <ul className="cards0 ">
            {products.map(product => (
            <Item producte={product}/>
            ))}
        </ul>
        </>
    )
}

export default ItemList