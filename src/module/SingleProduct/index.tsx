import { useParams } from "react-router-dom"
import useProduct from "../../hooks/useProduct"
import Loader from "../../components/Loader"
import CustomAlert from "../../components/Alert"
import "./style.scss"
import LikeButton from "../../components/LikeButton"
import CustomSelect from "../../components/Select"
import { useState } from "react"

const SingleProduct = () => {
    const { id } = useParams()
    const { data, isLoading, error, isError } = useProduct(id)
    const [imagePreview, setImagePreview] = useState(0)
    const handlePreview = (index: number): void => {
        setImagePreview(index)
    }
    return (
        <>
            {isLoading ? <Loader loading={isLoading} /> :
                <section style={{ marginTop: "6%" }} className="product_container">
                    {isError ? <CustomAlert error={error?.message} /> : null}

                    <div className="image_container">
                        <div className="all_image_wrapper">
                            {data?.images.map((IMG, i) => (
                                <>
                                    <img src={IMG} alt="Image" key={i} onClick={() => handlePreview(i)} />
                                </>
                            ))}
                        </div>
                        <div className="main_image">
                            <img src={data?.images[imagePreview]} alt="" />
                            <LikeButton />
                        </div>
                    </div>

                    <div className="product_detail_container">
                        <h3>{data?.title} <span className="categoryName">{data?.category.name}</span></h3>
                        <p>{data?.description}</p>
                        <p className="price"> ${data?.price.toFixed(2)}</p>
                        <div className="action">
                            <CustomSelect />
                            <button>ADD TO BAG </button>
                        </div>
                    </div>

                </section>}
        </>

    )
}

export default SingleProduct