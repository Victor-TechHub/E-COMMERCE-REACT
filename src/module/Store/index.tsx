import ProductCard from "../../components/Card"
import Loader from "../../components/Loader"
import { getStore } from "../../hooks/getStore"
import "./style.scss"

const Store = () => {
    const { data, isLoading } = getStore()

    return (
        <>
            {isLoading ? <Loader loading={isLoading} /> : <div style={{ marginTop: "5%" }}>
                <div className="banner">
                    <span>All In Volt's Store</span>
                    <p>Browse our diverse selection of quality products,<br />
                        ranging from electronics and fashion to home essentials and more.<br />
                        Find everything you need conveniently in one place!
                    </p>
                </div>
                <div className="productGrid">
                    {data?.slice(0, 8).map(item => (
                        <ProductCard key={item.id} item={item} />
                    ))}
                </div>
            </div>}
        </>
    )
}

export default Store