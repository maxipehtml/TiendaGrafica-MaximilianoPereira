import Item from "../Item/Item";
import "./ItemList.css"

const ItemList = ({products}) => {
    return (
        <ul className="cards0 ">
            {products.map(product => (
            <Item product={product}/>
            ))}
        </ul>

    )

}

export default ItemList