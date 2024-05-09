import { useContext } from "react"
import "./style.scss"
import { AppContext } from "../../context"

const Store = () => {
    const { allProducts } = useContext(AppContext)

    return (
        <div style={{ marginTop: "5%" }}>
            <div className="title">
                <span>Volt's Store</span>

                <section className="product_listings">
                    <div> All <p style={{ background: "gainsboro", color: "#333", padding: "5px", borderRadius: "5px", width: "30px", textAlign: "center" }}>{0}</p></div>

                    <div className="products">

                    </div>
                </section>
            </div>
        </div>
    )
}

export default Store