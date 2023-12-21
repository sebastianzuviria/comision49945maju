import Item from "../Item/Item"

const ItemList = ({ products }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column'}}>
            {
                products.map(prod => {
                    return (
                        <Item key={prod.id} {...prod}/>
                    )
                })
            }
        </div>
    )
}

export default ItemList