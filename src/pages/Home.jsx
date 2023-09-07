import ItemListContainer from "../components/ItemListContainer";
import ProductosData from "../Json/ProductData.js"

const Home= ()=>{
    return (
<ItemListContainer productosData={ProductosData}/>
)
}

export default Home;