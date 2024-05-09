import ProductCard from "../../../components/Card"
import { Products } from "../../../types"
import "./style.scss"

type Data = {
    data: Products[] | undefined
}

const Arrivals = ({ data }: Data) => {
    return (
        <section className="arrivals">
            <div className="title">
                <span>New Arrivals</span>
                <p>Our new arrivals are built to withstand your activities while you looking your best!</p>
            </div>
            <div className="items">
                {data?.slice(0, 8).map(item => (
                    <ProductCard key={item.id} item={item} />
                ))}
            </div>
            <div className="controls">
                <button>See All</button>
            </div>
        </section>
    )
}

export default Arrivals