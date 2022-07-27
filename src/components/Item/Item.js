import './Item.css'

const Item = ({ product }) => {
    return (
        <li key={product.id}>
            <div>
                <div>
                    <div className="cards1">
                        <h1>{product.name.toUpperCase()}</h1>
                        <img className="imagenProduct" src={product.img} alt="" />
                        
                        <button className='button-78'>Ver Detalles</button>
                        <h2>$ {product.price}</h2>
                        <h3>Stock: {product.stock}</h3>
                    </div>
                </div>
            </div>


        </li>

    )
}

export default Item
