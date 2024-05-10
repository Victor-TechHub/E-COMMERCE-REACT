import { Products } from "../../types"
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { motion } from "framer-motion"
import "./style.scss"
import { Link } from "react-router-dom";
import LikeButton from "../LikeButton";
// import { PATHS } from "../../routes/path";

const ProductCard = ({ item }: { item: Products }) => {


    return (
        <motion.main
            className="products"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ ease: "linear", type: "spring", stiffness: 200 }}
        >
            <div className="card">
                <LikeButton />
                <Link to={`/products/${item.id}`}>
                    <img src={item?.images[0]} alt={item?.title} />
                </Link>

            </div>
            <div className="details">
                <div className="name">
                    <span>{item?.title}</span>
                    <p>${item?.price.toFixed(2)}</p>
                </div>
                <div className="icon">
                    <LocalMallOutlinedIcon fontSize="medium" />
                </div>
            </div>
        </motion.main>
    )
}

export default ProductCard