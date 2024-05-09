import { Products } from "../../types"
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { motion } from "framer-motion"
import "./style.scss"
import { useState } from "react";

const ProductCard = ({ item }: { item: Products }) => {
    const [favourite, setFavourite] = useState(false)

    const handleLikedProduct = (): void => {
        setFavourite(!favourite)
    }

    return (
        <motion.main
            className="products"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ ease: "linear", type: "spring", stiffness: 200 }}
        >
            <div className="card">
                <i onClick={handleLikedProduct}> {favourite ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}</i>
                <img src={item?.images[0]} alt={item?.title} />
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