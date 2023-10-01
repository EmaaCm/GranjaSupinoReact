import { useCollection } from "../hooks/useCollection"
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
export const Home = () => {
  const {data, loading} = useCollection('products')

  return loading ? <h1>Cargando...</h1> : <ItemListContainer productsData={data} />
}
